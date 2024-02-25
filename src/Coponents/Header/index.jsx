import "./index.scss"
import logo from "../../assets/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass ,faBars ,faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { useRecoilState } from "recoil"
import { $color } from "../../store"
import App from "../../App"
import { hover } from "@testing-library/user-event/dist/hover"
export default function Header(){
const[color]=useRecoilState($color)
    return(
        <div className="header">
            <div className="logo">
                <img src={logo}/>
            </div>
            <div className="icons">
            <button className="btn btn-success" style={{backgroundColor:color,height:"1.5rem",fontSize:".5rem",fontWeight:"bolder"}} > Mode </button>         
            <FontAwesomeIcon className="icon" icon={faMagnifyingGlass}/> 
            <FontAwesomeIcon className="icon" icon={faLocationDot} />
            <FontAwesomeIcon className="icon" icon={faBars} />  
            </div>
        </div>
    )
}