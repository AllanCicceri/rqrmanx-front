import SideContainer from "./components/sidebar/SideContainer";
import RequirementsHeader from "./components/requirements/header/RequirementsHeader";

function App() {
  return (
    <div className="w-screen h-screen bg-cinza flex">
      <SideContainer/>
      <RequirementsHeader/>
    </div>
  );
}

export default App;
