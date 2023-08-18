import React, { useState } from 'react';
import styles from './styles.module.css';
import { createUser } from '../../services/createUser';

const SignUp = () => {

    const [ name, setName ] = useState('');
    const [ surname, setSurname ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ password2, setPassword2 ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        createUser({name, surname, email, password, password2});
    };

    return (
        <div className={styles.mainContainer}>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <label className={styles.labelContainer}>
                    Name
                    <input type='text' value={name} placeholder='Your name' onChange={e => setName(e.target.value)}/>
                </label>
                <label className={styles.labelContainer}>
                    Surname
                    <input type='text' value={surname} placeholder='Your surname' onChange={e => setSurname(e.target.value)}/>
                </label>
                <label className={styles.labelContainer}>
                    Email
                    <input type='email' value={email} placeholder='example@example.com' onChange={e => setEmail(e.target.value)}/>
                </label>
                <label className={styles.labelContainer}>
                    Password
                    <input type='password' value={password} placeholder='Write your password here' onChange={e => setPassword(e.target.value)} />
                </label>
                <label className={styles.labelContainer}>
                    Repeat Password
                    <input type='password' value={password2} placeholder='Repeat your password here' onChange={e => setPassword2(e.target.value)} />
                </label>
                <button type='submit'>Sign In</button>
            </form>
            <button className={styles.btn}>
                Already have an account? Sign in here.
            </button>
        </div>
    );
};

export default SignUp;
