import { useRecoilState } from "recoil"
import "./index.scss"
import { $color, $oldprice, $price, $size } from "../../store"
export default function SizeCard(){
    const[size]=useRecoilState($size);
    const [price , setprice]=useRecoilState($price)
    const[oldprice,setoldprice]=useRecoilState($oldprice);
    const[ color]=useRecoilState($color)
    return(
        <div className="taadel">
            <div> <h2 style={{color:color}}> Size </h2></div>
        <div className="card">
            {
                size.map((ele , index)=>{
                    return(
                            <button key={index} onClick={()=>{
                                setprice(ele.price);
                                setoldprice(ele.oldprice);
                            }}>{ele.size}</button>
                    )
                })
            }
        </div>
        </div>
    )
}