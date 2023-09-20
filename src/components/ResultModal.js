import React, { useState } from "react";
import "../styles/components/resultModal.css";
import xicon from "../assets/resultModal/xicon.webp";
import oicon from "../assets/resultModal/oicon.webp";

const ResultModal = ({ result, setIsResultModalOpen, restartCamera}) => {
  const ServerResult = result;

  const handleRestartCamera = () => {
    setIsResultModalOpen(false); // 결과 모달 닫기
    restartCamera(); // Camera 컴포넌트를 다시 렌더링
  };
  return (
    <div>
      <div className="modalContainer">
        <div className="resultModal">
          {ServerResult === 0 ? (
            <>
              <img className="resultIcon" src={xicon} alt="짝이 아닙니다." />
              <h2 className="resultText">짝이 아닙니다!</h2>
              <button className="resultBtn" onClick={handleRestartCamera}>다시 촬영하기</button>
            </>
          ) : (
            <>
              <img className="resultIcon" src={oicon} alt="짝이 맞습니다." />
              <h2 className="resultText">짝이 맞습니다!</h2>
              <button className="resultBtn" onClick={handleRestartCamera}>종료하기</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultModal;
