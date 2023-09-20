import React, { useState } from "react";
import storageBtn from "../assets/storageBtn.webp";
import coordinatorBtn from "../assets/coordinatorBtn.webp";
import step1 from "../assets/step1.webp";
import cameraBtnImage from "../assets/camera-btn.webp";
import "../styles/components/coachMarksModal.css";
const CoachMarkModal = ({ handleCloseCoachMark }) => {
  const [isModalOpen1, setIsModalOpen1] = useState(true); // 모달 열림/닫힘 상태
  const [isModalOpen2, setIsModalOpen2] = useState(false); // 모달 열림/닫힘 상태

  const closeModal1 = () => {
    setIsModalOpen1(false);
    openModal2();
  };
  const openModal2 = () => {
    setIsModalOpen2(true);
  };
  const closeModal2 = () => {
    setIsModalOpen2(false);
    handleCloseCoachMark();
  };
  return (
    <div>
      {/* 모달 컴포넌트 */}
      {isModalOpen1 && (
        <div className="modalContainer">
          <div className="modalContent">
            <div
              onClick={closeModal1}
              style={{ width: "100%", height: "100%" }}
            >
              <h2 className="h2TextStyle">
                양말 구분은 <br />
                <span style={{ color: "#DDFD5C" }}>총 3가지 단계</span>로
                진행됩니다.
              </h2>
              <p className="pTextStyle1">한쪽 양말을 먼저 촬영 후</p>
              <p className="pTextStyle2">다른 양말도 마저 촬영합니다.</p>
              <p className="pTextStyle3">결과를 확인하면 끝!</p>
              <p className="pTextStyle4">
                아래의 버튼으로
                <span style={{ color: "#DDFD5C" }}> 촬영</span>할 수 있어요!
              </p>
              <img src={step1} alt="스텝1" className="stepImage" />
              <img src={cameraBtnImage} alt="캡처" className="cameraBtnImage" />
            </div>
          </div>
        </div>
      )}
      {isModalOpen2 && (
        <div className="modalContainer">
          <div className="modalContent">
            <div
              onClick={closeModal2}
              style={{ width: "100%", height: "100%" }}
            >
              <p className="pTextStyle5">
                상단 우측 버튼으로
                <br />
                <span style={{ color: "#DDFD5C" }}>
                  저장한 코디를 확인할 수 있어요!
                </span>
              </p>
              <p className="pTextStyle6">
                하단 좌측 버튼으로
                <br />
                <span style={{ color: "#DDFD5C" }}>
                  코디를 추천받을 수 있어요!
                </span>
              </p>
              <img src={storageBtn} alt="추천" className="storageBtn" />
              <img src={coordinatorBtn} alt="코디" className="coordinatorBtn" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoachMarkModal;
