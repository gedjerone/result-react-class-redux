import GameArea from "./components/GameArea.jsx";
import Display from './components/Display.jsx';
import React from "react";

class App extends React.Component {
  render() {
    return ( 
     <div className={'flex flex-col p-4 justify-center items-center'}>
        <h1>Tic Tac Toe Game React Redux</h1>
         <div className={'mt-8 bg-white px-12 py-8 rounded-2xl shadow-[0px_20px_20px_10px_#00000024] border-4'}>
          <Display/>
          <GameArea/>
         </div>
     </div>
    ) 
  }
}

export default App
