import React, { useEffect, useState } from "react";
import "../styles/components/Rcmd/rcmd44.css";
import rcmdStep3 from "../assets/Recommend/RcmdStep3.webp";
import shoe from "../assets/Recommend/shoe.webp"
import clothes from "../assets/Recommend/clothes.webp"
import pants from "../assets/Recommend/pants.webp"
import check from "../assets/Recommend/check.webp"
const Rcmd41 = () => {
  const [isSock, SetIsSock] = useState("흰색")
  const [isShoe, setIsShoe] = useState("흰색 운동화");
  const [isClothes, setisClothes] = useState("흰색셔츠");
  const [isPants, setIsPants] = useState("연청바지");
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleSaveClick = () => {
    setIsPopupVisible(true);
  };
  
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    // 팝업 표시 후 2초 후에 자동으로 팝업 닫기
    if (isPopupVisible) {
      const timer = setTimeout(() => {
        setIsPopupVisible(false);
      }, 1500);

      return () => {
        clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 클리어
      };
    }
  }, [isPopupVisible]);

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
        <img src={rcmdStep3} alt="스텝3"/>
      </div>
      <div className="contentTexts">
        <h2 className="contentText1">코디를 추천해드릴게요!</h2>
        <p className="contentText2">
          {isSock} 양말에 어울리는 상의 하의, 신발입니다.
        </p>
      </div>
      <div className="rcmdContainer">
        <div className="rcmdContent">
          <div className="imgContain">
            <img style={{width: "24px", height: "21.11px"}} src={clothes} alt="옷"/>
          </div>
          <p>{isClothes}</p>
        </div>
        <div className="rcmdContent">
          <div className="imgContain">
          <img src={pants} alt="바지"/>
          </div>
          <p>{isPants}</p>
        </div>
        <div className="rcmdContent">
          <div className="imgContain">
          <img src={shoe} alt="양말"/>
          </div>
          <p>{isShoe}</p>
        </div>
      </div>
      <div className="btnContainer" >
        <button className="RcmdEndBtn">종료하기</button>
        <button className="RcmdSaveBtn" onClick={handleSaveClick}>저장하기</button>
      </div>
      {isPopupVisible && (
        <div className="popup">
          <img className="popupImg" src={check} alt="체크버튼"/>
          <p className="popupText">양말 코디를 저장했어요!</p>
        </div>
      )}
    </div>
  );
};

export default Rcmd41;
