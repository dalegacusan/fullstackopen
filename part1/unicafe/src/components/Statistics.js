import React from "react";

export default function Statistics(props) {
    const { text, statistic } = props;

    return (
        <tr>
            <td>
                <span>{text}</span>
            </td>
            <td>
                <span>{statistic}{text === "positive" ? "%" : null}</span>
            </td>
        </tr>
    );
}
