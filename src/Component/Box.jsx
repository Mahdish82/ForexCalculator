// eslint-disable-next-line react/prop-types
export default function Box({label,labelWidth,width="88px",value}) {
    const styles = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        font:"15px",
        fontWeight:"500",
        width:`${width}`,
        height:"72px",
        // paddingLeft:"36px"
    }
    const inputStyle={
        width:"88px",
        border:"none",
        marginTop:"8px",
        borderRadius:"9px"
    }
    const labelStyle = {
        width:`${labelWidth}`,
        textAlign:"center"
    }
    return (
        <div style={styles}>
            <label style={labelStyle}>{label}</label>
            <input type="text" style={inputStyle} onChange={(e)=>{value(e.target.value)
            }}/>
        </div>
    )
}
