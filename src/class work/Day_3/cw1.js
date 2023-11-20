import React, { useState } from "react";

export default function ToggleMessage() {
    const [showMessage, setShowMessage] = useState(false);

    const toggleMessage = () => {
        setShowMessage(!showMessage)
    }

    return (
        <div>
            <button onClick={toggleMessage}>
                {showMessage ? 'Hide' : 'Show'}
            </button>
            {showMessage && <p>Hi</p>}
        </div>
    )
}