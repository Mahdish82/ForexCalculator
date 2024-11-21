import { useState } from "react";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
export default function Box({ label, labelWidth, width = "88px", value }) {
  const [resetValue, setResetValue] = useState(false);
  const [number, setNumber] = useState("");

  const styles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    font: "15px",
    fontWeight: "500",
    width: `${width}`,
    height: "72px",
  };
  const inputStyle = {
    width: "88px",
    border: "none",
    marginTop: "8px",
    borderRadius: "9px",
  };
  const labelStyle = {
    width: `${labelWidth}`,
    textAlign: "center",
  };

  function addValue(e) {
    setNumber(e);
    if (!isFinite(e)) {
      Swal.fire({
        title: "Error!",
        text: "Make sure that use number!",
        icon: "error",
      });
      setResetValue(true);
    } else {
      setResetValue(false);
    }
    value(e);
  }

  return (
    <div style={styles}>
      <label style={labelStyle}>{label}</label>
      <input
        type="text"
        style={inputStyle}
        onChange={(e) => {
          addValue(e.target.value);
        }}
        value={resetValue ? "" : number}
      />
    </div>
  );
}
