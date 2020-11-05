import React from "react";

export default function Filter(props) {
    const { filterName, handleFilterChange } = props;

    return (
        <div>
            Filter shown with <input type="text" value={filterName} onChange={handleFilterChange} />
        </div>
    );
}