import { Link } from "react-router-dom";


/**
 * Component for showing route error message 404
 *
 * @namespace
 * @component
 * @returns {Error} Returns Error component
 */
const Error = () => {
    return (
        <div className="error">
            <span>404</span>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default Error