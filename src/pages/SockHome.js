import React, { useEffect, useState } from "react";
import Camera from "components/Camera";
import logo from "../assets/logo.webp";
import '../styles/pages/sockHome.css';
const SockHome = () => {
  const [showSplash, setShowSplash] = useState(true);
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

  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      setShowSplash(false);
    }, 1500);
    return () => {
      // 컴포넌트가 언마운트될 때 타이머 클리어
      clearTimeout(splashTimeout);
    };
  }, []);

  return (
    <div>
      {showSplash ? (
        <div
          className="splash-screen"
          style={{
            width: `${windowDimensions.width}px`,
            height: `${windowDimensions.height}px`,
          }}
        >
          <img style={{width: 146, height: 143}} className="splash-logo" src={logo} alt="스플래시 이미지" />
        </div>
      ) : (
        <>
          <Camera/>
        </>
      )}
    </div>
  );
};

export default SockHome;
