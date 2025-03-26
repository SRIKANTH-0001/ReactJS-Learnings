import List from './List.jsx'

function App() {
  //Method-2

  const fruits=[{id:1,name:"Orange",rate:80},
    {id:2,name:"Apple",rate:100},
    {id:3,name:"Banana",rate:40},
    {id:4,name:"JackFruit",rate:130},
    {id:5,name:"DragonFruit",rate:170}
  ];
  const Vegetables=[{id:6,name:"Onion",rate:24},
    {id:7,name:"Ginger",rate:100},
    {id:8,name:"Tomato",rate:10},
    {id:9,name:"Potato",rate:30},
    {id:10,name:"Beans",rate:60}
  ];           
  
  return (<>
          <List Items={fruits} catagory="Fruits"/>
          <List Items={Vegetables} catagory="Vegetables"/>
      </>
  
    );
}

export default App;