import "./index.scss"
import { FaWhatsapp , FaLinkedin ,FaFacebookF  } from "react-icons/fa6";

export default function Footericon(){
    return(
        <div className="Footericon ">

        <FaWhatsapp className="icon" style={{fontSize:"2rem"}}  onClick={()=>{
            window.location.href="https://react-icons.github.io/react-icons/search/#q=face";
        }}/>
           

        <FaLinkedin className="icon" style={{fontSize:"2rem"}} onClick={()=>{
            window.location.href="https://www.linkedin.com/in/muhamedfouda/";
        }}/>

        <FaFacebookF className="icon" style={{fontSize:"2rem"}} onClick={()=>{
            window.location.href="https://www.facebook.com/memo.fouda59";
        }}/>

        </div>
    )
}