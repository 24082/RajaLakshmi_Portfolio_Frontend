import React from 'react';
import { Box, Typography, Avatar, Divider, Stack, Grid, Paper } from '@mui/material';
import profileImg from "../data/profileImg";


// Import icons
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiMongodb, SiPostgresql, SiExpress, SiJavascript, SiAmazon } from 'react-icons/si';

function About() {
  const coreSkills = [
    { name: 'JavaScript (ES6+)', icon: <SiJavascript color="#F7DF1E" size={30} /> },
    { name: 'React.js', icon: <FaReact color="#61DBFB" size={30} /> },
    { name: 'Node.js', icon: <FaNodeJs color="#68A063" size={30} /> },
    { name: 'Express.js', icon: <SiExpress color="#000000" size={30} /> },
    { name: 'MongoDB', icon: <SiMongodb color="#4DB33D" size={30} /> },
    { name: 'PostgreSQL', icon: <SiPostgresql color="#336791" size={30} /> },
    { name: 'REST APIs', icon: <FaDatabase color="#6c63ff" size={30} /> },
    { name: 'Authentication & Security', icon: <FaDatabase color="#FF6B6B" size={30} /> },
    { name: 'Cloud Deployment', icon: <SiAmazon color="#FF9900" size={30} /> },
    { name: 'Git & Version Control', icon: <FaGitAlt color="#F05032" size={30} /> },
  ];

  const services = [
    {
      title: 'Backend Development',
      desc: 'Secure, scalable, and high-performance server-side applications.',
    },
    {
      title: 'Frontend Development',
      desc: 'Modern, responsive, and engaging interfaces with React.js.',
    },
    {
      title: 'Database Management',
      desc: 'Schema design, query optimization, and efficient data handling.',
    },
    {
      title: 'Cloud & Deployment',
      desc: 'Deploying applications with Docker, CI/CD, and cloud platforms.',
    },
  ];

  return (
    <Box
      sx={{
        maxWidth: 1200,
        mx: 'auto',
        my: 8,
        p: 4,
        borderRadius: 4,
        textAlign: 'center',
        boxShadow: 4
      }}
    >
      {/* Profile Image */}
      <Avatar
        src={profileImg}
        alt="Raja Lakshmi"
        sx={{
          width: 160,
          height: 160,
          mx: 'auto',
          mb: 2,
          border: '5px solid white',
          boxShadow: 6,
        }}
      />

      {/* Name and Title */}
      <Typography variant="h5" sx={{ fontWeight: 700, color: '#0f355e' }}>
        Raja Lakshmi
      </Typography>
      <Typography variant="subtitle1" sx={{ color: '#1976d2', mb: 4 }}>
        Full Stack Developer
      </Typography>

      {/* About Title */}
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 600, color: '#0f355e' }}>
        About Me
      </Typography>
      <Divider sx={{ mb: 4, borderColor: '#1976d2' }} />

      {/* Bio */}
      <Typography variant="body1" sx={{ mb: 3, color: '#333', lineHeight: 1.8 }}>
        I’m <strong>Raja Lakshmi</strong>, a <strong>Full Stack Developer</strong> specializing in 
        <strong> React.js, Node.js, Express, MongoDB, and PostgreSQL</strong>. I build applications 
        that are <em>scalable, secure, and user-focused</em>.
      </Typography>

      <Typography variant="body1" sx={{ mb: 3, color: '#333', lineHeight: 1.8 }}>
        My passion is transforming ideas into powerful digital solutions. I enjoy solving complex 
        challenges, collaborating with teams, and exploring modern technologies.
      </Typography>

      <Typography variant="body1" sx={{ mb: 6, color: '#333', lineHeight: 1.8 }}>
        Outside of coding, I love <strong>design, nature, and creativity</strong>. I believe technology 
        shines brightest when blended with empathy and innovation.
      </Typography>

      {/* Service Cards */}
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={4}
              sx={{
                p: 3,
                borderRadius: 3,
                textAlign: 'center',
                height: '100%',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease, background 0.5s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 10,
                  background: 'linear-gradient(135deg, #1976d2, #ff5722)',
                  color: 'white',
                },
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                {service.title}
              </Typography>
              <Typography variant="body2">{service.desc}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Core Skills */}
      <Typography 
        variant="h5" 
        sx={{ mt: 8, mb: 3, fontWeight: 700, color: '#0f355e', letterSpacing: 1 }}
      >
        Core Skills
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 3,
          mt: 2,
        }}
      >
        {coreSkills.map((skill, index) => (
          <Stack
            key={index}
            direction="column"
            spacing={1}
            alignItems="center"
            sx={{
              p: 2,
              borderRadius: 2,
              transition: 'transform 0.3s, box-shadow 0.3s',
              cursor: 'pointer',
              '&:hover': { transform: 'scale(1.2)', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' },
              backgroundColor: '#f0f0f0',
            }}
          >
            {skill.icon}
            <Typography variant="subtitle2" sx={{ fontWeight: 500, mt: 0.5 }}>
              {skill.name}
            </Typography>
          </Stack>
        ))}
      </Box>
    </Box>
  );
}

export default About;
