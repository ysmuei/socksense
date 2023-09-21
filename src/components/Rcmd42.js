import React, { useEffect, useState } from "react";
import "../styles/components/Rcmd/rcmd42.css";
import rcmdStep2 from "../assets/Recommend/RcmdStep2.webp";
import maleColor from "../assets/Recommend/maleColor-icon.webp";
import male from "../assets/Recommend/male-icon.webp";
import femaleColor from "../assets/Recommend/femaleColor-icon.webp";
import female from "../assets/Recommend/female-icon.webp";

const Rcmd41 = () => {
  const [isSockColor, setIsSockColor] = useState("#ffffff");
  const [isColorText, setIsColorText] = useState("흰색");
  const [isMale, setIsMale] = useState(true);
  const [isFemale, setIsFemale] = useState(false);
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
        <img src={rcmdStep2} />
      </div>
      <div className="contentTexts">
        <h2 className="contentText1">성별이 어떻게 되시나요?</h2>
        <p className="contentText2">성별에 맞춰 코디를 알려드립니다!</p>
      </div>
      <div className="gender">
        <button
          className="maleBtn"
          style={isMale ? { border: "1px solid #DDFD5C" } : null}
          onClick={() => {
            setIsMale(true);
            setIsFemale(false);
          }}
        >
          <div className="iconContain">
            <img
              className="maleicon"
              src={isMale ? maleColor : male}
              alt="남성아이콘"
            />
          </div>
          <p>남성</p>
        </button>
        <button
          className="femaleBtn"
          style={isFemale ? { border: "1px solid #DDFD5C" } : null}
          onClick={() => {
            setIsMale(false);
            setIsFemale(true);
          }}
        >
          <div className="iconContain">
            <img
              className="femaleicon"
              src={isFemale ? femaleColor : female}
              alt="여성아이콘"
            />
          </div>
          <p>여성</p>
        </button>
      </div>
      <button className="RcmdBtn">다음</button>
    </div>
  );
};

export default Rcmd41;
