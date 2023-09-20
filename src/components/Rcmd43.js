import React, { useState } from "react";
import { Icon } from "@iconify/react";
import '../styles/components/serverModal.css'

const Rcmd43= () => {
    return(
        <div className="modalContainer">
          <div className="modalContent">
            <h2 className="server-text">
              양말을 구분중입니다.
              <br />
              <span style={{ fontSize: 16 }}>잠시만 기다려주세요.</span>
            </h2>
            <Icon icon="line-md:loading-loop" color="#ddfd5c" width="60" />
          </div>
        </div>
    )
}

export default Rcmd43;