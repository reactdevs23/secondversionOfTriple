import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import JoinModal from "./Modals/JoinModal/JoinModal";
import { useState } from "react";
import { useMyContext } from "./Context/Context";
import WhiteListModal from "./Modals/WhiteListModal/WhiteListModal";

function App() {
  const {
    isJoinWaitingListModalActive,
    setIsJoinWaitingListModalActive,
    isWhiteListModalActive,
    setIsWhiteListModalActive,
  } = useMyContext();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <JoinModal
        isActive={isJoinWaitingListModalActive}
        onClose={() => setIsJoinWaitingListModalActive(false)}
      />
      <WhiteListModal
        isActive={isWhiteListModalActive}
        onClose={() => setIsWhiteListModalActive(false)}
      />
    </>
  );
}

export default App;
