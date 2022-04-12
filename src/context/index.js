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
            console.log(res?.user);
            setUsername(res.user)
        })
    }, [])

    return <AppContext.Provider value={{username, setUsername}}>
        {children}
    </AppContext.Provider>
}

export { AppContext, ContextRoot };