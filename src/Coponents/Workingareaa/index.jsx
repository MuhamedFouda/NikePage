import "./index.scss"
import 'bootstrap/dist/css/bootstrap.css';
import LeftSide from "../left Side"
import RightSide from "../right Side"
import { useRecoilState } from "recoil";
import { $color } from "../../store";
import Footer from "../Footer";
export default function WorkingAreaa(){
    const[color]=useRecoilState($color)
    return(
        <div className="wrokingareaa col-12">
            <div className="col-8" style={{backgroundColor:color}}>
                <LeftSide/>
            </div>

            <div className="col-3"  style={{backgroundColor:"white"}}>
              <RightSide/>
            </div>
            <div className="col-12">
            <Footer/>
            </div>
        </div>
    )
}