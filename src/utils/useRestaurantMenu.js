import { useEffect, useState } from 'react'
import { MENU_API } from './constants';

const useRestaurantMenu = (resId) => {

    const [resInf, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResInfo(json);
    }
    return resInf;
}

export default useRestaurantMenu;