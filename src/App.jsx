import { useState, useEffect } from 'react'
import './App.css'

function App() {
const CLIENT_ID = ""
const REDIRECT_URI = "http://localhost:5173/"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"


const [token, setToken] = useState("")

useEffect(() =>{
  const  hash  = window.location.hash
  let token = window.localStorage.getItem("token")

if (!token && hash){
  token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];
 console.log(token)

 window.location.hash = ""
 window.localStorage.getItem("token",token)

 setToken(token)

}

},[])

const logoutHandler = () => {
  setToken(token)
  window.localStorage.removeItem("token")
}

  return (
    <div className="App">
      <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
    <button onClick={logoutHandler}>logout</button>
    </div>
  )
}

export default App
