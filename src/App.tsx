import './App.css';
import Header from "./components/header";
import InfoPanel from './components/info-panel';
import SearchBar from './components/search-bar';
import ToolBar from "./components/tool-bar";
import WeatherMap from "./components/weather-map";

export default function App(props: any) {
  return (
    <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", background: "#4a4a4a" }}>
      <div style={{ height: "20%", width: "100%" }}>
        <Header />
        <div style={{ height: "75%", display: "flex", alignItems: "flex-end" }}>
          <ToolBar />
        </div>
      </div>
      <div style={{ height: "80%", width: "100%", display: "flex", flexDirection: "row" }}>
        <WeatherMap>
          <SearchBar />
        </WeatherMap>
        <InfoPanel />
      </div>
    </div>
  );
}