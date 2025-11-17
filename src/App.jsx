import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import axios from 'axios'
import { BrowserRouter,Outlet,Route,Router,Routes } from 'react-router-dom'
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
import Adminproductadd from './adminpages/Adminproductadd'
import AdminNavbar from './adminpages/AdminNavbar'
import Adminuserinfo from './adminpages/Adminuserinfo'
import Adminproductlist from './adminpages/Adminproductlist'
import Trimmer from './singleproductpage/Trimmer'
import TheaterSoundbar from './singleproductpage/TheaterSoundbar'
import OledTv from './singleproductpage/Oledtv'
import Doubledoorefrigirator from './singleproductpage/Doubledoorrefrigirator'
import Aircon from './singleproductpage/Airconditioner'
import Owen from './singleproductpage/Microwave'
import Allproducts from './pages/AllProducts'


function Mainlayout({getdata,username}){
  return(
    <>
    <Navbar getdata={getdata} username={username}></Navbar>
    <Outlet/>
    <Footer></Footer>
    </>
  )
}

function Adminmainlayout(){
  return(
    <div className='grid grid-cols-5'>
         <AdminNavbar ></AdminNavbar>
      <div className='col-span-4'>
        <Outlet/>
      </div>
    </div>
  )
}

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
     
      <Routes>
        <Route element={<Mainlayout getdata={getdata} username={username} ></Mainlayout>}>
         <Route path='/signup' element={<SignUp></SignUp>} ></Route>
         <Route path='/login' element={<Login setusername={setusername} setlogintrue={setlogintrue}></Login>} ></Route>
        <Route path='/' element={<Home ongetindex={ongetindex} ></Home>}></Route>
        <Route path='/homeappliences' element={<HomeAppliancesPage ongetindex={ongetindex} ></HomeAppliancesPage>}></Route>
        <Route path='/Audio&Vedio' element={<AudioVedioPage ongetindex={ongetindex}></AudioVedioPage>}></Route>
        <Route path='/Refrigirator' element={<Refigerator ongetindex={ongetindex}></Refigerator>}></Route>
        <Route path='/Airconditioner' element={<Airconditioner ongetindex={ongetindex}></Airconditioner>}></Route>
        <Route path='/Kitchenappliances' element={<Kitchenappliance ongetindex={ongetindex}></Kitchenappliance>}></Route>
        <Route path='compact-pulsator' element={<CompactPulsator ongetindex={ongetindex} ></CompactPulsator>}></Route>
        <Route path='/trimmer' element={<Trimmer ongetindex={ongetindex} ></Trimmer>}> </Route>
        <Route path='/soundbar' element={<TheaterSoundbar ongetindex={ongetindex} ></TheaterSoundbar>}> </Route>
        <Route path='/ledtv' element={<OledTv ongetindex={ongetindex} ></OledTv>}> </Route>
        <Route path='/doubledoorrefrigirator' element={<Doubledoorefrigirator ongetindex={ongetindex}></Doubledoorefrigirator>}></Route>
        <Route path='/aircon' element={<Aircon ongetindex={ongetindex}></Aircon>}></Route>
        <Route path='/owen' element={<Owen ongetindex={ongetindex}></Owen>}></Route>
        <Route path='/allproducts' element={<Allproducts></Allproducts>}></Route>
        </Route>
        <Route element={<Adminmainlayout/>}>
        <Route path='/admin' element={<Adminproductadd ></Adminproductadd>}></Route>
        <Route path='/admin/userinfo' element={<Adminuserinfo></Adminuserinfo>}></Route>
        <Route path='/admin/productlist' element={<Adminproductlist></Adminproductlist>}></Route>
        <Route path='/admin/addproduct' element={<Adminproductadd></Adminproductadd>}></Route>
        </Route>
          
      </Routes>
     
     
    </>
      
    
  )
}

export default App
