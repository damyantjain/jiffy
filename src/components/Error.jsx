import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
        <div>
            <h1>Oops!!</h1>
            <h3>Something went wrong</h3>
            <h6>{err.status} {err.statusText}</h6>
        </div>
    );
}
export default Error;