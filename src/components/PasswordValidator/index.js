// Write your code here
import {useState} from 'react'
import { BgCont, MainCont, Head, Desc, PassInput, Message } from './styledComponents'

const PasswordValidator=()=>{
    const [password,setPassword]=useState('')
    const [msg, setMsg] = useState('Your password must be at least 8 characters');

    const onChangePassword=event=>{
        setPassword(event.target.value)
        if(password.length>=7){
            setMsg('')
        }
        else{
            setMsg('Your password must be at least 8 characters')
        }
    }
    return(
        <BgCont>
            <MainCont>
                <Head>Password Validator</Head>
                <Desc>Check how strong and secure is your password</Desc>
                <PassInput type='password' value={password} onChange={onChangePassword} />
                <Message>{msg}</Message>
            </MainCont>
        </BgCont>
    )
} 
export default PasswordValidator