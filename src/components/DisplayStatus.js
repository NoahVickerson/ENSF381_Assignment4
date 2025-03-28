import React from 'react';
import './LoginForm.css';

function DisplayStatus({ type, message }) {
    return (
        <div className={`status-message ${type === 'success' ? 'status-success' : 'status-error'}`}>
            {message}
        </div>
    );
}

export default DisplayStatus;
