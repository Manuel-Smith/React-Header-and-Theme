import Header from "./assets/Header/Header";
import LeftSideBar from "./assets/LeftSideBar/LeftSideBar";
import "./App.scss";

function App() {
  return (
    <>
      <header className="appHeader">
        <Header />
      </header>
      <aside className="appLeftSideBar">
        <LeftSideBar />
      </aside>
    </>
  );
}

export default App;
