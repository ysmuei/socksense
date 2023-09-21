import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import "../styles/components/Rcmd/rcmd43.css";
import rcmdStep2 from "../assets/Recommend/RcmdStep0.webp";
const Rcmd43 = () => {
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
      className="rcmdModalContainer"
      style={{
        width: `${windowDimensions.width}px`,
        height: `${windowDimensions.height}px`,
        objectFit: "cover",
      }}
    >
      <div className="rcmdModalContents">
        <div className="header">
          <img src={rcmdStep2} />
        </div>
        <div className="rcmdModalContent">
          <h2 className="server-text">
            맞춤 코디를 구성중입니다.
            <br />
            <span style={{ fontSize: 16 }}>잠시만 기다려주세요.</span>
          </h2>
          <Icon icon="line-md:loading-loop" color="#ddfd5c" width="60" />
        </div>

        <div className="btnContainer">
          <button className="backBtn"></button>
          <button className="backBtn"></button>
        </div>
      </div>
    </div>
  );
};

export default Rcmd43;
