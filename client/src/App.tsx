import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import "./styles/styles.css";

const App = () => {
  const [user, setUser] = React.useState<{_id: string, email: string, bookmarks: Array<any>} | null>(null);

  return (
    <Routes>
      <Route path="/" element={<Home user={user} setUser={setUser} />} />
    </Routes>
  );
}

export default App;