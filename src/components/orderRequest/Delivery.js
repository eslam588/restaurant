import { logDOM } from '@testing-library/react';
import React,{useState,useEffect} from 'react'
import location from "../../location.json"
import {CloseSvgarea} from  "../SVG/NavigatorSvg"
import { useNavigate } from 'react-router-dom';

const Delivery = () => {

//   const [position,setPosition] = useState([]);
//   const [areaname , setAreaName]= useState("")
//   const navigate = useNavigate();
//   // get coordinates for user ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
//   function getLocation() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(showPosition);
//     }
// }
 
// function showPosition(position) {
//     setPosition([position.coords.latitude,position.coords.longitude])
// }

// useEffect(() => {
//   getLocation()
// },[])
 
// check coordinates in polygon or no ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

// let contains =(point,location,polygon) => {
//   var len = polygon.length
//   let polyname = ""
//   if(polygon[0] != polygon[len-1])
//       polygon[len] = polygon[0];
//       let j = 0;
//       let exist = false;
//       let x = point[0];
//       let y = point[1];
//       for (let i = 0; i < len; i++)
//       {
//           j++;
//           if (j == len)
//           {
//               j = 0;
//           }
//           if (((polygon[i][0] < y) && (polygon[j][0] >= y)) || ((polygon[j][0] < y) && (polygon[i][0] >=
//               y)))
//           {
//               if (polygon[i][1] + (y - polygon[i][0]) / (polygon[j][0] - polygon[i][0]) * (polygon[j][1] -
//                 polygon[i][1]) < x)
//               {
//                   exist = !exist;
//               }
//           }
//       }
//       if(exist){
//         polyname=location.name
//         setAreaName(polyname)
//       }
// }

// convert string coordinates to array of coordinates ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

// let  getarraypolygon = (location) => {
//   let coor = location.coords 
//   let coord = coor.split(",");
//   let newarray = []
//   coord.map(coor => {
//     let coo = coor.split(" ").map(Number)
//     newarray.push(coo)
//   }) 
//   return newarray
// }


// get areaname if found ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

// let getAreaName = (location,position) => {
//         let result=""
//         location.map(loc => {
//            let newcoords = getarraypolygon(loc)
//            contains(position,loc,newcoords)
//         })
// }

// useEffect(() => {
//   if(position.length > 0){
//     getAreaName(location,position)
//   } 
// },[position])

// const [validarea , setValidArea] = useState(null)

// let choosecurrent =(location,position) => {
//   if(position.length > 0){
//     getAreaName(location,position)
    // if(areaname != ""){
    //   console.log(areaname);
    //   setValidArea(false)
    // }
    // else{
    //   setValidArea(true)
    //   console.log(areaname);
    // }
 // } 
  
// }

// let deleteareaname = () => {
//   console.log("close");
//   setAreaName("")
// }


//   let onchangeoption = (e) => {
//     console.log(e.target.value);  
//   }

  return (
    <></>
    // <div className='delivery-comp'>
    //    <h3 className='header-select'>Select your area</h3>
    //   {
    //     areaname ? <div className='area-name'>{areaname} <CloseSvgarea deleteareaname={deleteareaname} /></div> : (
    //         <p className='select-area' onClick={()=>choosecurrent(location,position)}>Or Choose your current location</p>
    //     )
       
    //   } 
    //    <form>
    //       <select id='filter-menu' onChange={(e)=>onchangeoption(e)}>
    //          {
    //           location.map(loc => {
    //             return (
    //               <option>{loc.name}</option>
    //             )
    //           })
    //          }
    //       </select>
    //   </form> 
    //    { 
    //      validarea && <p className='no-delivery'>Sorry, we don't deliver to this area!</p> 

    //   } 
     
    // </div>
  )
}

export default Delivery
