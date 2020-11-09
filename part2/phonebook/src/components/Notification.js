import React from "react";

export default function Notification(props) {
    const { status, message } = props.message;

    if (message === null) {
        return null;
    };

    return (
        <div className={status === "success" || status === "updateSuccess" ? "success" : "error"}>
            {message}
        </div>
    );
}