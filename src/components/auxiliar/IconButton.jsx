function IconButton({text, color}){
    const style = 'w-8 h-4 rounded text-xs font-bold text-white text-center  ' + color
    return (
        <div className={style}>
            {text}
        </div>
    )
}


export default IconButton;