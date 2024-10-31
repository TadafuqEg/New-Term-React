import React, { useEffect } from 'react';
import './Notification.css'

const Notification = ({ message, type, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000); // Auto-hide after 3 seconds

        return () => clearTimeout(timer); // Cleanup on component unmount
    }, [onClose]);

    return (
        <div className={`notification ${type}`}>
            <p>{message}</p>
            <button onClick={onClose}>X</button>
        </div>
    );
};

export default Notification;
