import React, { memo, useEffect, useState } from "react";

export function AboutBottom () {
    let [num, setNum] = useState(1);
    let changeState = () => {
        setNum(num + 1);
    }
    return (
        <>
        <div>{num}</div>
        <button onClick={changeState}>改变</button>
        </>
    )
}
