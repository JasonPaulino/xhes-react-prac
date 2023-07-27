import {useState} from "react";

export default function LikeButton(){
    const [num, setNum] = useState(0);
    function handleClick(){
        setNum(num + 1);
    }
    return (
        <>
            <button onClick={handleClick}> like</button>
            {num} {num > 1 || num === 0 ? (<p>Likes</p>): (<p>Like</p>)}
        </>
    )
}