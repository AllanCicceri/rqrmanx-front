import SideContainer from "./components/sidebar/SideContainer";
import RequirementsContainer from "./components/requirements/RequirementsContainer"

function App() {
  return (
    <div className="w-screen h-screen bg-cinza flex">
      <SideContainer/>
      <RequirementsContainer/>      
    </div>
  );
}

export default App;
