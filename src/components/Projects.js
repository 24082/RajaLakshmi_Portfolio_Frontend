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
import {
  SiExpress,
  SiMongodb,
  SiMui,
  SiReactrouter,
  SiPostman,
  SiAmazon,
} from 'react-icons/si';

function Projects() {
  const techStack = [
    { name: 'React.js', icon: <FaReact color="#61DBFB" size={35} /> },
    { name: 'Node.js', icon: <FaNodeJs color="#68A063" size={35} /> },
    { name: 'Express.js', icon: <SiExpress color="#000000" size={35} /> },
    { name: 'MongoDB', icon: <SiMongodb color="#4DB33D" size={35} /> },
    { name: 'React Router', icon: <SiReactrouter color="#CA4245" size={35} /> },
    { name: 'Material-UI', icon: <SiMui color="#007FFF" size={35} /> },
    { name: 'REST APIs', icon: <SiPostman color="#FF6C37" size={35} /> },
    { name: 'Cloud Deployment', icon: <SiAmazon color="#FF9900" size={35} /> },
  ];

  return (
    <Box
      sx={{
        maxWidth: 1200,
        mx: 'auto',
        my: { xs: 4, md: 8 },
        p: { xs: 2, sm: 3, md: 5 },
        borderRadius: 3,
        boxShadow: 6,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
      }}
      id="projects"
    >
      {/* Title */}
      <Typography
        variant="h4"
        align="center"
        sx={{
          color: '#0f355e',
          fontWeight: 'bold',
          mb: { xs: 3, md: 6 },
          fontSize: { xs: '1.8rem', sm: '2rem', md: '2.3rem' },
        }}
      >
        My Projects
      </Typography>

      {/* Project Card */}
      <Paper
        elevation={4}
        sx={{
          p: { xs: 3, sm: 4, md: 5 },
          borderRadius: 3,
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: 'transparent',
          boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
          transition: 'transform 0.4s ease, box-shadow 0.4s ease',
          '&:hover': {
            transform: { md: 'translateY(-8px) scale(1.02)' },
            boxShadow: '0 12px 30px rgba(0,0,0,0.2)',
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
            fontSize: { xs: '1.3rem', md: '1.6rem' },
          }}
        >
          Personal Portfolio Website
        </Typography>

        <Divider sx={{ mb: 3, borderColor: '#1b89f7ff' }} />

        {/* Description */}
        <Typography
          variant="body1"
          sx={{
            mb: 2,
            color: '#333',
            lineHeight: 1.8,
            textAlign: 'justify',
            fontSize: { xs: '0.95rem', md: '1rem' },
          }}
        >
          This is my <strong>first full-stack project</strong> that represents my
          journey as a developer. It showcases my skills, projects, and technical
          expertise through a clean <em>React.js interface</em> and a{' '}
          <strong>fully functional contact form</strong> integrated with a backend server.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 2,
            color: '#333',
            lineHeight: 1.8,
            textAlign: 'justify',
            fontSize: { xs: '0.95rem', md: '1rem' },
          }}
        >
          The backend uses <strong>Node.js</strong> and <strong>Express</strong>,
          with data stored in <strong>MongoDB</strong>. It’s deployed on a cloud
          platform with <em>CI/CD pipelines</em>, ensuring speed, security, and scalability.
        </Typography>

        {/* Highlights Grid */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: { xs: 3, md: 4 } }}>
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
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Box
                  sx={{
                    textAlign: 'center',
                    p: { xs: 2, sm: 3 },
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
                  <Typography
                    variant="body2"
                    sx={{ color: '#555', mt: 1, fontSize: { xs: '0.9rem' } }}
                  >
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
          sx={{
            fontWeight: 600,
            color: '#0f355e',
            mb: 2,
            textAlign: 'center',
            fontSize: { xs: '1rem', md: '1.2rem' },
          }}
        >
          Tech Stack Used
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: { xs: 2, sm: 3 },
            mt: 2,
          }}
        >
          {techStack.map((tech, index) => (
            <Stack
              key={index}
              direction="column"
              spacing={1}
              alignItems="center"
              sx={{
                p: 1.5,
                borderRadius: 2,
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.15)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                },
              }}
            >
              {tech.icon}
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 500,
                  mt: 0.5,
                  fontSize: { xs: '0.8rem', sm: '0.9rem' },
                }}
              >
                {tech.name}
              </Typography>
            </Stack>
          ))}
        </Box>

        {/* Closing Quote */}
        <Typography
          variant="body2"
          sx={{
            mt: { xs: 3, md: 4 },
            fontStyle: 'italic',
            textAlign: 'center',
            color: '#666',
            fontSize: { xs: '0.85rem', sm: '0.95rem' },
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
