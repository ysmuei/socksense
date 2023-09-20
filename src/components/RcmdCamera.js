import React, { useEffect, useRef, useState } from 'react';
import '../styles/components/Rcmd/rcmdCamera.css'
import { useNavigate } from 'react-router-dom';
import Webcam from 'react-webcam';
import focus from "../assets/focus.webp";
import cameraBtnImage from "../assets/camera-btn.webp";
import cameraClickBtnImage from "../assets/camera-click-btn.webp";
import ServerModal from './ServerModal';

const RcmdCamera = () => {
  const [isCapturing, setIsCapturing] = useState(false);
  const [isImage, setIsImage] = useState(null);
  const [isServerModalOpen, setIsServerModalOpen] = useState(false); // 서버 모달 열림/닫힘 상태
  const webcamRef = useRef(null);
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const navigate = useNavigate();

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setIsImage(imageSrc);
    setIsCapturing(true);//카메라 버튼 이미지 변경
      setTimeout(() => {
        setIsCapturing(false);//카메라 버튼 이미지 변경해제
      }, 100);
    setIsServerModalOpen(true);//서버연결 모달열기
  };
  setTimeout(() => {//테스트로 3초간 서버연결 모달 보여주고 결과모달 보여주기.
    setIsServerModalOpen(false); // 서버연결 모달 닫기
  }, 3000);


  const videoConstraints = {
    facingMode: "environment",//전면카메라
    focusMode: "continuous",
  };
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
    <div>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        style={{
            width: `${windowDimensions.width}px`,
            height: `${windowDimensions.height}px`,
            objectFit: "cover",
          }}
      />
      <>
        <p className="guide">양말을 찍어주세요!</p>
        <img
        className="cameraBtnImage"
        src={isCapturing ? cameraClickBtnImage : cameraBtnImage}
        alt="캡처"
        onClick={capture}
      />
      </>
      <img className="focus" src={focus} alt="초점" />
      {/* 모달 컴포넌트 */}
      {isServerModalOpen && <ServerModal />}
    </div>
  );
};

export default RcmdCamera;
