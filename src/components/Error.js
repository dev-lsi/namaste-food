import { useState } from "react";
import { useRouteError } from "react-router-dom";

const Error=()=>{

    const err = useRouteError()
    

    return (<div>
        <h1>Ooops!</h1>
        <h2>Something went wrong!</h2>
        <p className="error-message">{err.error.message}</p>
    </div>)
}

export default Error;