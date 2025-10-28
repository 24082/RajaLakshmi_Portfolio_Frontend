import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Link,
  Stack,
  Paper,
  IconButton,
} from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";
import profileImg from "../data/profileImg";


function Hero({ onContactClick }) {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(false), 3000); // 3s roll effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{
        maxWidth: 1500,
        mx: "auto",
        p: { xs: 2, md: 6 },
        borderRadius: 3,
        perspective: "1200px",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 4,
          transformStyle: "preserve-3d",
          animation: animate ? "unroll 3s ease-in-out" : "none",
          "@keyframes unroll": {
            "0%": { transform: "rotateY(90deg) scaleX(0.1)" }, // tightly rolled
            "60%": { transform: "rotateY(-20deg) scaleX(0.6)" }, // partially open
            "100%": { transform: "rotateY(0deg) scaleX(1)" }, // flat page
          },
        }}
      >
        {/* Left: Profile Card */}
        <Box
          sx={{
            flex: 1,
            textAlign: "center",
            p: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={profileImg}
            alt="Profile"
            sx={{
              width: { xs: 180, md: 240 },
              height: { xs: 220, md: 350 },
              objectFit: "cover",
              borderRadius: "20px",
              boxShadow: "0 6px 15px rgba(0,0,0,0.25)",
              mb: 2,
            }}
          />
          <Typography variant="h5" fontWeight="bold" color="primary">
            Raja Lakshmi
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#555", mb: 2 }}>
            Full Stack Developer | Backend Specialist
          </Typography>
          <Stack direction="row" spacing={1.5} justifyContent="center" sx={{ mb: 2 }}>
            <IconButton href="https://github.com/24082/" target="_blank" sx={{ color: "#333" }}>
              <GitHub />
            </IconButton>
            <IconButton href="https://linkedin.com/in/Rajalakshmi24082002" target="_blank" sx={{ color: "#0077b5" }}>
              <LinkedIn />
            </IconButton>
            <IconButton href="mailto:242002lakshmi@gmail.com" sx={{ color: "#d93025" }}>
              <Email />
            </IconButton>
          </Stack>
          <Link
            href="mailto:242002lakshmi@gmail.com"
            underline="none"
            sx={{
              mt: 2,
              px: 3,
              py: 1.2,
              borderRadius: "25px",
              background: "linear-gradient(to right, #007bff, #00c6ff)",
              color: "white",
              fontWeight: "bold",
              boxShadow: 3,
              "&:hover": { transform: "translateY(-3px)", opacity: 0.9 },
            }}
          >
            Hire Me
          </Link>
        </Box>

        {/* Right: About Section */}
        <Paper
          elevation={0}
          sx={{
            flex: 2,
            p: { xs: 3, md: 5 },
            borderRadius: 3,
            background: "rgba(255, 255, 255, 0.05)",
          }}
        >
          <Typography variant="h3" sx={{ mb: 2, color: "#0f355e", fontWeight: "bold" }}>
            Turning Vision Into <span style={{ color: "#1976d2" }}>Reality</span>
          </Typography>
          <Typography
  variant="body1"
  sx={{ mb: 2, color: "#444", lineHeight: 1.8 }}
>
  Hi, I’m <strong>Raja Lakshmi</strong> — a passionate and detail-oriented{" "}
  <strong>full-stack developer</strong> with hands-on experience in{" "}
  <strong>Node.js, Express, React.js, and MongoDB</strong>.  
  I specialize in building secure, scalable, and user-friendly
  web applications that balance clean design with high performance.
  My journey in tech started with a strong interest in problem-solving
  and quickly grew into a career focused on{" "}
  <strong>backend architecture, API development, and full-cycle product delivery</strong>.
  <br /><br />
  Over time, I’ve worked on{" "}
  <strong>dynamic dashboards, booking systems, REST APIs, and modern UI/UX experiences</strong>,
  always emphasizing maintainable code and collaborative workflows.
  I’m also skilled in <strong>SQL/NoSQL databases, authentication systems,
  and cloud deployments</strong>, which enables me to deliver end-to-end solutions.
  <br /><br />
  Beyond coding, I enjoy{" "}
  <strong>mentoring peers, learning new frameworks, and contributing to open-source communities</strong>.
  I thrive in both independent projects and cross-functional teams, bringing creativity
  and efficiency to every challenge.
</Typography>

        </Paper>
      </Box>
    </Box>
  );
}

export default Hero;
