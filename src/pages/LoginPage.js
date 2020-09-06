import React from 'react';

const LoginPage = () => {
    return (
        <div>
            <label htmlFor="">podaj login <input type="text" /> </label>
            <label htmlFor="">podaj hasło <input type="password" /> </label>
            <button>zaloguj</button>
        </div>
    );
}

export default LoginPage;