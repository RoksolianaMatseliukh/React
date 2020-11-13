import React from "react";

import SingleDoneItem from "./single-done-item/SingleDoneItem";

const DoneList = ({doneList}) => (
    <div>
        { doneList.length ? <h4> Finished task(s): </h4> : <p> no finished task(s) </p> }
        <br/>

        {
            doneList.map(doneItem => <SingleDoneItem key={doneItem.id} doneItem={doneItem}/> )
        }
    </div>
);

export default DoneList;
