import React from "react";
import {
  Box,
  Typography,
  Stack,
  Chip,
  useTheme,
  useMediaQuery,
  Container,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallMobile = useMediaQuery("(max-width:480px)");

  return (
    <Container
      id="experience"
      maxWidth={false}
      sx={{
        width: "100%",
        maxWidth: "1200px !important",
        px: { xs: 1, sm: 2, md: 4, lg: 6 },
        py: { xs: 3, sm: 4, md: 6, lg: 8 },
        background: "transparent",
        animation: "fadeIn 0.8s ease-in-out",
        "@keyframes fadeIn": {
          from: { opacity: 0, transform: "translateY(20px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        component="h2"
        sx={{
          mb: { xs: 2, sm: 3, md: 4 },
          color: "#0f355e",
          fontWeight: "bold",
          textAlign: "center",
          fontSize: { xs: "1.4rem", sm: "1.7rem", md: "2rem", lg: "2.2rem" },
          lineHeight: { xs: 1.2, sm: 1.3 },
          wordWrap: "break-word",
          overflowWrap: "break-word",
        }}
      >
        My <span style={{ color: "#0f355e" }}>Experience</span>
      </Typography>

      {/* Experience Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: 1.5, sm: 2, md: 3 },
          p: { xs: 1.5, sm: 2.5, md: 3, lg: 4 },
          borderRadius: { xs: 2, sm: 3 },
          background: "transparent",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          border: "1px solid rgba(0,0,0,0.05)",
          mx: "auto",
          width: "100%",
          maxWidth: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* Role and Duration */}
        <Box 
          sx={{ 
            textAlign: { xs: "center", sm: "left" },
            mb: { xs: 1, sm: 1.5 }
          }}
        >
          <Typography
            variant="h6"
            component="h3"
            sx={{
              color: "#0f355e",
              fontSize: { 
                xs: "1rem", 
                sm: "1.2rem", 
                md: "1.4rem",
                lg: "1.6rem" 
              },
              fontWeight: "bold",
              lineHeight: { xs: 1.3, sm: 1.4 },
              mb: 0.5,
            }}
          >
            Backend Developer
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{
              color: "#666",
              fontSize: { 
                xs: "0.75rem", 
                sm: "0.85rem", 
                md: "0.9rem",
                lg: "1rem" 
              },
              lineHeight: 1.2,
            }}
          >
            Feb 2025 – Present · 8 months
          </Typography>
        </Box>

        {/* Tech Stack Chips */}
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent={isMobile ? "center" : "flex-start"}
          gap={0.8}
          sx={{ 
            mb: { xs: 1.5, sm: 2 },
            '& .MuiChip-root': {
              flexShrink: 0
            }
          }}
        >
          {["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Sequelize"].map(
            (tech, i) => (
              <Chip
                key={i}
                icon={!isSmallMobile ? <WorkIcon sx={{ 
                  fontSize: { xs: "0.7rem", sm: "0.8rem" } 
                }} /> : undefined}
                label={tech}
                size={isSmallMobile ? "small" : "medium"}
                sx={{
                  backgroundColor: "#68A063",
                  color: "#fff",
                  fontWeight: 500,
                  fontSize: { 
                    xs: "0.6rem", 
                    sm: "0.7rem", 
                    md: "0.8rem" 
                  },
                  height: { xs: 22, sm: 28, md: 32 },
                  px: 0.5,
                  "& .MuiChip-icon": { 
                    color: "#fff",
                    ml: { xs: 0.5, sm: 0.75 }
                  },
                  "& .MuiChip-label": {
                    px: { xs: 1, sm: 1.5 },
                    overflow: "visible"
                  },
                  minWidth: "fit-content",
                }}
              />
            )
          )}
        </Stack>

        {/* Description */}
        <Typography
          variant="body1"
          sx={{
            color: "#333",
            lineHeight: { xs: 1.5, sm: 1.6, md: 1.7 },
            fontSize: { 
              xs: "0.8rem", 
              sm: "0.85rem", 
              md: "0.9rem",
              lg: "1rem" 
            },
            textAlign: { xs: "left", sm: "justify" },
            mb: { xs: 1, sm: 1.5 },
            wordWrap: "break-word",
            overflowWrap: "break-word",
          }}
        >
          Over the past 6 months, I've focused on building and optimizing
          backend systems to power scalable applications. My work has centered
          on:
        </Typography>

        {/* Bullet Points */}
        <Box
          component="ul"
          sx={{
            pl: { xs: 2, sm: 2.5, md: 3 },
            color: "#333",
            lineHeight: { xs: 1.4, sm: 1.5, md: 1.6 },
            fontSize: { 
              xs: "0.78rem", 
              sm: "0.82rem", 
              md: "0.88rem",
              lg: "0.95rem" 
            },
            textAlign: "left",
            m: 0,
            mb: { xs: 1, sm: 1.5 },
            "& li": {
              mb: { xs: 0.4, sm: 0.6, md: 0.8 },
              pl: 0.5,
              wordWrap: "break-word",
              overflowWrap: "break-word",
            },
          }}
        >
          <li>Designing RESTful APIs with authentication & authorization</li>
          <li>Managing PostgreSQL and MongoDB databases</li>
          <li>Creating efficient data models and optimizing queries</li>
          <li>Integrating payment gateways and third-party APIs</li>
          <li>Deploying and maintaining CI/CD pipelines</li>
          <li>Debugging and ensuring backend reliability</li>
        </Box>

        {/* Closing Description */}
        <Typography
          variant="body1"
          sx={{
            color: "#333",
            lineHeight: { xs: 1.5, sm: 1.6, md: 1.7 },
            fontSize: { 
              xs: "0.8rem", 
              sm: "0.85rem", 
              md: "0.9rem",
              lg: "1rem" 
            },
            textAlign: { xs: "left", sm: "justify" },
            wordWrap: "break-word",
            overflowWrap: "break-word",
          }}
        >
          I take pride in writing clean, modular, and well-documented backend
          code, ensuring systems remain maintainable and scalable as business
          needs evolve.
        </Typography>
      </Box>
    </Container>
  );
}

export default Experience;