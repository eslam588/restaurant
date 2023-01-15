import React,{useEffect} from 'react'

const ContainsPoint = ({loc,point}) => {

    let location = loc.coords;
    console.log(point);

    console.log(loc);
    console.log(point);

    function contains(point, polygon){
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
            return exist;
    }

    useEffect(() => {
        contains()
    },[])
    
    

  return (
    <div>
        <p>eslam</p>
    </div>
  )
}

export default ContainsPoint



// let polygon = [[31.1589229,30.382576],[31.1548566,30.3819559],[31.1554897,30.3789756],[31.1595881,30.379642],[ 31.1589229,30.382576]]
// let point = [30.3810573,31.1571273]
