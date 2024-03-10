function Error() {
    return (
        <div className="error">
            <div className="error-card">
                <div className="error-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor"
                         className="bi bi-exclamation-diamond-fill" viewBox="0 0 16 16">
                        <path
                            d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                    </svg>
                </div>
                <h1>Not found</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, cupiditate debitis, dolor dolore
                    dolorem explicabo facere hic id iure non optio placeat porro quae rem repellendus reprehenderit
                    repudiandae, rerum tempore.</p>
                <button className="light-button inline">Home</button>
            </div>
        </div>
    );
}

export default Error;