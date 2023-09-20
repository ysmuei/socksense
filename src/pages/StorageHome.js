import React, { useEffect, useState } from "react";
import '../styles/pages/storageHome.css'

const StorageHome = () => {
    const [windowDimensions, setWindowDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
      });

    useEffect(() => {
        const handleResize = () => {
          setWindowDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

    return(
        <div>
            
        </div>
    )
}
export default StorageHome;