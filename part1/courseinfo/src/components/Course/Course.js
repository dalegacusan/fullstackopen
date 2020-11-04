import React from "react";
import Header from "./Header/Header";
import Content from "./Content/Content";
import Total from "../Total/Total";

export default function Course(props) {
    const { id, name, parts } = props.content;

    return (
        <div>
            <Header courseName={name} />
            <Content parts={parts} />
            <Total parts={parts}/>
        </div>
    );
}