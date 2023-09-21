import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/components/camera.css";
import Webcam from "react-webcam";
import cameraBtnImage from "../assets/camera-btn.webp";
import cameraClickBtnImage from "../assets/camera-click-btn.webp";
import storageBtn from "../assets/storageBtn.webp";
import coordinatorBtn from "../assets/coordinatorBtn.webp";
import focus from "../assets/focus.webp";
import step1 from "../assets/step1.webp";
import step2 from "../assets/step2.webp";
import step3 from "../assets/step3.webp";
import ResultModal from "./ResultModal";
import ServerModal from "./ServerModal";
import CoachMarkModal from "./CoachMarksModal";

const Camera = () => {
  const webcamRef = useRef(null);
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const navigate = useNavigate();
  const [isCapturing, setIsCapturing] = useState(false);
  const [isCoachMark, setIsCoachMark] = useState(false);
  const [step, setStep] = useState(1); // 사진 촬영 단계 (1 또는 2)
  const [stepImage, setStepImage] = useState(step1);
  const [text, setText] = useState("한쪽 양말을 먼저 촬영해 주세요!"); // 사진 촬영 단계 (1 또는 2)
  const [image1, setImage1] = useState(null); // 첫 번째 사진
  const [image2, setImage2] = useState(null); // 두 번째 사진
  const [isServerModalOpen, setIsServerModalOpen] = useState(false); // 서버 모달 열림/닫힘 상태
  const [isResultModalOpen, setIsResultModalOpen] = useState(false); // 결과 모달 열림/닫힘 상태
  const [isServerResult, setIsServerResult] = useState(1);//서버에서 받은 값

  useEffect(() => {
    // 상태 업데이트 이후에 실행되는 작업
    console.log("image1 (inside useEffect):", image1);
  }, [image1]); // image1 상태가 변경될 때마다 실행
  useEffect(() => {
    // 상태 업데이트 이후에 실행되는 작업
    console.log("image2 (inside useEffect):", image2);
  }, [image2]); // image1 상태가 변경될 때마다 실행
  
  const handleCloseCoachMark = () => {
    setIsCoachMark(true); // isCoachMark 값을 false로 변경
  };

  const handleCapture = () => {
    if (!isCapturing) {
      console.log("stepInCapture :", step)
      const imageSrc = webcamRef.current.getScreenshot();

      if (step === 1) {
        // 첫 번째 사진 촬영
        setImage1(imageSrc, () => {
          console.log("image1 (inside callback):", image1);
        });
        setStep(2);
        setStepImage(step2);
        setText("다른 쪽 양말을 촬영해 주세요!");
      } else if (step === 2) {
        // 두 번째 사진 촬영
        setImage2(imageSrc, () => {
          console.log("image1 (inside callback):", image2);
        });
        setStep(1); // 단계 초기화
        setStepImage(step3);
        setIsServerModalOpen(true); // 서버연결 모달 열기

        setTimeout(() => {//테스트로 3초간 서버연결 모달 보여주고 결과모달 보여주기.
          setIsServerModalOpen(false); // 서버연결 모달 닫기
          setIsResultModalOpen(true); // 결과 모달 열기
        }, 3000);
        setText("");
      }
      setIsCapturing(true);//카메라 버튼 이미지 변경
      setTimeout(() => {
        setIsCapturing(false);//카메라 버튼 이미지 변경해제
      }, 100);
    }
  };
  const restartCamera = () => {
    setStepImage(step1);
    setImage1(null);
    setImage2(null);
    setText("한쪽 양말을 먼저 촬영해 주세요!");
  };

  const videoConstraints = {
    facingMode: "environment",
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
    <div className="cameraContainer">
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
      
      {isCoachMark && 
      <>
        <p className="guide">{text}</p>
        <img
        className="cameraBtnImage"
        src={isCapturing ? cameraClickBtnImage : cameraBtnImage}
        alt="캡처"
        onClick={handleCapture}
      />
      </>
      }
      <img className="storageBtn" src={storageBtn} alt="추천"  onClick={() => navigate('/storageHome')}/>
      <img className="coordinatorBtn" src={coordinatorBtn} alt="코디" onClick={() => navigate('/recommend')}/>
      <img className="focus" src={focus} alt="초점" />
      <img className="stepImage" src={stepImage} alt="스텝" />
      {/* 모달 컴포넌트 */}
      {isServerModalOpen && <ServerModal />}
      {isResultModalOpen && <ResultModal result={isServerResult} setIsResultModalOpen={setIsResultModalOpen} restartCamera={restartCamera}/>}
      <CoachMarkModal handleCloseCoachMark={handleCloseCoachMark}/>
    </div>
  );
};

export default Camera;
