import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
// import style from "./App.module.css"
import Percent from "./Pages/Percent";
import Pip from "./Pages/Pip";
import { useEffect, useState } from "react";

function App() {
  const location = useLocation();
  const [isPercentActive, setIsPercentActive] = useState("active");
  const [isPipActive, setIsPipActive] = useState("active");


  useEffect(() => {
    if (location.pathname === "/pip") {
      setIsPipActive("active");
      setIsPercentActive("");
    } else if (location.pathname === "/percent") {
      setIsPipActive("");
      setIsPercentActive("active");
    }
  }, [location]);

  return (
    <div className="main">
      <Routes>
        <Route index element={<Percent />} />
        <Route
          path="percent"
          element={
            <>
              <Percent
                isPercentActive={isPercentActive}
                isPipActive={isPipActive}
              />
            </>
          }
        />
        <Route
          path="pip"
          element={
            <Pip isPipActive={isPipActive} sPercentActive={isPercentActive} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
