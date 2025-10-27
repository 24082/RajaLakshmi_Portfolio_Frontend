import React from "react";
import {
  Box,
  Typography,
  Paper,
  Stack,
  Chip,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
  return (
    <Box
      sx={{
        maxWidth: 1200,
        mx: "auto",
        p: { xs: 2, md: 6 },
        borderRadius: 3,
        animation: "fadeIn 1s ease-in",
        "@keyframes fadeIn": {
          from: { opacity: 0, transform: "translateY(20px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      }}
      id="experience"
    >
      <Typography
        variant="h4"
        sx={{
          mb: 3,
          color: "#0f355e",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        My <span style={{ color: "#0f355e" }}>Experience</span>
      </Typography>

      <Paper
        elevation={3}
        sx={{
          p: { xs: 3, md: 5 },
          borderRadius: 3,
          background: "rgba(255, 255, 255, 0.07)",
        }}
      >
        <Stack spacing={2}>
          <Typography variant="h5" fontWeight="bold" color="primary">
            Backend Developer
          </Typography>
          <Typography variant="subtitle2" sx={{ color: "#666" }}>
            Feb 2025 – Present · 6 months
          </Typography>

        <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", mb: 2 }}>
  <Chip
    icon={<WorkIcon />}
    label="Node.js"
    sx={{ backgroundColor: "#68A063", color: "#fff", fontWeight: "bold" }}
  />
  <Chip
    icon={<WorkIcon />}
    label="Express.js"
    sx={{ backgroundColor: "#68A063", color: "#fff", fontWeight: "bold" }}
  />
  <Chip
    icon={<WorkIcon />}
    label="MongoDB"
    sx={{ backgroundColor: "#68A063", color: "#fff", fontWeight: "bold" }}
  />
  <Chip
    icon={<WorkIcon />}
    label="PostgreSQL"
    sx={{ backgroundColor: "#68A063", color: "#fff", fontWeight: "bold" }}
  />
  <Chip
    icon={<WorkIcon />}
    label="Sequelize"
    sx={{ backgroundColor: "#68A063", color: "#fff", fontWeight: "bold" }}
  />
</Stack>


          <Typography variant="body1" sx={{ color: "#444", lineHeight: 1.8 }}>
            Over the past 6 months, I've focused on building and optimizing backend
            systems to power scalable applications. My work has centered on:
          </Typography>

          <ul style={{ paddingLeft: "1.2rem", color: "#444", lineHeight: "1.8" }}>
            <li>Designing and implementing RESTful APIs with authentication and authorization</li>
            <li>Managing relational and non-relational databases (PostgreSQL, MongoDB)</li>
            <li>Creating efficient data models and optimizing query performance</li>
            <li>Integrating payment gateways and third-party APIs</li>
            <li>Deploying and maintaining cloud-hosted services with CI/CD pipelines</li>
            <li>Debugging and resolving backend issues to ensure reliability</li>
          </ul>

          <Typography variant="body1" sx={{ mt: 2, color: "#444", lineHeight: 1.8 }}>
            I take pride in writing clean, modular, and well-documented backend code,
            ensuring systems remain maintainable and easy to scale as business needs grow.
          </Typography>
        </Stack>
      </Paper>
    </Box>
  );
}

export default Experience;
