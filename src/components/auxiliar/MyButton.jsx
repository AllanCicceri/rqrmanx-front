function MyButton({disabled, color, text, onClickFunction}){
    let defaultStyle = "rounded-md text-white font-bold w-14 h-7 hover:scale-110 "

    if(disabled){
        defaultStyle += "bg-cinza cursor-not-allowed"
    }else{
        if(color !== undefined){
            defaultStyle +=  color
        }
    }

    return <button className={defaultStyle} disabled={disabled} onClick={onClickFunction}>{text}</button>
}

export default MyButton