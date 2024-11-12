import { Link } from "react-router-dom";
import Box from "../Component/Box";
import Button from "../Component/Button";
import Header from "../Component/Header";
import style from "./Percent.module.css";
import { useState } from "react";
import Swal from 'sweetalert2';

// eslint-disable-next-line react/prop-types
export default function Percent({ isPercentActive, isPipActive }) {
  const [price, setPrice] = useState("");
  const [stPrc, setStPrc] = useState("");
  const [riskPrc, setRiskPrc] = useState("");
  const [assets, setAssets] = useState("");
  const [pipValue, setPipValue] = useState("");

  function calculation() {
    // Corrected formula for lot calculation
    const final = (assets * (riskPrc / 100)) / ((price * (stPrc / 100)) * pipValue);
    Swal.fire({
      title: 'LOT',
      text: `Your Lot is: ${final}`,
      icon: 'success',
    });
  }

  return (
    <div className={style.container}>
      <Header />

      <div className={style.btnContainer}>
        <div className={`${style.btnBox}`}>
          <Link to={"/percent"}>
            <button
              className={`${style.btn} ${style.Lbtn} ${
                isPercentActive === undefined ? "active" : isPercentActive
              }`}
            >
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
        <div className="col-3">
          <Box label={"موجودی کل"} value={setAssets} />
        </div>
        <div className="col-3">
          <Box label={"مقدار ریسک"} value={setRiskPrc} />
        </div>
      </div>
      <div className={`row ${style.inputContainer}`}>
        <div className="col-3">
          <Box label={"ارزش هر پیپ"} value={setPipValue} />
        </div>
        <div className="col-3">
          <Box label={"استاپ لاس براساس درصد"} labelWidth={"160px"} value={setStPrc} />
        </div>
      </div>
      <div className={`row ${style.inputContainer}`}>
        <div className="col-4">
          <Box label={"قیمت فعلی ارز"} width={"124px"} value={setPrice} />
        </div>
      </div>
      <div className={`row ${style.inputContainer}`}>
        <div className="col-4">
          <Button calculation={calculation} />
        </div>
      </div>
    </div>
  );
}
