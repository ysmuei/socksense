import React, { useEffect, useState } from "react";
import "../styles/components/Rcmd/rcmd41.css";
import sockimg from "../assets/Recommend/sock-img.svg"
import rcmdstep1 from "../assets/Recommend/Rcmdstep1.webp"

const Rcmd41 = () => {
  const [isSockColor, setIsSockColor] = useState("#ffffff");
  const [isColorText, setIsColorText] = useState("흰색");
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
        <img src={rcmdstep1}/>
      </div>
      <div className="contentTexts">
        <h2 className="contentText1">촬영을 완료하셨군요!</h2>
        <p className="contentText2">화면 하단의 버튼을 이용해 시작하세요!</p>
      </div>
      <div className="sockColorContain">
        <div className="sockContent">
            <img style={{fill: isSockColor}} className="sockColorImg" src={sockimg} alt="양말이미지"/>
            <p className="sockTextp">내가 촬영한 양말은?</p>
            <h2 className="sockTexth2">{isColorText} 양말</h2>
        </div>
      </div>
      <button className="RcmdBtn">시작하기</button>
    </div>
  );
};

export default Rcmd41;
