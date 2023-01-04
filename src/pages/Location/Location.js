import React,{useState,useEffect} from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import "../../components/LeafletGeocoder/leafletgeocoder.css"
import "../../components/LeafletGeocoder/leafletgeocod.js"
import { Link } from 'react-router-dom'
import {CloseIcon} from "../../components/SVG/CartIconSvg"
import website from "../../website.json"
import "./location.css"
import L from "leaflet"
import LeafletGeocoder from "../../components/LeafletGeocoder/LeafletGeocoder";
import LeafletRoutingMachine from "../../components/LeafletRoutingMachine/LeafletRoutingMachine";



const Location = () => { 
    
const [websitecoordinates,setWebsiteCoordinates]= useState([])
const [usercoordinates, setUserCoordinates]=useState([])


let getPositionUser = () => {
    navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position);
        setUserCoordinates([position.coords.latitude , position.coords.longitude])
    })
}

let getPositionwebsite = () => {
    let website_coordinates =  website.coordinates.split(",") 
    let website_coordinatesparse = website_coordinates.map((coord) => Number(coord))
    setWebsiteCoordinates(website_coordinatesparse)
}

useEffect(()=> {
    getPositionwebsite()
    getPositionUser()
 },[])

 


// console.log(usercoordinates);
 const position = [25.1243149,55.3765177]


  return (
    <div className="getlocation">
        <div className="container bg-white">
            <h4 className="header w-full bg-white shadow">
                Choose the delivery location
                <Link to="/" className="close">
                    <span >
                        <CloseIcon />
                    </span>
                </Link>
            </h4>
            <div className="confirmLocation bg-white w-full">
                <Link to="/persondetails">
                  <span className="confirmLocation-txt">Confirm location</span>
                </Link>
            </div>
            <div id="map"  style={{height: "839px" , position: "relative" , outline: "none"}}>
                <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                    <LeafletGeocoder /> 
                    <LeafletRoutingMachine />
                    <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    </div>
  )
}

let DefaultIcon = L.icon({
    iconUrl:"https://demo.zmatjar.com/themes/menu/assets/libraries/leaflet/images/marker-icon-2x.png",
    iconSize:[25,41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40]
})

L.Marker.prototype.options.icon = DefaultIcon

export default Location
