// Componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
// Propriedade: Informações que um componente PAI passa para o componente FILHO
// Estado: Informações mantidas pelo componente (Lembrar: imutabilidade)

import React, { useEffect } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/41908407?s=460&v=4" alt="profileImage"/>
              <div className="user-info">
                <strong>João Vitor</strong>
                <span>ReactJS, React Native e Node.js</span>
              </div>
            </header>
            <p>CTO na Streamline Technologies. Desenvolvedor Web com foco na linguagem PHP utilizando o framework Laravel, com auxílio de JavaScript, CSS3 e HTML.</p>
            <a href="https://github.com/jvrviegas">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/41908407?s=460&v=4" alt="profileImage"/>
              <div className="user-info">
                <strong>João Vitor</strong>
                <span>ReactJS, React Native e Node.js</span>
              </div>
            </header>
            <p>CTO na Streamline Technologies. Desenvolvedor Web com foco na linguagem PHP utilizando o framework Laravel, com auxílio de JavaScript, CSS3 e HTML.</p>
            <a href="https://github.com/jvrviegas">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/41908407?s=460&v=4" alt="profileImage"/>
              <div className="user-info">
                <strong>João Vitor</strong>
                <span>ReactJS, React Native e Node.js</span>
              </div>
            </header>
            <p>CTO na Streamline Technologies. Desenvolvedor Web com foco na linguagem PHP utilizando o framework Laravel, com auxílio de JavaScript, CSS3 e HTML.</p>
            <a href="https://github.com/jvrviegas">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/41908407?s=460&v=4" alt="profileImage"/>
              <div className="user-info">
                <strong>João Vitor</strong>
                <span>ReactJS, React Native e Node.js</span>
              </div>
            </header>
            <p>CTO na Streamline Technologies. Desenvolvedor Web com foco na linguagem PHP utilizando o framework Laravel, com auxílio de JavaScript, CSS3 e HTML.</p>
            <a href="https://github.com/jvrviegas">Acessar perfil no Github</a>
          </li>

        </ul>
      </main>
    </div>
  );
}

export default App;
