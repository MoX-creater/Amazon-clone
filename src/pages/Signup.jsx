import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            return setError('Passwords do not match');
        }

        try {
            await signup(name, email, password);
            navigate('/');
        } catch (err) {
            setError('Failed to create an account');
        }
    };

    return (
        <div className="auth-container">
            <Link to="/" className="logo">amazon</Link>
            <h1>Create account</h1>
            {error && <p style={{ color: 'red', fontSize: '0.9rem' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Your name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="First and last name"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Mobile number or email</label>
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
                        placeholder="At least 6 characters"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Re-enter password</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="auth-btn">Continue</button>
            </form>

            <div className="auth-footer">
                <p>Already have an account? <Link to="/login">Sign in</Link></p>
            </div>
        </div>
    );
};

export default Signup;
