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
import { useNavigate } from 'react-router-dom'
import Refigerator from './pages/Refrigerator'
import Airconditioner from './pages/Airconditioner'
import KitchenAppliances from './components/Kitchenappliances'
import Kitchenappliance from './pages/Kitchenappliances'
function App() {

const [rechomedata,sethome]=useState()
const [recaudio,setrecaudio] = useState()
const [recairconditioner,setrecairconditioner] = useState()
const [reckitchen,setkitchen] = useState()
const [recrefirigator,setrefirigator] = useState()
 const[getdata,setgetdata]=useState([])
 const[username,setusername] =useState("Profile")
 const[logintrue,setlogintrue] = useState(false)

 const navigate = useNavigate()

 console.log(username)
useEffect(function(){
 axios.get("https://finalproject-ecommerce-roj1.onrender.com/rechomeappliance").then(function(data){
       sethome(data.data)
 })
 axios.get("https://finalproject-ecommerce-roj1.onrender.com/recaudiovedio").then(function(data){
        setrecaudio(data.data)
 })
 axios.get("https://finalproject-ecommerce-roj1.onrender.com/recairconditioner").then(function(data){
  setrecairconditioner(data.data)
 })
  axios.get("https://finalproject-ecommerce-roj1.onrender.com/reckitchenappliances").then(function(data){
  setkitchen(data.data)
 })
  axios.get("https://finalproject-ecommerce-roj1.onrender.com/recRefirigirator").then(function(data){
  setrefirigator(data.data)
 })
  },[])
  console.log(recrefirigator,"from navbar")
  function ongetindex(index,recdata){
    
    if(logintrue == true){
      console.log(index,recdata,"from navbar")
       let setdatalist;
      if(recdata == "home"){
      setdatalist=rechomedata[index];
      }else if(recdata == "audio"){
       setdatalist = recaudio[index]
      }else if(recdata == "aircon"){
        setdatalist = recairconditioner[index]
      }else if(recdata == "kitchen"){
        setdatalist = reckitchen[index]
      }else if(recdata == "refrigator"){
        setdatalist = recrefirigator[index]
      }

      setgetdata((prev)=>{
            return([...prev,setdatalist])
          })
    } else if(logintrue == false){
         navigate("/signup")
    }    
  }
   console.log(recaudio)
  return (
    <>
      <Navbar getdata={getdata} username={username}></Navbar>
      <Routes>
         <Route path='/admin' element={<Admin></Admin>}></Route>
         <Route path='/signup' element={<SignUp></SignUp>} ></Route>
         <Route path='/login' element={<Login setusername={setusername} setlogintrue={setlogintrue}></Login>} ></Route>
        <Route path='/' element={<Home ongetindex={ongetindex} ></Home>}></Route>
        <Route path='/homeappliences' element={<HomeAppliancesPage ongetindex={ongetindex} ></HomeAppliancesPage>}></Route>
        <Route path='/Audio&Vedio' element={<AudioVedioPage ongetindex={ongetindex}></AudioVedioPage>}></Route>
        <Route path='/Refrigirator' element={<Refigerator ongetindex={ongetindex}></Refigerator>}></Route>
        <Route path='/Airconditioner' element={<Airconditioner ongetindex={ongetindex}></Airconditioner>}></Route>
        <Route path='/Kitchenappliances' element={<Kitchenappliance ongetindex={ongetindex}></Kitchenappliance>}></Route>
        <Route path='/compact-pulsator' element={<CompactPulsator ongetindex={ongetindex} ></CompactPulsator>}></Route>
      </Routes>
     <Footer></Footer>
    </>
      
    
  )
}

export default App
