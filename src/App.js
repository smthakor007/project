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
// import Header from "./component/Header";

import Child from "./component/Child";
import Props from "./component/Props";
import Todo from "./component/Todo";
import Card from "./component/Card";
import Table from "./component/Table";
import Timer from "./component/Timer";
import Utodo from "./component/Utodo";
import Form from "./component/Form";



// import AutoSave from "./component/AutoSave";

function App() {
  // const[showCard, setShowCard]=useState(false)
  return (
    <div>
      {/* <Header/>

      <CounterApp />
      <ToggleText />
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

<Todo/>

{/* <Card/> */}
{/* <Table/> */}


{/* {
 showCard ?<Card/>:<Table/>
}

<button onClick={()=>setShowCard(true)}>ShowCard</button>
<button onClick={()=>setShowCard(false)}>ShowTable</button> */}

{/* <Utodo /> */}
      


    </div>
  );
}

export default App;
