import React from "react";
import LunchGroup from "./LunchGroup";

export default function LunchGroups(props) {
  return (
    <div>
      <h2>Here are your Lunch Groups:</h2>
      <div className="lunchGroupsWrapper">
        {props.groups.map((group, i) => (
          <LunchGroup key={"lunch-group-" + i} group={group} groupNum={i} />
        ))}
      </div>
    </div>
  );
}
