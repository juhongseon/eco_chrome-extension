import React, { useState } from 'react'
import '../../css/Login.css'
import { useDispatch, useSelector } from 'react-redux'
import { tryLogin } from '../../actions/loginActions'

export default function Login() {
    const dispatch = useDispatch()
    const [email,setEmail] = useState('')
    const [pwd,setPwd] = useState('')
    const login = useSelector(state=>state.login)
    const style = {
        display : login.visible===true ? 'block' : 'none'
    }

    return (
        <div id="login-container" style={style}>
            <form>
                <div className="input-group">
                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                    <input id="email" type="text" className="form-control" name="email" placeholder="Email"
                        onChange={(e)=>{setEmail(e.target.value)}} value={email}
                    />
                </div>
                <div className="input-group">
                    <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                    <input id="password" type="password" className="form-control" name="password" placeholder="Password"
                        onChange={(e)=>{setPwd(e.target.value)}} value={pwd}
                    />
                </div>
                <input type="button" value="회원가입"/>
                <input onClick={()=>{dispatch(tryLogin(email,pwd))}} type="button" value="로그인"/>
                <br/>
                <span style={{color:'red'}}>{login.result=='nopwd' ? '비밀번호가 틀렸습니다.' : '아이디가 틀렸습니다.'}</span>
            </form>
        </div>
    )
}