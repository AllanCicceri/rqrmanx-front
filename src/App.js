import SideContainer from "./components/sidebar/SideContainer";
import MainContainer from "./components/main/MainContainer"
import Login from "./components/login/Login";
import { useState } from "react";
import { UserCtxProvider } from "./context/UserContext";


function App() {
  const [loggedUser, setLoggedUser] = useState(null)
  


  function RenderApp() {

    return (

      <div className="w-screen h-screen bg-cinza flex flex-col md:flex-row">
        <SideContainer />
        <MainContainer />
      </div>
    );
  }


  return (
    <UserCtxProvider>
      {loggedUser === null ?
        <Login setLoggedUser={setLoggedUser} /> :
        RenderApp()}

    </UserCtxProvider>
  );
}

export default App;
