import React from "react";

export default function Header(props) {

    const { courseName } = props;

    return (
        <div>
            <h1>{courseName}</h1>
        </div>
    );
}