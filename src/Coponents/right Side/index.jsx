import { useRecoilState } from "recoil"
import "./index.scss"
import SizeCard from "../Sizecard"
import { $size } from "../../store"
import ShoeColor from "../shoecolor"

import Veiw from "../veiw"
export default function RightSide(){
    const[size]=useRecoilState($size)
    return(
        <div className="rightside">
            <SizeCard/>
            <ShoeColor/>
            <Veiw/>
        </div>
    )
}