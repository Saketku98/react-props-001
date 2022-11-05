const Output = ({ color_picker }) => {
 
    return (
        <>
            {color_picker.map((e, idx) => {
                return (
                    <div className = "disp" style={{ height:260, width:180}}>
                        <p style={{height:200, width:180, backgroundColor:`${e.color_code}`}}> </p>
                        <p className="text" key={idx} >{e.color_code}</p>
                        <span className="text"  style={{color:`${e.color_code}`, fontSize:18}} >{e.color_name}</span>

                    </div>
                )
            })}
        </>
    )
}

export default Output;