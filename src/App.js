import HomeScreen from "./components/HomeScreen"
import Login from "./components/login/Login";
import UserManager from "./components/user/UserManager";
import { useState } from "react";
import { UserCtxProvider } from "./context/UserContext";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';



function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false)

  return (
    <UserCtxProvider>
      <Router>
        <Routes>
          {userLoggedIn ?
            <Route path="/" element={<HomeScreen />} />
            :
            <Route path="/" element={<Navigate to="/login" />} />
          }

          <Route path="/login" element={<Login setUserLoggedIn={setUserLoggedIn} />} />
          <Route path="/users" element={<UserManager />} />
        </Routes>
      </Router>
    </UserCtxProvider>
  );
}

export default App;
