import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNextPage, setKeyword } from '../../actions/homeActions'
import { hideSuggest } from '../../actions/suggestActions'

export default function SuggestItem(props) {
    const dispatch = useDispatch()
    const [backgroundColor,setBackgroundColor] = useState('white')
    const style = {
        border: 'none',
        backgroundColor: backgroundColor
    }
    const keyword = props.keyword

    const home = useSelector(state=>state.home)
    const filter1 = home.filter1
    const filter2 = home.filter2

    return (
        <input style={style} type="button" value={keyword.length>15 ? keyword.substring(0,12)+'...' : keyword}
            onMouseOver={(e)=>{setBackgroundColor('rgb(239,239,239)')}}
            onMouseOut={(e)=>{setBackgroundColor('white')}}
            onClick={()=>{dispatch(setKeyword(keyword));dispatch(hideSuggest());dispatch(fetchNextPage(filter1,filter2,keyword,0))}}
        />
    )
}