import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import { useState } from 'react';

function App() {
  const [userName, setUserName] = useState()
  const [user, setUser] = useState(null)

  const handleSearch = () => {

    fetch('https://api.github.com/users/' + userName)//executa um GET 
      .then((response) => response.json()) //se sucesso, converte pra JSON
      .then((response) => setUser(response)) //se sucesso, atribui o valor de response pra user
      .catch((error) => { //cai aqui caso de erro
        console.log(error)
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Github Users</h1>
      </header>

      <main className="App-main">
        <div>
          <label htmlFor="usuario" >Usuário: </label>
          <input
            type="text"
            name="usuario"
            id="usuario"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
          <button onClick={handleSearch}>Buscar</button>
        </div>

        <div>
          {
            user
              ? (
                <div>
                  <Card img={user.avatar_url} username={user.login} link={user.html_url}/>
                </div>
              )
              : (
                <div>
                  <p>Não há dados de usuário</p>
                </div>
              )
          }

        </div>


      </main>
    </div>
  );
}

export default App;
