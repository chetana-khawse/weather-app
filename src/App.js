
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from "axios";


function App() {
 const Array=["Delhi","Manali","Nagpur","Mumbai","Pune","Hyderabad"]
 const[data,setData]=useState([])
 useEffect(()=>{
            console.log("hii")
            Array.map((item)=>{
     return axios.get(`https://api.weatherapi.com/v1/current.json?key=09976f826ef1418eba1143300231206&q=${item}&aqi=no`).then((res)=>{
            console.log("output",res.data.current.temp_c)
            data.push({"city":item ,
                      "temp" :res.data.current.temp_c
                      })
            setData([...data]) 
            console.log("data",data)
      })
 })
},[])
 
  return (
  <>
       <div style={{padding:"100px",
                    backgroundColor: "#282c34",
                    minHeight: "100vh"}} >
                <Row xs={1} md={3} className="g-6">
                {data.map((item, idx) => (
  
            <Col key={idx}>
            <Card style={{padding : "10px", margin:"10px"}}>
 
            <Card.Body>
            <Card.Title style={{textDecoration:"underline"}}> &#9729;  {item.city}</Card.Title>
            <Card.Text>{item.temp}° celsius
     
            </Card.Text>
            </Card.Body>
            </Card>
            </Col>
))}
            </Row>
</div> </>
    );}

export default App;
