import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRandomGreeting } from "../redux/greetingsSlice";
import { useEffect } from "react";

const Greetings = () =>{
    const greeting = useSelector((state)=>state.greeting)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchRandomGreeting())
    },[])
    return (
        <>
            <h1>{greeting}</h1>
        </>
    )
}

export default Greetings;