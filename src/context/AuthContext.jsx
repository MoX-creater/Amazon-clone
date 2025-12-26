import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Load user from localStorage on mount
    useEffect(() => {
        const storedUser = localStorage.getItem('amazon_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        // Mock login logic
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email && password) {
                    const fakeUser = { email, name: email.split('@')[0] };
                    setUser(fakeUser);
                    localStorage.setItem('amazon_user', JSON.stringify(fakeUser));
                    resolve(fakeUser);
                } else {
                    reject(new Error('Invalid credentials'));
                }
            }, 500);
        });
    };

    const signup = async (name, email, password) => {
        // Mock signup logic
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email && password && name) {
                    const fakeUser = { email, name };
                    setUser(fakeUser);
                    localStorage.setItem('amazon_user', JSON.stringify(fakeUser));
                    resolve(fakeUser);
                } else {
                    reject(new Error('All fields are required'));
                }
            }, 500);
        });
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('amazon_user');
    };

    const value = {
        user,
        login,
        signup,
        logout,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
