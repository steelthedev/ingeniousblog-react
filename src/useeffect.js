import { useEffect } from "react";
import { useState } from "react"

const useFetch = (url) =>{

    const [data , setData] = useState(null);
    const [isPending , setisPending] = useState(true);
    const [error , setError] = useState(null);



useEffect(() => {

    const abortCont = new AbortController();

        fetch(url  , {signal:abortCont.signal})

    .then(res=>{
        if(!res.ok){
            throw error("Could not fetch data ");
        }
        return res.json()
    })

    .then(data=>{
        setData(data);
        setisPending(false);
        setError(null);
    })

    .catch(err => {
        if (err.name === "AbortError"){
            console.log('error');
        }
        else{
            setError(err.message);
            setisPending(false);
        }
    
    });

    return () => abortCont.abort();

}, [url]);

return {data, error , isPending}
}

export default useFetch;