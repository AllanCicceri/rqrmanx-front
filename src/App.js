import SideContainer from "./components/sidebar/SideContainer";
import MainContainer from "./components/main/MainContainer"

function App() {
  return (
    <div className="w-screen h-screen bg-cinza flex flex-col md:flex-row">
      <SideContainer/>
      <MainContainer/>      
    </div>
  );
}

export default App;
