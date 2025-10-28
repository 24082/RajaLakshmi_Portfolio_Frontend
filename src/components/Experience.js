import React from "react";
import {
  Box,
  Typography,
  Paper,
  Stack,
  Chip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      id="experience"
      sx={{
        width: "100%",
        maxWidth: 1200,
        mx: "auto",
        px: { xs: 2, sm: 3, md: 6 },
        py: { xs: 4, md: 8 },
        borderRadius: 3,
        animation: "fadeIn 1s ease-in",
        "@keyframes fadeIn": {
          from: { opacity: 0, transform: "translateY(20px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          mb: { xs: 3, md: 4 },
          color: "#0f355e",
          fontWeight: "bold",
          textAlign: "center",
          fontSize: { xs: "1.8rem", md: "2.2rem" },
        }}
      >
        My <span style={{ color: "#0f355e" }}>Experience</span>
      </Typography>

      {/* Experience Card */}
      <Paper
        elevation={3}
        sx={{
          p: { xs: 3, sm: 4, md: 5 },
          borderRadius: 3,
          background: "linear-gradient(135deg, #ffffff, #f4f8fb)",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
        }}
      >
        <Stack spacing={3}>
          {/* Role Title */}
          <Typography
            variant="h5"
            fontWeight="bold"
            color="primary"
            sx={{
              fontSize: { xs: "1.2rem", md: "1.5rem" },
            }}
          >
            Backend Developer
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{
              color: "#666",
              fontSize: { xs: "0.9rem", md: "1rem" },
            }}
          >
            Feb 2025 – Present · 8 months
          </Typography>

          {/* Tech Stack */}
          <Stack
            direction="row"
            spacing={1}
            sx={{
              flexWrap: "wrap",
              mb: 2,
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            {["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Sequelize"].map(
              (tech, i) => (
                <Chip
                  key={i}
                  icon={<WorkIcon />}
                  label={tech}
                  sx={{
                    backgroundColor: "#68A063",
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: { xs: "0.75rem", sm: "0.85rem" },
                  }}
                />
              )
            )}
          </Stack>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              color: "#444",
              lineHeight: 1.8,
              fontSize: { xs: "0.95rem", md: "1rem" },
              textAlign: { xs: "justify", md: "left" },
            }}
          >
            Over the past 6 months, I've focused on building and optimizing
            backend systems to power scalable applications. My work has centered
            on:
          </Typography>

          <Box
            component="ul"
            sx={{
              pl: 3,
              color: "#444",
              lineHeight: 1.8,
              fontSize: { xs: "0.9rem", md: "1rem" },
              textAlign: { xs: "justify", md: "left" },
            }}
          >
            <li>
              Designing and implementing RESTful APIs with authentication and
              authorization
            </li>
            <li>
              Managing relational and non-relational databases (PostgreSQL,
              MongoDB)
            </li>
            <li>
              Creating efficient data models and optimizing query performance
            </li>
            <li>Integrating payment gateways and third-party APIs</li>
            <li>
              Deploying and maintaining cloud-hosted services with CI/CD
              pipelines
            </li>
            <li>
              Debugging and resolving backend issues to ensure reliability
            </li>
          </Box>

          <Typography
            variant="body1"
            sx={{
              mt: 1,
              color: "#444",
              lineHeight: 1.8,
              fontSize: { xs: "0.95rem", md: "1rem" },
              textAlign: { xs: "justify", md: "left" },
            }}
          >
            I take pride in writing clean, modular, and well-documented backend
            code, ensuring systems remain maintainable and easy to scale as
            business needs grow.
          </Typography>
        </Stack>
      </Paper>
    </Box>
  );
}

export default Experience;
