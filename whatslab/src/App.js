import {useState} from 'react'
import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body{
    background-color: #25d366;
    display: flex;
    justify-content: center;
  }
  h1{
    text-align: center;
  }

`
const Container = styled.div`
  background-color: #dcf8c6;
  border: 1px solid;
  border-radius: 10px;
  width: 23.5vw;
  height: 50vh;
`
const InputContainer = styled.div`
  position: fixed;
  top: 59.4%;
  input{
    border-radius: 5px;
    height: 4vh;  
  }
  button{
    border-radius: 5px;
    height: 5vh;
    background-color: #075e54;
    color: whitesmoke;
  }

`
const MsgContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column-reverse;
  margin: 15px;

`

function App() {
  const [msgs, setMsgs] = useState([])
  const [msg, setMsg] = useState('')

  const changeMsg =(e)=>{
    setMsg(e.target.value)
  }

  const sendMsg = ()=>{
    const newMsg = {
        msg: msg
    }    
    const newMsgList = [newMsg, ...msgs]
    setMsgs(newMsgList)           
}

  return<div>
        <GlobalStyle/>
        <h1>My whatsapp</h1>
          <Container>
            <MsgContainer>
              {msgs.map(msg=>{
                return <p>{msg.msg}</p>
              })}
            </MsgContainer>
            <InputContainer>
              <input type='text' placeholder='Mensagem' value={msg}
              onChange={changeMsg} required/>
              <button onClick={sendMsg}>Enviar</button>
            </InputContainer>
          </Container>
        </div> 
}

export default App;
