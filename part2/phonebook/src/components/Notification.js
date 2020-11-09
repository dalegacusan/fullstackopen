import React from "react";

export default function Notification(props) {
    const { message } = props;

    if(message === null){
        return null;
    };

    return (
        <div className="error">
            {message}
        </div>
    );
}