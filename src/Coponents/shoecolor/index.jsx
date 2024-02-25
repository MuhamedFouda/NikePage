import { useRecoilState } from "recoil"
import "./index.scss"
import { $color } from "../../store"
export default function ShoeColor(){
    const[ color , setcolor]=useRecoilState($color)
    console.log(color)
    return(
        <div className="shoecolor">
            <h2 style={{color:color}}> Choose Color</h2>
            <div className="color">
            <div onClick={()=>{
                setcolor("Pink")
            }} style={{background:"pink",width:"3rem",height:"3rem",borderRadius:"50%"}}></div>

            <div onClick={()=>{
                setcolor("Red")
            }} style={{background:"red",width:"3rem",height:"3rem",borderRadius:"50%"}}></div>

            <div onClick={()=>{
                setcolor("Brown")
            }} style={{background:"brown",width:"3rem",height:"3rem",borderRadius:"50%"}}></div>
            
            <div onClick={()=>{
                setcolor("Green")
            }} style={{background:"Green",width:"3rem",height:"3rem",borderRadius:"50%"}}></div>

            <div onClick={()=>{
                setcolor("violet")
            }} style={{background:"violet",width:"3rem",height:"3rem",borderRadius:"50%"}}></div>

            <div onClick={()=>{
                setcolor("Gold")
            }} style={{background:"gold",width:"3rem",height:"3rem",borderRadius:"50%"}}></div>
            <div onClick={()=>{
                setcolor("Tomato")
            }} style={{background:"tomato",width:"3rem",height:"3rem",borderRadius:"50%"}}></div>
            
            

            </div>
        </div>
    )
}