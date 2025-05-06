import { Outlet } from "react-router-dom";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div>
        <nav>Navbar</nav>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
