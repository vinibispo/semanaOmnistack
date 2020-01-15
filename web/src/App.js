/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, {useEffect, useState} from 'react';
import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'
import api from './services/api'
import DevItem from './components/DevItem';
function App() {
  const [latitude, setLatitude] = useState('')
  const [github_username, setGithubUsername] = useState('')
  const [techs, setTechs] = useState('')
  const [longitude, setLongitude] = useState('')
  const [devs, setDevs] = useState([])
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
  useEffect(()=>{
    async function loadDevs(){
      const response = await api.get('/devs')
      setDevs(response.data)
    }
    loadDevs()
  })
  async function handleAddDev(e){
    e.preventDefault();
    const response =  await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude
    })
    setDevs([...devs, response.data])
    setTechs('')
    setGithubUsername('')
  }
  return (
    <div id="app">
      
      <aside>
      <strong>Cadastrar</strong>

        <form onSubmit={handleAddDev}>
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
          {devs.map(dev=>(
            <DevItem key={dev._id} dev={dev}></DevItem>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default App;
