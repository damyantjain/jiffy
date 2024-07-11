import { createContext } from 'react';

const UserContext = createContext({
    logged_in_user : "Default User"
});

export default UserContext;