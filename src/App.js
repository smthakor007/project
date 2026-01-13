import React, { useState } from "react";
import './App.css';
import CounterApp from "./component/Counter";
import ToggleText from "./component/ToggleText";
import InputTracker from "./component/InputTracker";
import ColorChanger from "./component/ColorChanger";
import LightDark from "./component/LightDark";
import FetchApi from "./component/FetchApi";
import Clock from "./component/Clock";
import CounterTitle from "./component/CounterTitle";
import WindowWidth from "./component/WindowWidth";


import Child from "./component/Child";
import Props from "./component/Props";
import Todo from "./component/Todo";
import Card from "./component/Card";
import Table from "./component/Table";
import Timer from "./component/Timer";
import Utodo from "./component/Utodo";
import Form from "./component/Form";
import Todoo from "./component/Todoo";
import Home from "./component/Home";
import LocalStorage from "./component/LocalStorage";
import SessionStorage from "./component/SessionStorage";
import Uncontroll from "./component/Uncontroll";
import Controll from "./component/Controll";
import CommentReview from "./component/CommentReview";
import Nav from "./Nav";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./Product";
import Electronic from"./Electronic";
import Jewellery from "./component/Jewellery";
import Cloth from "./Cloth";
import Localbox from "./component/Localbox";
import ProductDetail from "./component/ProductDetail";
import ProductData from "./component/ProductData";

// import AutoSave from "./component/AutoSave";

function App() {
  // const[showCard, setShowCard]=useState(false)
  return (
    <div>
      

      {/* <CounterApp /> */}
      {/* <ToggleText />
      <InputTracker />
      <ColorChanger />
      <LightDark />
      <WindowWidth /> */}
      {/* <AutoSave /> */}

    
      {/* <FetchApi /> */}

      {/* <Clock />
      <CounterTitle /> */}
      {/* <Timer/> */}

      {/* <Form/> */}



      
      {/* <Child/>
      <Props/> */}

{/* <Todo/> */}

{/* <LocalStorage/> */}
{/* <SessionStorage/> */}



{/* <Controll/>
<Uncontroll/> */}
{/* <CommentReview/> */}
{/* <Localbox/> */}


{/* <Card/> */}
{/* <Table/> */}
{/* <Home/> */}
{/* <ProductData/> */}
{/* {
 showCard ?<Card/>:<Table/>
}

<button onClick={()=>setShowCard(true)}>ShowCard</button>
<button onClick={()=>setShowCard(false)}>ShowTable</button> */}

{/* <Utodo /> */}
      
{/* <Todoo/> */}


<Nav/>
<Routes>
  
  <Route path="/todo" element={<Todo/>}/>
  <Route path="/card" element={<Card/>}/>
  <Route path="/table" element={<Table/>}/>
  <Route path="/timer" element={<Timer/>}/>
  <Route path="/product" element={<Product/>}>
  <Route path="electronic"element={<Electronic/>}/>
  <Route path="jewellery" element={<Jewellery/>}/>
  <Route path="cloth" element={<Cloth/>}/>
  
  </Route>
   <Route path="/productDetail/:id" element={<ProductDetail />} />

</Routes>



    </div>
  );
}

export default App;
