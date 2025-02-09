import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import SideMenu from "../components/menu_lat"; // Menu lateral
import { CardComponent } from "../components/card_video"; // Card de vídeo simples
import { CardVideoProgresso } from "../components/CardVideoProgresso"; // Card com progresso
import { BannerInicial } from "../components/BannerInicial"; // Componente Banner Inicial
import { checkUserLoggedIn } from "../api/auth"; // Import checkUserLoggedIn
import { fetchCourses, fetchAulas } from "../api/courses"; // Import fetchCourses and fetchAulas

interface Course {
    id: number;
    name: string;
    description: string;
}

interface Aula {
    id: number;
    title: string;
    description: string;
    url: string;
}

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [courses, setCourses] = useState<Course[]>([]);
  const [aulas, setAulas] = useState<Aula[]>([]);

  useEffect(() => {
    const verifyLogin = async () => {
      const isLoggedIn = await checkUserLoggedIn();
      if (!isLoggedIn) {
        navigate("/"); // Redirect to login page if not logged in
      } else {
        setIsLoading(false); // Set loading to false if logged in
      }
    };

    verifyLogin();
  }, [navigate]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const coursesData = await fetchCourses();
        setCourses(coursesData);

        if (coursesData.length > 0) {
          const aulasData = await fetchAulas(coursesData[0].id);
          setAulas(aulasData);
        }
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return null; // Render nothing while checking login status
  }

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", overflowX: "hidden" }}>
      {/* Menu Lateral */}
      <SideMenu />

      {/* Conteúdo Principal */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          padding: "24px",
          background: "linear-gradient(to bottom right, #213435 30%, #46685B)",
          overflowX: "hidden",
        }}
      >
        {/* Banner Inicial */}
        {courses.length > 0 && (
          <BannerInicial
            title={courses[0].name}
            subtitle={courses[0].description}
            onAssistirClick={() => alert("Assistir")}
            onSaibaMaisClick={() => alert("Saiba Mais")}
            imageSrc="/path/to/banner-image.jpg" // Substituir pela imagem correta
          />
        )}

        {/* Em Progresso */}
        <Box>
          <Typography
            variant="h6"
            sx={{ color: "white", fontWeight: "bold", marginBottom: "16px" }}
          >
            Em progresso
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "24px",
              overflowX: "auto",
              paddingBottom: "8px",
            }}
          >
            {aulas.map((aula) => (
              <CardVideoProgresso
                key={aula.id}
                title={aula.title}
                progress={60} // Placeholder progress value
                onButtonClick={() => alert("Continuando o vídeo...")}
              />
            ))}
          </Box>
        </Box>

        {/* Lançamentos */}
        <Box>
          <Typography
            variant="h6"
            sx={{ color: "white", fontWeight: "bold", marginBottom: "16px" }}
          >
            Lançamentos
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "24px",
              overflowX: "auto",
              paddingBottom: "8px",
            }}
          >
            {courses.map((course) => (
              <CardComponent
                key={course.id}
                title={course.name}
                onButtonClick={() => alert("Iniciando vídeo...")}
                imageSrc={undefined} // Substituir por uma URL de imagem real
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
