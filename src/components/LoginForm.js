import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';
import logo from '../images/logo.jpg';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const users = await response.json();
            const validUser = users.find(user => 
                user.username === username && user.email === password
            );

            if (validUser) {
                setMessage('Login successful! Redirecting...');
                setTimeout(() => navigate('/course-view'), 2000);
            } else {
                setMessage('Invalid username or password!');
            }
        } catch (error) {
            setMessage('Failed to fetch user data!');
        }
    };

    return (
        <div className="login-container">
            <header>
                <img src="/logo.jpg" alt="LMS Logo" style={{width: '100px', height: '100px'}} />
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
                </form>
                <bottomform padding>
                <button type="submit" className="main-button">Login</button>
                <br></br>
    
                {message && <div style={{margin: '20px', padding: '10px', border: '2px solid #333', background: '#f9f9f9'}}>{message}</div>}
                
                <a href="#" className="forgot-password">Forgot Password?</a>
                <br />
                <a href="/signup">Don't have an account? Sign Up</a>
                </bottomform>
            </main>
            
            <footer>
                <p>&copy; 2025 LMS. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Login;