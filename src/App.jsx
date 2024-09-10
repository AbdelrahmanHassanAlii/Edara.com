// import "./App.css";

import { Route, Routes } from "react-router-dom";
import LoginForm from "./Components/Shared/LoginForm";
import SignForm from "./Components/Shared/SignForm";
import UserData from "./Components/Shared/UserData";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<SignForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/user" element={<UserData />} />
    </Routes>
      {/* <SignForm />
      <LoginForm />
      <UserData /> */}
      <div>App</div>
    </>
  );
}

export default App;
