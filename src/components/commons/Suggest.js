import React, { useEffect } from 'react'
import '../../css/Suggest.css'
import { useSelector, useDispatch } from 'react-redux'
import SuggestItem from './SuggestItem'
import { fetchSuggest, hideSuggest } from '../../actions/suggestActions'
import { sepKor } from '../../const/const'

export default function Suggest() {
    const dispatch = useDispatch()
    const suggest = useSelector(state=>state.suggest)
    const filter1 = useSelector(state=>state.home.filter1)
    const style = {
        display : suggest.visible===true ? 'block' : 'none'
    }

    useEffect(()=>{
        dispatch(fetchSuggest(filter1))
    },[filter1])

    const searchKeyword = useSelector(state=>state.home.keyword)
    const matchedList = suggest.list.filter(item=>sepKor(item.name).includes(sepKor(searchKeyword)))

    return (
        <div id="suggest-container" style={style}>
            <div onClick={()=>{dispatch(hideSuggest())}} id="suggest-background"></div>
            <div id="suggest-popup">
                {matchedList.map(m=><SuggestItem keyword={m.name}/>)}
            </div>
        </div>
    )
}