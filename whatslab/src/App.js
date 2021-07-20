import logo from './logo.svg';
import './App.css';

function App() {  
  
  function recebeMsg(){
      let cont = document.getElementById('cont')
      let msg = document.getElementById('mensagem')
      let user = document.getElementById('user')
      
      cont.innerHTML += `${user.value}: ${msg.value}`+'<br>'
      
      user.focus()
      user.value = ''
      msg.value = ''
  }
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <div class="conteudo" id="cont"></div>
      <input type="text" placeholder="Usuário" class="usuario" id="user" />
      <input type="text" class="msg" id="mensagem"  placeholder="Mensagem"/>
      <input type="button" value="Enviar" class="btn" onClick={recebeMsg} />
    </div>
  );
}

export default App;
