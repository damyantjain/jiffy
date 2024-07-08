import { useEffect } from "react";

export const User = () => {

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("User component is mounted")
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, [])

    return(
        <div className="user-card">
            <h3>Damyant Jain</h3>
            <h4>Boston, MA</h4>
            <h4>Linkedin - @damyant</h4>
        </div>
    );
}

export default User;