import React,{useState,useEffect,useMemo,useRef} from 'react'
import { MapContainer, Marker, Popup, TileLayer ,useMapEvents,CircleMarker } from 'react-leaflet'
import {CloseIcon} from "../../components/SVG/CartIconSvg"
import "./location.css"
import L from "leaflet"
import { useTranslation} from 'react-i18next';
import { useDispatch } from 'react-redux'
import { Modal, useModal} from "@nextui-org/react";
import location from "../../location.json"
import {checkAreaName} from "../../redux/cartSlice"



const Location = ({setVisiblee,setActivePage,activepage,setShowDeliveryErr}) => { 

const [t,i18n] = useTranslation()
const redOptions = { color: '#3388ff' }
const [coords, setCoords] = useState([])
const [position, setPosition] = useState(coords || null)
const [deliveryarea,setDeliveryArea]= useState("");
const [checkdeliveryarea,setCheckDeliveryArea]= useState(false);
const { setVisible, bindings } = useModal();
let dispatch = useDispatch()

let hiddencart = () => {
  setVisiblee(false)
}

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
     sessionStorage.setItem("location",JSON.stringify([position.coords.latitude,position.coords.longitude]));
  }


  useEffect(() => {
    getLocation()
    // if(position.length > 0){
    //   console.log("checkpositionone");
    //   getAreaName(location,position)
    // }
  },[])


  let contains = (point,polygon) => { 
    var len = polygon.length
     if(polygon[0] != polygon[len-1])
        polygon[len] = polygon[0];
        let j = 0;
        let exist = false;
        let x = point[0];
        let y = point[1];
        for (let i = 0; i < len; i++)
        {
            j++;
            if (j == len)
            {
                j = 0;
            }
            if (((polygon[i][0] < y) && (polygon[j][0] >= y)) || ((polygon[j][0] < y) && (polygon[i][0] >=
                y)))
            {
                if (polygon[i][1] + (y - polygon[i][0]) / (polygon[j][0] - polygon[i][0]) * (polygon[j][1] -
                  polygon[i][1]) < x)
                {
                    exist = !exist;
                }
            }
        }
         return exist
        
      
        // if(exist){
        //     console.log("exists");
        //     setCheckDeliveryArea(!checkdeliveryarea)
        //     setDeliveryArea(location);  
        //     // console.log(checkdeliveryarea);
        // }
        // else{
        //   // console.log("no");
        //   // console.log(checkdeliveryarea);
        // }
  }

  
  // convert string coordinates to array of coordinates ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
  
  let  getarraypolygon = (location) => {
    let coor = location.coords 
    let coord = coor.split(",");
    let newarray = []
      coord.map(coor => {
      let coo = coor.split(" ").map(Number)
      newarray.push(coo)
    }) 
    return newarray
  }
  
  
  // get areaname if found ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
  
  let getAreaName = (location,point) => {
             location.map(loc => {
             let newcoords = getarraypolygon(loc)
             let result = contains(point,newcoords)
             if(result){
                setCheckDeliveryArea(true)
                setDeliveryArea(loc); 
             }
         })
  }


  useEffect(() => {
    if(position.length > 0){
      setCheckDeliveryArea(false)
      setDeliveryArea("");
      getAreaName(location,position)
    }
    if(position[0] !== coords[0] && position[1] !== coords[1]){
      sessionStorage.setItem("location",JSON.stringify(position));
    }
  },[position])

  

  let submitLocation = () => {
        if(checkdeliveryarea){
            dispatch(checkAreaName(deliveryarea))
            setVisiblee(true)
            setActivePage(true) 
        }
        else{
          dispatch(checkAreaName(false))
          setActivePage(false)
          setVisiblee(false)
          setShowDeliveryErr(true)
          
        }
  }

  
  function DraggableMarker({position, setPosition}) {


    const markerRef = useRef(null)
    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current
          if (marker != null) {
            console.log(marker.getLatLng());
            // setPosition(marker.getLatLng())
            let {lat,lng } = marker.getLatLng()
             setPosition([lat,lng])
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
                <div className="close" onClick={hiddencart}>
                    <span >
                        <CloseIcon  />
                    </span>
                </div>
            </h4>
            <div className="confirmLocation bg-white w-full">
                <div onClick={submitLocation}>
                  <span className="confirmLocation-txt">{t('confirmmaps')}</span>
                </div>
            </div>
            
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










