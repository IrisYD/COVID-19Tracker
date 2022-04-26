import React, { useEffect, useState } from 'react';
import { getSessiontUser } from '../services/GetService';

const AppContext = React.createContext({
    username: null,
    setUsername: null
});

const ContextRoot = ({children}) => {
    const [username, setUsername] = useState(null);

    useEffect(() => {
        getSessiontUser().then(res => {
            console.log('Currently logged in user:', res?.user);
            setUsername(res.user);
            sessionStorage.setItem('username', res.user);
        })
    }, [])

    return <AppContext.Provider value={{
        username,
        setUsername,
    }}>
        {children}
    </AppContext.Provider>
}

export { AppContext, ContextRoot };