/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, {useEffect, useState} from 'react';
import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'
import api from './services/api'
function App() {
  const [latitude, setLatitude] = useState('')
  const [github_username, setGithubUsername] = useState('')
  const [techs, setTechs] = useState('')
  const [longitude, setLongitude] = useState('')
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position) =>{
      const {latitude, longitude} = position.coords
      setLatitude(latitude)
      setLongitude(longitude)
    }, (err)=>{

    },
    {
      timeout: 30000
    }
  )}, [])
  async function handleAddDev(e){
    e.preventDefault();
  }
  return (
    <div id="app">
      
      <aside>
      <strong>Cadastrar</strong>

        <form>
          <div className="input-block">
          <label htmlFor="github_username">Usuário do Github</label>
          <input type="text" name="github_username" value={github_username} onChange={e => setGithubUsername(e.target.value)} id="github_username" required/>
          </div>
          <div className="input-block">
          <label htmlFor="techs">Tecnologias</label>
          <input type="text" name="techs" id="techs" value={techs} onChange={e => setTechs(e.target.value)} required/>
          </div>
          <div className="input-group">
          <div className="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input type="number" name="latitude" id="latitude" required value={latitude} onChange={e=>setLatitude(e.target.value)}/>
          </div>
          <div className="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input type="number" name="longitude" id="longitude" value={longitude} required onChange={e => setLongitude(e.target.value)}/>
          </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/48097622?v=4" alt="dev"/>
              <div className="user-info">
                <strong>Vinícius Bispo</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>'m just a curious guy</p>
            <a href="https://github.com/vinibispo" >Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/48097622?v=4" alt="dev"/>
              <div className="user-info">
                <strong>Vinícius Bispo</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>'m just a curious guy</p>
            <a href="https://github.com/vinibispo" >Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/48097622?v=4" alt="dev"/>
              <div className="user-info">
                <strong>Vinícius Bispo</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>'m just a curious guy</p>
            <a href="https://github.com/vinibispo" >Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/48097622?v=4" alt="dev"/>
              <div className="user-info">
                <strong>Vinícius Bispo</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>'m just a curious guy</p>
            <a href="https://github.com/vinibispo" >Acessar perfil no Github</a>
          </li>

        </ul>
      </main>
    </div>
  )
}

export default App;
