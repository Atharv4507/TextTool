import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types'
const data = [
    "https://freepngimg.com/thumb/mario/114579-mario-hd-image-free.png",
    "https://pngimg.com/uploads/mario/mario_PNG125.png",
    "https://freepngimg.com/thumb/cartoon/4-2-cartoon-transparent.png"
]
export default function Crausel(props) {

    const [activeImage, setActiveImage] = useState(0);
    const handlePreviousState = ()=> {
        setActiveImage(!activeImage ? data.length -1 : activeImage -1);
    }
    const handleNextState = () => {
        setActiveImage((activeImage + 1) %  data.length)
    }
    useEffect(() => {
        const timer = setTimeout(() =>{
            handleNextState();
        }, 5000);
        return () => {
            clearTimeout(timer);
        };

    }, [activeImage]);
    return(
        <div style={{width:300,height:350, display:"flex", justifyContent:"center"}}>
            <button onClick={handlePreviousState} style={{width:55,height:45,marginTop:"50%"}}>Prev</button>
            {data.map((url, i) => (
                <img 
                    key={url}
                    src={url}
                    className={"img-wrap-flex  " + (activeImage === i ? "block" : "overflow-hidden")}
                    alt="..."
                    style={{ width: "300px", height: "300px" }}
                />
            ))}
            <button onClick={handleNextState} style={{width:55,height:45,marginTop:"50%"}}>next</button>
        </div>
    )
}