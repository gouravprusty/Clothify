import './CSS/Error.css';

export default function Error() {
    return(
        <div className="error-page">
            <div className="container">
                <div className="error__inner">
                    <h1>404</h1>
                    <h2>Oops! Page not found</h2>
                    <p>Sorry! It looks like the page you're trying to reach doesn't exist or has been moved.</p>
                </div>
            </div>
        </div>
    )
};
