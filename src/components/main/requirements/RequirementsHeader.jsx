import MyDropdown from '../../auxiliar/MyDropDown'
import {VscSearch} from 'react-icons/vsc'
import MyButton from '../../auxiliar/MyButton';
import {BsFiletypePdf} from 'react-icons/bs'

function RequirementsHeader({onClick}) {

    function HandleAddClick(){
        onclick(true)
    }

    return (
        <div className="h-[10%] w-full flex justify-center items-center bg-branco">
            <div className='w-[10%] flex items-start'>
                <BsFiletypePdf size={30} className='hover:cursor-pointer'/>
            </div>
            <div className='w-[60%] flex'>
                <MyDropdown options={['All', 'RF', 'RN']}/>
                <div className='flex rounded-[7px] w-full h-8 pl-3 py-2.5 m-1 border justify-between items-center'>
                    <input type="text" className="font-sans text-sm w-[95%]" />
                    <button className='bg-cinza w-8 h-8 rounded-r-[7px] border flex justify-center items-center'><VscSearch size={15}/></button>
                </div>
            </div>
            <span className='w-10'></span>
            {/* <MyButton color={"bg-azul"} text={"+"} onClickFunction={HandleAddClick} /> */}
            <button className='w-20 h-8 bg-azul text-white font-bold rounded-[7px]' onClick={() => onClick(true)}>+</button>
        </div>

    )
}

export default RequirementsHeader;