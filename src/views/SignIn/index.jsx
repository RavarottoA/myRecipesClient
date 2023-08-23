import React, { useState } from 'react';
import { loginUser } from '../../services/loginUser';

const SignIn = () => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser({email, password});
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Email
                    <input type='email' value={email} placeholder='example@example.com' onChange={e => setEmail(e.target.value)}/>
                </label>
                <label>
                    Password
                    <input type='password' value={password} placeholder='Write your password here' onChange={e => setPassword(e.target.value)} />
                </label>
                <button type='submit'>Sign In</button>
            </form>
            <button>
                Don't have an account? Register here.
            </button>
        </>
    );
};

export default SignIn;
