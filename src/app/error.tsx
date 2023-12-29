'use client';

import React, {useEffect} from 'react';
import {Simulate} from "react-dom/test-utils";

interface IError {
    error : Error;
    reset : () => void
}
function Error( props : IError ) {
    useEffect(()=>{
        console.error(props.error.message)
    })
    return (
        <>
            <h1>에러 페이지</h1>
            <button onClick={()=>{
                props.reset();
            }}>
                새로고침
            </button>
        </>
    );
}

export default Error;