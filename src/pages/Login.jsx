import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await login(email, password);
            navigate('/');
        } catch (err) {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="auth-container">
            <Link to="/" className="logo">amazon</Link>
            <h1>Sign-In</h1>
            {error && <p style={{ color: 'red', fontSize: '0.9rem' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email (phone for mobile accounts)</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="auth-btn">Sign In</button>
            </form>

            <div className="auth-footer">
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <br />
                <p>New to Amazon? <Link to="/signup">Create your Amazon account</Link></p>
            </div>
        </div>
    );
};

export default Login;
