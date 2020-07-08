import React from "react";
import Color from "./Color";

export default function ColorList ({colors=[]}){

    if(!colors.length)
    {
        return <div> No colors listed.</div>;
    }
    else
    {
        return (
            <div>
                {
                    colors.map(color=><Color key={color.id} {...color}/>)
                }
            </div>    
        );
    }

}