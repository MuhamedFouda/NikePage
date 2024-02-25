import { atom } from "recoil";

export const $size =atom({
    key:"$size",
    default:[
        {
            size:"US1",
            oldprice:"90",
            price:"100$"
        },
        {
            size:"US2",
            oldprice:"200",
            price:"220$"
        },
        {
            size:"US3",
            oldprice:"300",
            price:"310$"
        },
        {
            size:"US4",
            oldprice:"510",
            price:"540$"
        },
        {
            size:"US5",
            oldprice:"600",
            price:"620$"
        },
        {
            size:"US6",
            oldprice:"750",
            price:"780$"
        },
        {
            size:"US7",
            oldprice:"860",
            price:"890$"
        },
        {
            size:"US8",
            oldprice:"900",
            price:"910$"
        },

    ]
})
export const $price=atom({
    key:"$price",
    default:[]
})
export const $oldprice=atom({
    key:"$oldprice",
    default:[]
})
export const $color=atom({
    key:"$color",
    default:[]
})
