import { useEffect, useState } from 'react';

const useOnlineStatus = () => {

    const [online, setOnline] = useState(true);
    useEffect(() => {
        window.addEventListener("online", (e) => {
            setOnline(true);
        });
        window.addEventListener("offline", (e) => {
            setOnline(false);
        })
    }, []);

    return online;
}
export default useOnlineStatus;