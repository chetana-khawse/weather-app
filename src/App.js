
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faSearch } from '@fortawesome/free-solid-svg-icons';
 


function App() {
                 const [city,setCity]=useState(["Nagpur"])
                 const[data,setData]=useState([])
                 const current = new Date();
             // By default US English uses 12hr time with AM/PM
const time = current.toLocaleTimeString("en-US");

console.log(time);
 
 function search()
 {
     axios.get(`https://api.weatherapi.com/v1/current.json?key=09976f826ef1418eba1143300231206&q=${city}&aqi=no`)
     .then((res)=>{
     data.push(res.data)
     setData([...data]) 
            
})
}
 useEffect(()=>{
},[])

 
  return (
  <>
       <div style={{padding:"100px",
                    backgroundImage: "url('Thunder_lightning_Garajau_Madeira_289985700.jpg')",
                    backgroundColor: "#282c34",
                    minHeight: "100vh",
                    backgroundSize:"cover"
                    }} >
                      <h5 style={{color:"white",fontSize:"50px",
        fontFamily:"sans-serif"}}>Weather App</h5><br/>
        <>
        <div >
          
            
            <input type='text' placeholder='Enter a city name....' onChange={(e)=>{
                                           setCity(e.target.value)
                                           e.preventDefault();
                                          }} 
                                         value={city} style={{  color :"white",
                                                                fontSize:"20px",
                                                                fontFamily:"sans-serif",
                                                                border:"none",
                                                                alignItems:"center",
                                                                backgroundColor: "rgba(0, 0, 0, 0)",
                                                                borderBottom:"2px solid white"}} />&nbsp; &nbsp;
        
            <button type='search' onClick={search} style={{     color :"white",
                                                               fontSize:"20px",
                                                               fontFamily:"sans-serif",
                                                               border:"none",
                                                
                                                           alignItems:"center",
                                                                backgroundColor: "rgba(0, 0, 0, 0)",
                                                                borderBottom:"1px solid white" }}><FontAwesomeIcon icon={faSearch} /></button></div>
            <div><Row xs={1} md={3} className="g-6">
                
        
        {    
             data && data.map((item, idx) => (
                
             <Col key={idx}>
             <Card style={{
                           padding : "10px",
                           margin: "30px",
                           backgroundColor: "#ffffff",
                           opacity:"0.8",
                           borderRadius:"20px"
                           }}>
 
             <Card.Body>
             <Card.Title style={{
                                textDecoration:"underline",
                                fontSize:"25px"}}>   
                                {item && item.location && item.location.name}&nbsp;
                                </Card.Title>
                                {time}<br/>
            {item && item.location && item.location.region} , {item && item.location && item.location.country}                
             <Card.Text > {item && item.current && item.current.temp_c}° c
             <br/>
             {item && item.current.condition && item.current.condition.text}
             <img src={`${item && item.current.condition && item.current.condition.icon}`} alt="img" style={{color:"black"}}/>
             <div>
              <div> Humidity :  {item && item.current && item.current.humidity} %</div>
              <div>wind : {item && item.current && item.current.wind_kph} kph</div>
             </div>
     
            </Card.Text>
            </Card.Body>
            </Card>
            </Col>
))}
            </Row></div>
        </>
</div> </>
    );}

export default App;
