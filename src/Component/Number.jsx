import Swal from "sweetalert2";

export default function NumberConvertor(num) {
  
  function convertor() {
    // console.log(num);

    const arr = [];
    num
      .toString()
      .split("")
      .forEach((Number) => {
        switch (Number) {
          case "۱":
            arr.push(1);
            break;
          case "۲":
            arr.push(2);
            break;
          case "۳":
            arr.push(3);
            break;
          case "۴":
            arr.push(4);
            break;
          case "۵":
            arr.push(5);
            break;
          case "۶":
            arr.push(6);
            break;
          case "۷":
            arr.push(7);
            break;
          case "۸":
            arr.push(8);
            break;
          case "۹":
            arr.push(9);
            break;
          case "۰":
            arr.push(0);
            break;

          default:
            Swal.fire({ title: "Error", icon: "error" });
            break;
        }
      });
    return parseFloat(arr.join(""));

  }
  return convertor();
}
