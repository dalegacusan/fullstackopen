import React from "react";

export default function Content(props) {
    const { parts } = props;

    return (
        <div>
            {
                parts.map(item => {
                    const { id, name, exercises } = item;

                    return (
                        <div key={id}>
                            <p>{name} {exercises}</p>
                        </div>
                    );
                })
            }
        </div>
    );
}