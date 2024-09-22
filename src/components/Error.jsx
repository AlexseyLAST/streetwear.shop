import React from "react";

function Error() {

    const handleRefresh = () => {
        window.history.go(0); 
    };

    return (
        <div className="error-container">
            <h1 className="error-title">Произошла ошибка</h1>
            <p className="error-message">проверьте подключение к интернету. Возможно сервер отключился или временно не работает.</p>
            <button className="refresh-button" onClick={handleRefresh}>Обновить</button>
        </div>
    );
}

export default Error;