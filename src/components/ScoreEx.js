import React from 'react';

function ScoreEx({ value }) {
    const date = new Date();
    const formattedValue = parseFloat(value).toFixed(2);

    return (
        <div className="container my-4">
            <div className="alert alert-success">
                המרה: <strong>{formattedValue}</strong>
            </div>
            <div className="text-muted">
                {date.toLocaleString()}
            </div>
        </div>
    );
}

export default ScoreEx;
