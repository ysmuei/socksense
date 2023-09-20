import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SockHome from "pages/SockHome";
import Recommend from "pages/Recommend";
import StorageHome from "pages/StorageHome";
import Camera from "components/Camera";
import RcmdCamera from "components/RcmdCamera"
import Rcmd41 from "components/Rcmd41"
import Rcmd42 from "components/Rcmd42"
import Rcmd43 from "components/Rcmd43"
import Rcmd44 from "components/Rcmd44"
const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SockHome />} />
                <Route path="/camera" element={<Camera />} />
                <Route path="/rcmd-camera" element={<RcmdCamera />} />
                <Route path="/recommend" element={<Recommend />} />
                <Route path="/storageHome" element={<StorageHome />} />
                <Route path="/rcmd41" element={<Rcmd41/>} />
                <Route path="/rcmd42" element={<Rcmd42/>} />
                <Route path="/rcmd43" element={<Rcmd43/>} />
                <Route path="/rcmd44" element={<Rcmd44/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;