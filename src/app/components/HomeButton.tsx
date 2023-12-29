'use client';
import React from 'react';
import {useRouter} from "next/navigation";

function HomeButton() {
    const router = useRouter();
    const handleClick= ()=>{
        router.push('/')
    }
    return (
        <button className={"bg-blue-500 p-2 "} onClick={handleClick}>홈으로</button>
    );
}

export default HomeButton;