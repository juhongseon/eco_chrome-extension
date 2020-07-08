import { SAMPLE_TYPE } from "./types"

export const setSample = (sample)=>dispatch=>{
    dispatch({
        type: SAMPLE_TYPE,
        payload: sample
    })
}