import "./App.css";
import { MuiButton } from "./components/MuiButton";
import ImgMediaCard from "./components/video_prev";
import MediaControlCard from "./components/video_red";
import SideMenu from "./components/menu_lat.tsx";

function App() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Lateral SideMenu */}
      <SideMenu />

      {/* Conteúdo Principal */}
      <main style={{ flex: 1, padding: "16px", backgroundColor: "#f0f0f0" }}>
        {/* Botão MUI */}
        <MuiButton />
        {/* Cartão de vídeo com pré-visualização */}
        <ImgMediaCard />
        {/* Cartão de vídeo destacado */}
        <MediaControlCard />
      </main>
    </div>
  );
}

export default App;
