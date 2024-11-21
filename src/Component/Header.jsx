import style from './Header.module.css'

export default function Header(){
    return(
        <div className="row justify-content-between">
            <img src="money.svg" alt='money-sign' className="col-3" />
            <h1 className={`col-5 ${style.content}`}>تنظیم گر معاملات فارکس</h1>
        </div>
    )
}