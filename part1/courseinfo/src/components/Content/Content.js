import React from "react";
import Total from "../Total/Total"

export default function Content(props) {
    const {content} = props;
    let total = 0;

    return (
        <div>
            {
                content.map( item => {
                    const {id, partName, exercises} = item;
                    total += exercises;

                    return (
                        <div key={id}>
                            <p>{partName} {exercises}</p>
                        </div>
                    );
                } )
            }

            <Total total={total}/>
        </div>
    );
}