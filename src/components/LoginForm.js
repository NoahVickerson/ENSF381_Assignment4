import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthMessage';
import DisplayStatus from './DisplayStatus';
import './LoginForm.css';
import logo from '../images/logo.jpg';


function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { message, setMessage } = useContext(AuthContext);
    const navigate = useNavigate();

    const validateInputs = () => {
        if (!username || !password) {
            setMessage({ type: 'error', text: 'Username and password cannot be empty!' });
            return false;
        }
        if (password.length < 8) {
            setMessage({ type: 'error', text: 'Password must be at least 8 characters!' });
            return false;
        }
        return true;
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!validateInputs()) return;

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const users = await response.json();
            const validUser = users.find(user => user.username === username && user.email === password);

            if (validUser) {
                setMessage({ type: 'success', text: 'Login successful! Redirecting...' });
                setTimeout(() => navigate('/courses'), 2000);
            } else {
                setMessage({ type: 'error', text: 'Invalid username or password!' });
            }
        } catch (error) {
            setMessage({ type: 'error', text: 'Failed to fetch user data!' });
        }
    };

    return (
        <div className="login-container">
            <header>
                <img src={logo} alt="LMS Logo" style={{ width: '100px', height: '100px' }} />
                <h1>LMS - Learning Management System</h1>
            </header>

            <nav>
                <a href="/">Homepage</a>
            </nav>

            <main>
                <h2>LMS Login</h2>
                <form onSubmit={handleLogin} className="login-form">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        className="login-input"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        className="login-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit" className="main-button">Login</button>
                </form>

                {message && <DisplayStatus type={message.type} message={message.text} />}

                <a href="#" className="forgot-password">Forgot Password?</a>
                <br />
                <a href="/signup">Don't have an account? Sign Up</a>
            </main>

            <footer>
                <p>&copy; 2025 LMS. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default LoginForm;
