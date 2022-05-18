import React from 'react';
import styles from "./ResponsesView.module.css"
import Response from "./Response";

const ResponsesView = (props) => {
    const {responses} = props;
    return (
        <div className={styles.responsesContainer}>
            <h1 className={styles.header}>Responses</h1>
            {(responses && responses.length > 0) ?
                (responses.map((response, i) => <Response key={i} data={response} />)) :
                <p className={styles.noDataText}>No responses found</p>}
        </div>
    );
}

export default ResponsesView;
