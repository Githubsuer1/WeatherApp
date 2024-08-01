import { useState, useEffect } from "react";

function useWeather(input){
    const [data,setData] = useState({})
    useEffect(()=>{

    }, [input])
    console.log(data);
    return data;
}

export default useWeather;