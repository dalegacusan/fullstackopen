import React from "react";

export default function Buttons(props) {
  const { setStatistic } = props;

  return (
    <div>
      <button type="button" name="good" onClick={(e) => setStatistic(e)}>
        Good
      </button>
      <button type="button" name="neutral" onClick={(e) => setStatistic(e)}>
        Neutral
      </button>
      <button type="button" name="bad" onClick={(e) => setStatistic(e)}>
        Bad
      </button>
    </div>
  );
}