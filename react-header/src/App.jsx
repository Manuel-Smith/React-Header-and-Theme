import Header from "./assets/Header/Header";
import LeftSideBar from "./assets/LeftSideBar/LeftSideBar";
import "./App.scss";
import MainSection from "./assets/MainSection/MainSection";
function App() {
  return (
    <>
      <header className="appHeader">
        <Header />
      </header>
      <aside className="appLeftSideBar">
        <LeftSideBar />
      </aside>
      <main className="appMain">
        <MainSection />
      </main>
    </>
  );
}

export default App;
