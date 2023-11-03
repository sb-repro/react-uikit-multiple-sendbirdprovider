import "./App.css";
import "@sendbird/uikit-react/dist/index.css";

import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useMatch,
} from "react-router-dom";

import RoutePage from "./components/RoutePage";
import Team from "./pages/Team";
import Private from "./pages/Private";
import SendbirdProvider from "@sendbird/uikit-react/SendbirdProvider";
import { createContext, useContext, useEffect, useState } from "react";
import useSendbirdStateContext from "@sendbird/uikit-react/useSendbirdStateContext";

const UserContext = createContext(null);
const ChatUserProvider = ({ children }) => {
  const [user, setUser] = useState({
    userId: "user001",
    nickname: "user001",
  });
  return (
    <UserContext.Provider value={{ setUser }}>
      <SendbirdProvider
        appId={"B1C2424D-662D-477D-B7D5-5CFD9039CE22"}
        userId={user.userId}
        nickname={user.nickname}
      >
        {children}
      </SendbirdProvider>
    </UserContext.Provider>
  );
};

function App() {
  return (
    <ChatUserProvider>
      <BrowserRouter>
        <div>
          <h1>Chat List</h1>
          <div className="RoutePage">
            <RoutePage />
          </div>
          <Routes>
            <Route element={<UserSwitch />}>
              <Route path="/private" element={<Private />} />
              <Route path="/team" element={<Team />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </ChatUserProvider>
  );
}

function UserSwitch() {
  const isPrivate = useMatch("/private");
  const { setUser } = useContext(UserContext);
  const context = useSendbirdStateContext();

  useEffect(() => {
    if (context.stores?.userStore.initialized) {
      if (isPrivate) {
        setUser({ userId: "hoon751", nickname: "hoon751" });
      } else {
        setUser({ userId: "user001", nickname: "user001" });
      }
    }
  }, [isPrivate, context.stores?.userStore.initialized]);
  return <Outlet />;
}

export default App;
