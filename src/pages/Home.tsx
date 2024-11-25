import React from "react";
import SideMenu from "../components/menu_lat"; // Importar o menu lateral
import { MuiButtons } from "../components/MuiButtons"; // Exemplo de outro componente
import ImgMediaCard from "../components/video_prev";
import MediaControlCard from "../components/video_red";

const Home: React.FC = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Menu Lateral */}
      <SideMenu />

      {/* Área Principal */}
      <main style={{ flex: 1, padding: "16px", backgroundColor: "#f0f0f0" }}>
        <h1>Bem-vindo à Home</h1>
        <p>Este é o conteúdo principal da página Home.</p>

        {/* Exemplo de outros componentes */}
        <MuiButtons />
        <ImgMediaCard />
        <MediaControlCard />
      </main>
    </div>
  );
};

export default Home;
