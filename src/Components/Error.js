import { useRouteError } from "react-router-dom";

const Error= ()=>
{
    const err = useRouteError(); // it is hook / function / it will output an object
    return(
        <div>
            <h1>Oop!</h1>
            <h2>We can' t reach Aunty...............</h2>
            <h2>{err.status + ":" + err.statusText}</h2>
        </div>
    )
}

export default Error;