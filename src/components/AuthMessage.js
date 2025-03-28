import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [message, setMessage] = useState(null);

    return (
        <AuthContext.Provider value={{ message, setMessage }}>
            {children}
        </AuthContext.Provider>
    );
}
