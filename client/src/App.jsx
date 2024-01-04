import "./App.css";
// import Header from "./components/Header";
import Header from "./components/Header";
import SearchingSection from "./components/SearchingBox";
import PlaceList from "./components/TouristAttractionList";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchingSection />
      <PlaceList />
    </div>
  );
}

export default App;
