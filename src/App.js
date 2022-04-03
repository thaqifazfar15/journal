import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Nav />
      <div className="h-screen w-full bg-indigo-400">
        <Main />
      </div>
    </>
  );
}

export default App;
