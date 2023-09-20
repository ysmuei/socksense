import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/pages/recommend.css";

const Rcmd44 = () => {
  const navigate = useNavigate();
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
  
  return (
    <div
      className="RcmdContainer"
      style={{
        width: `${windowDimensions.width}px`,
        height: `${windowDimensions.height}px`,
        objectFit: "cover",
      }}
    >
      <div className="header">
        
      </div>
      <div className="contentTexts">
        <h2 className="contentText1">
          촬영한 양말에 맞는 코디를
          <br />
          추천드려요!
        </h2>
        <p className="contentText2">화면 하단의 버튼을 이용해 촬영하기!</p>
        <button className="RcmdBtn" 
        >촬영하기</button>
        
      </div>
    </div>
  );
};

export default Rcmd44;
