
import {Container} from 'react-bootstrap'
import NavBar from './components/NavBar';
import Header from './components/Header';
import Category from './components/Category';
import CardList from './components/CardList';
import { useState } from 'react';
import { items } from './data';
function App() {
  const [itemsData, setItemsData] = useState(items)
 const allCategory =['الكل',...new Set(items.map((i)=>i.category))]

  const fliterCat = (cat)=>{
    if(cat === 'الكل'){setItemsData(items)}
    else{
    const newArr = items.filter((item)=>item.category === cat )
    setItemsData(newArr)

  }}
  // fltier by search
  const fliterSearch = (word)=>{
    if(word !== "" )
    {
    const newArr = items.filter((item)=>item.title === word )
    setItemsData(newArr)

    }
}
  return (
  <div className="color-body font">
    <NavBar fliterSearch={fliterSearch}/>
      <Container>
        <Header/>
        <Category fliterCat ={fliterCat} allCategory={allCategory} /  >
        <CardList itemsData ={itemsData} /> 
      </Container>
    
    
    
   
    
    
    
  </div>
  );
}

export default App;
