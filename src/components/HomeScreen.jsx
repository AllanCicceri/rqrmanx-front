import SideContainer from "./sidebar/SideContainer";
import MainContainer from "./main/MainContainer"

function HomeScreen() {
    return (
        <div className="w-screen h-screen bg-cinza flex flex-col md:flex-row">
            <SideContainer />
            <MainContainer />
        </div>
    )
}

export default HomeScreen;