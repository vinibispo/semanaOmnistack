import React, {useState, useEffect} from 'react'
const [latitude, setLatitude] = useState('')
  const [github_username, setGithubUsername] = useState('')
  const [techs, setTechs] = useState('')
  const [longitude, setLongitude] = useState('')
export default function DevForm({onSubmit}){
   async function handleSubmit(e){
        e.preventDefault()
        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude
          })
          setTechs('')
    setGithubUsername('')
    }
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
    return(
        <form onSubmit={handleSubmit}>
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
    )
}