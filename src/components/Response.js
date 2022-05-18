import React from 'react';
import styles from './Response.module.css'

const Response = (props) => {
    const {data: {prompt, response}} = props;
    return (
        <div className={styles.container}>
            <div className={styles.leftSection}>
                <p>Prompt:</p>
                <p>Response:</p>
            </div>
            <div className={styles.rightSection}>
                <p>{prompt}</p>
                <p>{response}</p>
            </div>
        </div>
    );
}

export default Response;
