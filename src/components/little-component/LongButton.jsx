import { useEffect } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const LongButton = (props) => {
    const src = props.src;
    const navigate = useNavigate();
    const bgLongBtn = useRef();
    const imgLongBtn = useRef();
    
    useEffect(()=>{
        if (props.loc === true){
            bgLongBtn.current.style.background = '#4b5563'
            imgLongBtn.current.style.scale = '1.1'
        }
        else{
            bgLongBtn.current.style.background = '#111827'
            imgLongBtn.current.style.scale = '1'
        }
    },[bgLongBtn,props.loc])

    return (         
        <>
        <div ref={bgLongBtn} onClick={()=> navigate(props.nav)} className='flex items-center gap-3 py-2 rounded cursor-pointer'>
        <img ref={imgLongBtn} src={src} alt="HomeIcon" className='size-8 transition-all ml-[30%] sm:ml-4'/>
        <span className='font-bold hidden sm:inline'>{props.inText}</span>
        </div>
        </>);
}
 
export default LongButton;