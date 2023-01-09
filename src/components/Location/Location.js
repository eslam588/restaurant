import React,{useState,useEffect,useCallback,useMemo,useRef} from 'react'
import { MapContainer, Marker, Popup, TileLayer ,useMapEvents,CircleMarker } from 'react-leaflet'
import { Link } from 'react-router-dom'
import {CloseIcon} from "../../components/SVG/CartIconSvg"
import "./location.css"
import L from "leaflet"
import { useTranslation} from 'react-i18next';
import { Modal, useModal} from "@nextui-org/react";
import Persondetails from './../persondetails/Persondetails';


const Location = ({setVisiblee}) => { 

const [t,i18n] = useTranslation()
const redOptions = { color: '#3388ff' }
const [coords, setCoords] = useState([])
const [position, setPosition] = useState(coords || null)
const { setVisible, bindings } = useModal();


function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  }
   
function showPosition(position) {
     setCoords([position.coords.latitude,position.coords.longitude])
     setPosition([position.coords.latitude,position.coords.longitude])
     let lat = position.coords.latitude;
     let lng = position.coords.longitude;
    sessionStorage.setItem("location",JSON.stringify({lat,lng}));
  }


  useEffect(() => {
    getLocation()
  },[])

  useEffect(() => {
    if(position[0] !== coords[0] && position[1] !== coords[1]){
      sessionStorage.setItem("location",JSON.stringify(position));
     }
  },[position])

  

  

  function DraggableMarker({position, setPosition}) {


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
  
    return (
      <Marker
        draggable={true}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}>
      </Marker>
    )
  }




  return (
    <div className="getlocation">
        <div className="container bg-white">
            <h4 className="header w-full bg-white shadow">
                {t('maps')}
                <div className="close" onClick={()=>setVisiblee(false)}>
                    <span >
                        <CloseIcon  />
                    </span>
                </div>
            </h4>
            <div className="confirmLocation bg-white w-full">
                <div onClick={() => setVisible(true)}>
                  <span className="confirmLocation-txt">{t('confirmmaps')}</span>
                </div>
            </div>
            
            <Modal
              scroll
              fullScreen
              closeButton
              aria-labelledby="modal-title"
              aria-describedby="modal-description"
              {...bindings}
            >
              <Persondetails setVisibleee={setVisible} />
            </Modal>

            <div id="map"  style={{height: "839px" , position: "relative" , outline: "none"}}>
                { 
                 coords.length > 0 &&
                  <MapContainer center={coords} zoom={15} scrollWheelZoom={false}>
                      {/* <Marker position={coords}> */}
                      {
                        position && <DraggableMarker position={position} setPosition={setPosition} />
                      }
                      
                      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                      <CircleMarker center={coords} pathOptions={redOptions} radius={60}></CircleMarker>
                      {/* <Popup>
                          A pretty CSS3 popup. <br /> Easily customizable.
                      </Popup> */}
                      {/* </Marker> */}
                  </MapContainer>
}
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









