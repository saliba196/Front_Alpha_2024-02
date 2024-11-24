import React, { useState } from "react";
import { Box } from "@mui/material";
import { ButtonAtom } from "./ButtonAtom.tsx";
import { ImageWithBadge } from "./ImageWithBadge.tsx";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";

export const SideMenu: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleHover = (hovering: boolean) => setIsExpanded(hovering);

  return (
    <Box
      sx={{
        width: isExpanded ? 280 : 140, // Dynamically set width
        height: 900,
        flexShrink: 0,
        backgroundColor: "#253A3B",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 2,
        transition: "width 0.3s", // Smooth width transition
        position: "fixed",
        overflow: "hidden", // Prevent overflow when collapsed
      }}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <ImageWithBadge
        src="your-image-url"
        alt="User Name"
        badgeContent="1"
        isExpanded={isExpanded}
      />
      <Box mt={4} width="100%" display="flex" flexDirection="column" gap="16px">
        <ButtonAtom
          icon={<HomeIcon />}
          label="Home"
          backgroundColor="#648A64"
          isExpanded={isExpanded}
        />
        <ButtonAtom
          icon={<SettingsIcon />}
          label="Settings"
          backgroundColor="#648A64"
          isExpanded={isExpanded}
        />
        <ButtonAtom
          icon={<InfoIcon />}
          label="About"
          backgroundColor="#46685B"
          isExpanded={isExpanded}
        />
        {/* Add more buttons as needed */}
      </Box>
    </Box>
  );
};
export default SideMenu;
