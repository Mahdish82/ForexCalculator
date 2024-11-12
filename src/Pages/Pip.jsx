import { Link } from "react-router-dom";

import Box from "../Component/Box";
import Button from "../Component/Button";
import Header from "../Component/Header";
import style from "./Percent.module.css";
import { useState } from "react";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
export default function Pip({ isPercentActive, isPipActive }) {
  // const [price, setPerice] = useState("");
  const [pipSize, setPipSize] = useState("")
  const [riskPrc, setRiskPrc] = useState("");
  const [assets, setAssets] = useState("");
  const [pipValue, setPipValue] = useState("");

  function calculation(){
    const final = (assets * (riskPrc / 100)) / (pipSize * pipValue);
    Swal.fire({
      title : 'LOT',
      text:`Your Lot is: ${final}`,
      icon:'success'
    })

  }

  return (
    <div className={style.container}>
      <Header />

      <div className={style.btnContainer}>
        <div className={`${style.btnBox}`}>
          <Link to={"/percent"}>
            <button className={`${style.btn} ${style.Lbtn} ${isPercentActive}`}>
              درصد
            </button>
          </Link>
          <Link to={"/pip"}>
            <button className={`${style.btn} ${style.Rbtn} ${isPipActive}`}>
              پیپ
            </button>
          </Link>
        </div>
      </div>
      <div className={`row ${style.inputContainer}`}>
        <di className="col-3">
          <Box label={"موجودی کل"} value={setAssets}/>
        </di>
        <di className="col-3">
          <Box label={"مقدار ریسک"} value={setRiskPrc}/>
        </di>
      </div>
      <div className={`row ${style.inputContainer}`}>
        <di className="col-3">
          <Box label={"ارزش هر پیپ"} value={setPipValue}/>
        </di>
        <di className="col-3">
          <Box label={"استاپ لاس براساس پیپ"} labelWidth={"160px"} value={setPipSize}/>
        </di>
      </div>
      <div className={`row ${style.inputContainer}`}>
        <di className="col-4">
          <Button calculation={calculation}/>
        </di>
      </div>
    </div>
  );
}
