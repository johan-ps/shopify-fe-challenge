import React, {useState} from 'react';
import styles from './Form.module.css'

const API_ENDPOINT = "https://api.openai.com/v1/engines/text-curie-001/completions";

const Form = (props) => {

    const [prompt, setPrompt] = useState("");
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(true);

    const onInputHandler = (event) => {
        setPrompt(event.target.value)
        setDisabled(!event.target.value);
    }

    const onSubmitHandler = async () => {
        setLoading(true);
        const data = {
            prompt,
            temperature: 0.5,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        };

        const response = await fetch(API_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.REACT_APP_OPENAI_SECRET}`
            },
            body: JSON.stringify(data)
        })

        if (response.ok) {
            const resData = await response.json()
            console.log(resData)
            if (resData && resData.choices && resData.choices.length > 0 && resData.choices[0]) {
                const responseText = resData.choices[0].text
                props.onSubmit({prompt, response: responseText})
            }
        }
        setLoading(false)
        setDisabled(true);
        setPrompt("");
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Fun with AI</h1>
            <textarea onChange={onInputHandler} placeholder="Enter Prompt" className={styles.textarea} value={prompt} cols="30" rows="10"></textarea>
            <div className={styles.spinnerContainer}>
                <button disabled={loading || disabled} onClick={onSubmitHandler} className={styles.button}>Submit</button>
                {loading && <div className={styles.spinner}></div>}
            </div>
        </div>
    );
}

export default Form;
