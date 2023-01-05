import React,{useState,useEffect,useCallback,useMemo,useRef} from 'react'
import { MapContainer, Marker, Popup, TileLayer ,useMapEvents} from 'react-leaflet'
import { Link } from 'react-router-dom'
import {CloseIcon} from "../../components/SVG/CartIconSvg"
import website from "../../website.json"
import "./location.css"
import L from "leaflet"
import axios from 'axios'



const Location = () => { 
   
 const center = [51.505, -0.09]

 function DraggableMarker() {
    const [draggable, setDraggable] = useState(false)
    const [position, setPosition] = useState(center)
    const markerRef = useRef(null)
    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current
          if (marker != null) {
            setPosition(marker.getLatLng())
          }
        },
      }),
      [],
    )
    const toggleDraggable = useCallback(() => {
      setDraggable((d) => !d)
    }, [])
    
  return (
    <Marker
      draggable={draggable}
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}>
      <Popup minWidth={150}>
        <span onClick={toggleDraggable}>
          {draggable
            ? 'Marker is draggable'
            : 'Click here to make marker draggable'}
        </span>
      </Popup>
    </Marker>
  )
}



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
                <MapContainer center={center} zoom={15} scrollWheelZoom={false}>
                    {/* <Marker position={coords}> */}
                    <DraggableMarker />
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    {/* <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup> */}
                    {/* </Marker> */}
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












// let getPosition = async () =>  {
//     return  await navigator.geolocation.getCurrentPosition((position) =>{
//              let coordinates = [position.coords.latitude,position.coords.longitude]
//                   return coordinates
//             })
// }


// const [lat , setLat] =useState()
// const [lang , setLang] =useState()// const [coords, setCoords] = useState([])
  
// function getLocation() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(showPosition);
//     }
//   }
   
// function showPosition(position) {
//      setCoords([position.coords.latitude,position.coords.longitude])
//   }


//   useEffect(() => {
//     getLocation()
//   },[])