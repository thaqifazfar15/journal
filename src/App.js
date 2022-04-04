import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Tech from "./components/Tech";

function App() {
  return (
    <>
      <Nav />
      <div className="h-screen w-full bg-indigo-400 pt-[80px]">
        <Main />
      </div>
      <Tech />
    </>
  );
}

export default App;
