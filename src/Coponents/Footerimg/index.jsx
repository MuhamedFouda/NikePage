import "./index.scss"
export default function Footerimg(){
    return(
        <div className="Footerimg">
            <div className="cont">
                <span>Eng/Muhamed Fouda</span>
                <span>Developer at EraaSoft</span>
            </div>
            <img src={require("../../assets/mm.jpg")} />
 
        </div>
    )
}