import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return(
        <div>
            <h1>Oops!!!</h1>
            <h2>Something went worng.</h2>
            <h4>
                {err.status}: {err.statusText}
            </h4>
        </div>
    );
}

export default Error;