import MyDropdown from '../../auxiliar/MyDropDown'
import {VscSearch} from 'react-icons/vsc'

function RequirementsHeader({onClick}) {
    return (
        <div className="h-[10%] w-full flex justify-center items-center bg-branco">
            <MyDropdown options={['All', 'RF', 'RN']}/>
            <div className='flex rounded-[7px] w-[60%] h-8 pl-3 py-2.5 border justify-between items-center'>
                <input type="text" className="font-sans text-sm w-[95%]" />
                <button className='bg-cinza w-8 h-8 rounded-r-[7px] border flex justify-center items-center'><VscSearch size={15}/></button>
            </div>
        </div>

    )
}

export default RequirementsHeader;