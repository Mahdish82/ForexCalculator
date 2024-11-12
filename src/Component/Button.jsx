import style from "./Button.module.css"

// eslint-disable-next-line react/prop-types
export default function Button({calculation}){
    return(
        <div>
            <button className={style.btn} onClick={()=>calculation()}>
                محاسبه لات
            </button>
        </div>
    )
}