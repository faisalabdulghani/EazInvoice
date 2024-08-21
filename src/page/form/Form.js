import React, { useState } from 'react';
import './style.css';

const Form = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowPopup(true);
    };

    return (
        <div>
            <h1 className="h1">Fill the form to delete the data</h1>
            <div className="form-container">

                <h2 className="form-title">Delete Form</h2>
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label>
                            Username or Email:
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                className="form-input"
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Password:
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="form-input"
                            />
                        </label>
                    </div>
                    <button type="submit" className="submit-button">
                        Submit
                    </button>
                </form>

                {showPopup && (
                    <div className="popup-overlay">
                        <div className="popup-content">
                            <h3>Your Account {username} Deleted Succesfully</h3>
                            <button onClick={() => setShowPopup(false)} className="close-button">
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Form;