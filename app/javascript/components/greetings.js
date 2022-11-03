import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { randomGreeting } from "../redux/greetingsSlice";

const Greetings = () =>{
    const greeting = useSelector((state)=>state.greetingReducer)
    return (
        <>
            <h1>{greeting}</h1>
        </>
    )
}

export default Greetings;