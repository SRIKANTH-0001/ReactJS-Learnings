function List(props){
    /*Method 1
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
   */

    const itemList=props.Items;
    const Catagory=props.catagory;

    //fruits.sort((a,b)=> a.name.localeCompare(b.name)) //ALPHATICAL ASCENDING ORDER
   
    //fruits.sort((a,b)=> b.name.localeCompare(a.name)) //ALPHATICAL DECENDING ORDER
    
    //fruits.sort((a,b)=>a.rate-b.rate) //NUMERICAL ASCENDING ORDER

   

    // fruits.sort((a,b)=>b.rate-a.rate)///NUMERICAL DESCENDING ORDER

    //For displaying only the rate which is lesser than 100 Rupees

    //const lowcost=fruits.filter(fruit => fruit.rate < 100); 
    
    // const ListItems=lowcost.map(fruit => <li key={fruit.id}>{fruit.name}:{fruit.rate}</li>);
   

    //And this is for displaying more than 100 Rupees cost fruits
   //const Highcost=itemList.filter(fruit => fruit.rate >= 100);

   const ListItems=itemList.map(fruit => <li key={fruit.id}>{fruit.name}:{fruit.rate}</li>);
    
   //const ListItems=itemList.map(fruit => <li key={fruit.id}>{fruit.name}:{fruit.rate}</li>);

    return(<><h2 className="Style">{Catagory}</h2><ol className="Lstyle">{ListItems}</ol></>);
}
export default List