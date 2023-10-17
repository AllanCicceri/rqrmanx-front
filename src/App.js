import SideContainer from "./components/sidebar/SideContainer";
import MainContainer from "./components/main/MainContainer"
import Login from "./components/login/Login";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null)

  function onclick(){
    setUser("")
  }

  function RenderApp() {
    return (
      <div className="w-screen h-screen bg-cinza flex flex-col md:flex-row">
        <SideContainer />
        <MainContainer />
      </div>
    );
  }


  return (
    user === null?
    <Login onclick={onclick}/>:
    RenderApp()
  );
}

export default App;
