import React from "react";
import { Badge, Avatar, Typography } from "@mui/material";
import { styled } from "@mui/system";

interface ImageWithBadgeProps {
  src: string;
  badgeContent: React.ReactNode;
  alt: string;
  isExpanded: boolean;
}

const StyledBadge = styled(Badge)`
  .MuiBadge-badge {
    background-color: #46685b;
    color: white;
  }
`;

export const ImageWithBadge: React.FC<ImageWithBadgeProps> = ({
  src,
  badgeContent,
  alt,
  isExpanded,
}) => (
  <StyledBadge
    badgeContent={badgeContent}
    anchorOrigin={{ vertical: "top", horizontal: "right" }}
  >
    <Avatar alt={alt} src={src} sx={{ width: 60, height: 60 }} />
    {isExpanded && (
      <Typography variant="h4" color="white" mt={2}>
        {alt}
      </Typography>
    )}
  </StyledBadge>
);
