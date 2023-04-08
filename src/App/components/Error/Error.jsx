import { useRouteError } from "react-router-dom";
import './Error.css'




function Error() {
    const error = useRouteError();
    console.error(error);

    return (
      <div id="Error">
        <h1>Error!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
            <i>{error.statusText || error.message}</i>
        </p>
        <button> Home </button>
      </div>
    )
  }
  
  export default Error
  