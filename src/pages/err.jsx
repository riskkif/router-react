import { useRouteError } from "react-router-dom";

const Err = () =>{
    const error = useRouteError();
    return(
        <div className="text-center mt-20"> 
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )

}

export default Err