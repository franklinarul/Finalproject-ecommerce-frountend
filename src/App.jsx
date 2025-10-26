import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import axios from 'axios'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import AdminProduct from './adminpages/product'
import Footer from './components/Footer'
import HomeAppliances from './components/Homeappliances'
import HomeAppliancesPage from './pages/HomeAppliencesPage'
import CompactPulsator from './singleproductpage/Compact-Pulsator'
import Admin from './adminpages/Admin'
import AudioVedioPage from './pages/AudioVedio'
import Login from './components/Login'
import SignUp from './components/SignUp'
function App() {
 const [rechomedata,setrecdata]=useState()
const [recaudio,setrecaudio] = useState()
 const[getdata,setgetdata]=useState([])
 const[username,setusername] =useState("Profile")
 console.log(username)
useEffect(function(){
 axios.get("https://finalproject-ecommerce-roj1.onrender.com/rechomeappliance").then(function(data){
       setrecdata(data.data)
 })
 axios.get("https://finalproject-ecommerce-roj1.onrender.com/recaudiovedio").then(function(data){
        setrecaudio(data.data)
 })
  },[])
  function ongetindex(index,recdata){
      console.log(index,recdata,"from navbar")
       let setdatalist;
      if(recdata == "home"){
      setdatalist=rechomedata[index];
      }else if(recdata == "audio"){
       setdatalist = recaudio[index]
       console.log(setdatalist,"from audio cart")
      }
      
      
            setgetdata((prev)=>{
            return([...prev,setdatalist])
          })
          
  }
   console.log(recaudio)
  return (
    <BrowserRouter>
      <Navbar getdata={getdata} username={username}></Navbar>
      <Routes>
         <Route path='/admin' element={<Admin></Admin>}></Route>
         <Route path='/signup' element={<SignUp></SignUp>} ></Route>
         <Route path='/login' element={<Login setusername={setusername}></Login>} ></Route>
        <Route path='/' element={<Home ongetindex={ongetindex} ></Home>}></Route>
        <Route path='/homeappliences' element={<HomeAppliancesPage ongetindex={ongetindex} ></HomeAppliancesPage>}></Route>
        <Route path='/Audio&Vedio' element={<AudioVedioPage ongetindex={ongetindex}></AudioVedioPage>}></Route>
        <Route path='/compact-pulsator' element={<CompactPulsator ongetindex={ongetindex} ></CompactPulsator>}></Route>
      </Routes>
     <Footer></Footer>
    </BrowserRouter>
      
    
  )
}

export default App
