import React from 'react';
import HomeButton from "@/app/components/HomeButton";
import {getForecast} from "@/app/utils/getForecast";
interface IDetail {
    params : {
        location : string
    }
}

export default async function Detail(props : IDetail) {
    const name = props.params.location === 'seoul' ? '서울' : '';
     const res = await getForecast(props.params.location);
    console.log(res)
    return (
        <>
            <h1>{name}의 3일 예보</h1>
            <ul>
                {res.forecast.forecastday.map((day)=> (
                    <li key={day.date}>{day.date}일의 평균온도 : {day.day.avgtemp_c}</li>
                    ))}
            </ul>
            <HomeButton/>
        </>
    );
}

