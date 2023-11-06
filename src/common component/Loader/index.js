import React, { useEffect } from "react";
import $ from "jquery";
import Lottie from "lottie-react";
import * as animationData from "./loader";



const Loader =()=>{

    const defaultoption ={
      loop: true,
      autoplay: true,
      animationData : animationData.default,
      rendererSettings:{
        preserveAspectRatio:"xMidYMid slice"
      }

    }

    useEffect=(()=>{
        $("body").addClass("loading")
        return()=>{
            $("body").removeClass("loading")

        }
        
    },[])
    return(<div>
        <Lottie option={defaultoption} height={250} width={250}/>
    </div>)
}
export default Loader;