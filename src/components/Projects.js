import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Divider,
  Stack,
  Grid,
} from '@mui/material';
import { Code, Speed, Devices } from '@mui/icons-material';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiMui, SiReactrouter, SiPostman, SiAmazon } from 'react-icons/si';
import backgroundImg from '../assets/background.png';

function Projects() {
  const techStack = [
    { name: "React.js", icon: <FaReact color="#61DBFB" size={40} /> },
    { name: "Node.js", icon: <FaNodeJs color="#68A063" size={40} /> },
    { name: "Express.js", icon: <SiExpress color="#000000" size={40} /> },
    { name: "MongoDB", icon: <SiMongodb color="#4DB33D" size={40} /> },
    { name: "React Router", icon: <SiReactrouter color="#CA4245" size={40} /> },
    { name: "Material-UI", icon: <SiMui color="#007FFF" size={40} /> },
    { name: "REST APIs", icon: <SiPostman color="#FF6C37" size={40} /> },
    { name: "Cloud Deployment", icon: <SiAmazon color="#FF9900" size={40} /> },
  ];

  return (
    <Box
      sx={{
        maxWidth: 1200,
        mx: 'auto',
        my: 8,
        p: 4,
        borderRadius: 3,
        boxShadow: 6,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        align="center"
        sx={{
          color: '#0f355e',
          fontWeight: 'bold',
          mb: 6,
        }}
      >
        My Projects
      </Typography>

      {/* Project Card */}
      <Paper
        elevation={6}
        sx={{
          p: 5,
          borderRadius: 3,
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: 'transparent',
          boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
          transition: 'transform 0.4s ease, box-shadow 0.4s ease',
          '&:hover': {
            transform: 'translateY(-8px) scale(1.02)',
            boxShadow: '0 12px 30px rgba(0,0,0,0.2)',
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: -2,
            left: -2,
            right: -2,
            bottom: -2,
            borderRadius: 3,
            zIndex: -1,
            animation: 'glow 3s linear infinite',
          },
          '@keyframes glow': {
            '0%': { filter: 'blur(4px)' },
            '50%': { filter: 'blur(8px)' },
            '100%': { filter: 'blur(4px)' },
          },
        }}
      >
        {/* Project Title */}
        <Typography
          variant="h5"
          sx={{
            mb: 2,
            fontWeight: 700,
            color: '#3376e3ff',
            textTransform: 'capitalize',
          }}
        >
          Personal Portfolio Website
        </Typography>

        <Divider sx={{ mb: 3, borderColor: '#1b89f7ff' }} />

        {/* Description */}
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            color: '#333',
            lineHeight: 1.9,
            textAlign: 'justify',
          }}
        >
          This is my <strong>first full-stack project</strong> that represents my
          journey as a developer. It showcases my skills, projects, and technical
          expertise through a clean <em>React.js interface</em>, smooth navigation,
          and a <strong>fully functional contact form</strong> integrated with a
          backend server.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 3,
            color: '#333',
            lineHeight: 1.9,
            textAlign: 'justify',
          }}
        >
          The backend uses <strong>Node.js</strong> and <strong>Express</strong>,
          with data stored in <strong>MongoDB</strong>. It’s deployed on a cloud
          platform with <em>CI/CD pipelines</em>, ensuring speed, security, and
          scalability.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 3,
            color: '#333',
            lineHeight: 1.9,
            textAlign: 'justify',
          }}
        >
          This project reflects my ability to build <strong>user-centric</strong>{' '}
          solutions that are both practical and visually engaging. It’s the
          cornerstone of my full-stack journey.
        </Typography>

        {/* Highlights Grid */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <Grid container spacing={3} justifyContent="center" maxWidth="md">
            {[
              {
                icon: <Code sx={{ fontSize: 40, color: '#13afbaff' }} />,
                title: 'Clean Codebase',
                desc: 'Modular structure with reusable components and RESTful APIs.',
                hoverColor: '#82edf1ff',
              },
              {
                icon: <Speed sx={{ fontSize: 40, color: '#388e3c' }} />,
                title: 'Optimized Performance',
                desc: 'Lazy loading, caching, and responsive design for all devices.',
                hoverColor: '#d0f0e0',
              },
              {
                icon: <Devices sx={{ fontSize: 40, color: '#f57c00' }} />,
                title: 'Cross-Platform',
                desc: 'Works seamlessly on desktop, tablet, and mobile.',
                hoverColor: '#ffe0b2',
              },
            ].map((item, i) => (
              <Grid item xs={12} sm={4} key={i}>
                <Box
                  onClick={() => console.log(`${item.title} clicked`)}
                  sx={{
                    textAlign: 'center',
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: '#f5f5f5',
                    boxShadow: 2,
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: item.hoverColor,
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  {item.icon}
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#555', mt: 1 }}>
                    {item.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Tech Stack */}
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 600, color: '#0f355e', mb: 2, textAlign: 'center' }}
        >
          Tech Stack Used
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 3, mt: 2 }}>
          {techStack.map((tech, index) => (
            <Stack
              key={index}
              direction="column"
              spacing={1}
              alignItems="center"
              sx={{
                p: 1.5,
                borderRadius: 2,
                transition: "transform 0.3s, box-shadow 0.3s",
                cursor: "pointer",
                '&:hover': { transform: "scale(1.2)", boxShadow: "0 4px 20px rgba(0,0,0,0.2)" },
              }}
            >
              {tech.icon}
              <Typography variant="subtitle2" sx={{ fontWeight: 500, mt: 0.5 }}>
                {tech.name}
              </Typography>
            </Stack>
          ))}
        </Box>

        {/* Closing Quote */}
        <Typography
          variant="body2"
          sx={{
            mt: 4,
            fontStyle: 'italic',
            textAlign: 'center',
            color: '#666',
          }}
        >
          “Every line of code in this portfolio is a step forward in my journey —
          from curiosity to capability.”
        </Typography>
      </Paper>
    </Box>
  );
}

export default Projects;
