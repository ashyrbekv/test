gi
import'./App.css';
import Card from './components/Card';
import pic from"./ww2.jpg"

const data=[
  {
    title:"Physycal Health",
    color:"#0052C1",
  },
  {
    title:"Nutrition",
    color:null,
    img:pic
  },
  {
    title:"Mental Health",
    color:"#FFFFFF",
  },
  {
    title:"Physycal Health",
    color:"#62D0DF",
  },
]



function App() {
  return (
    <div className="App">
{
  data.map((el,id) =>{
    return<Card data={el} key={id}/>
  })
}
   
    </div>
  )
}

export default App;


