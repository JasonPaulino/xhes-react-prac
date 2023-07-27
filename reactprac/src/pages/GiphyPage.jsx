import { useState, useEffect } from "react";

export default function GiphyPage(){
    // create a useState for the giphs
        const [trendingGifs, setTrendingGifs] = useState([]);
    // useEffect
        // create a async function to fetch from the api
        useEffect(()=>{
            async function fetchGif(){
                let url = `https://api.giphy.com/v1/gifs/trending?api_key=${import.meta.env.VITE_GIPHY_API_KEY}`
                try{
                    let response = await fetch(url);
                    let data =  await response.json();
                    console.log(data.data)
                    setTrendingGifs(data.data)
                } catch (error) {
                    console.log(error);
                }
            }
            fetchGif();
        },[])

        return (
            trendingGifs.map((res, index) => {
                const { images:  { fixed_width: { url } } } = res;
                // let url = res.images.fixed_width.url;
                return (
                    <img src={url} key = {index}/>
                )
            })
        )
}

