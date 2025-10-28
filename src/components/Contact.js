import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
  Paper,
  FormControl,
  InputLabel,
  Grid,
  Card,
  CardContent,
  IconButton,
} from '@mui/material';
import { LinkedIn, Email, Phone } from '@mui/icons-material';
import contactImg from '../assets/Contact.png';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiry: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('https://rajalakshmi-portfolio-9197.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Submission failed:', error);
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 1200,
        mx: 'auto',
        my: { xs: 4, md: 8 },
        px: { xs: 2, sm: 3, md: 6 },
        py: { xs: 3, md: 5 },
        borderRadius: 4,
        boxShadow: 6,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        animation: 'fadeIn 1.2s ease-in-out',
        '@keyframes fadeIn': {
          from: { opacity: 0, transform: 'translateY(40px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        align="center"
        sx={{
          color: '#0f355e',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: 2,
          fontSize: { xs: '1.6rem', md: '2rem' },
        }}
      >
        Get in Touch
      </Typography>

      {/* Contact Info Grid */}
      <Grid container spacing={3} justifyContent="center">
        {[
          {
            icon: <LinkedIn fontSize="large" sx={{ color: '#0077b5' }} />,
            label: 'LinkedIn',
            value: 'linkedin.com/in/Rajalakshmi24082002',
            link: 'https://linkedin.com/in/Rajalakshmi24082002',
          },
          {
            icon: <Email fontSize="large" sx={{ color: '#d44638' }} />,
            label: 'Email',
            value: '242002lakshmi@gmail.com',
            link: 'mailto:242002lakshmi@gmail.com',
          },
          {
            icon: <Phone fontSize="large" sx={{ color: '#34b7f1' }} />,
            label: 'Phone',
            value: '+91 9080890961',
            link: 'tel:+91 9080890961',
          },
        ].map((info, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card
              sx={{
                textAlign: 'center',
                borderRadius: 3,
                p: 2,
                height: { xs: 180, md: 200 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                transition: 'all 0.4s ease',
                boxShadow: 4,
                '&:hover': {
                  transform: 'translateY(-8px) scale(1.05)',
                  boxShadow: 10,
                  background: 'linear-gradient(135deg, #ac85d6ff, #79bb80ff)',
                },
              }}
            >
              <CardContent>
                <IconButton
                  onClick={() => window.open(info.link, '_blank')}
                  sx={{
                    p: 2,
                    borderRadius: '50%',
                    mb: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.2)',
                    },
                  }}
                >
                  {info.icon}
                </IconButton>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {info.label}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: '#555', wordBreak: 'break-word' }}
                >
                  {info.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Contact Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 3,
          alignItems: 'stretch',
        }}
      >
        {/* Left Info Panel */}
        <Box
          sx={{
            flex: 1,
            textAlign: 'center',
            p: { xs: 3, md: 4 },
            color: 'white',
            background: 'linear-gradient(135deg, #007bff, #0056b3)',
            borderRadius: 3,
            boxShadow: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              mb: 2,
              fontWeight: 'bold',
              fontSize: { xs: '1.6rem', md: '2rem' },
            }}
          >
            Let’s Work Together
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 3,
              lineHeight: 1.6,
              fontSize: { xs: '0.95rem', md: '1rem' },
            }}
          >
            Whether you're looking to build a web app, collaborate on a project,
            or just say hello — I'd love to hear from you.
          </Typography>
          <Box
            component="img"
            src={contactImg}
            alt="Contact"
            sx={{
              width: '100%',
              maxWidth: { xs: 180, md: 220 },
              height: 'auto',
              borderRadius: '50%',
              objectFit: 'cover',
              boxShadow: '0 0 15px rgba(255,255,255,0.7)',
              border: '6px solid white',
              mx: 'auto',
            }}
          />
        </Box>

        {/* Right Form */}
        <Paper
          elevation={6}
          sx={{
            flex: 2,
            p: { xs: 3, md: 4 },
            borderRadius: 3,
            background: 'linear-gradient(135deg, #ffffff, #f1f6fb)',
            boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
          }}
        >
          {submitted ? (
            <Box sx={{ textAlign: 'center', py: 5 }}>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                🎉 Thank you!
              </Typography>
              <Typography variant="body1">
                Your message has been sent successfully. I’ll get back to you soon.
              </Typography>
            </Box>
          ) : (
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
            >
              <TextField
                name="name"
                label="Your Name"
                variant="outlined"
                fullWidth
                onChange={handleChange}
                required
              />
              <TextField
                name="email"
                label="Your Email"
                type="email"
                variant="outlined"
                fullWidth
                onChange={handleChange}
                required
              />
              <TextField
                name="phone"
                label="Phone Number"
                type="tel"
                variant="outlined"
                fullWidth
                onChange={handleChange}
              />
              <FormControl required fullWidth>
                <InputLabel>Inquiry Type</InputLabel>
                <Select
                  name="inquiry"
                  value={formData.inquiry}
                  onChange={handleChange}
                >
                  <MenuItem value="">Select Inquiry Type</MenuItem>
                  <MenuItem value="freelance">Freelance Project</MenuItem>
                  <MenuItem value="job">Job Opportunity</MenuItem>
                  <MenuItem value="collab">Collaboration</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
              <TextField
                name="message"
                label="Your Message"
                multiline
                rows={5}
                variant="outlined"
                fullWidth
                onChange={handleChange}
                required
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  background: 'linear-gradient(135deg, #007bff, #0056b3)',
                  color: '#fff',
                  fontWeight: 'bold',
                  py: 1.5,
                  borderRadius: 2,
                  '&:hover': {
                    background: 'linear-gradient(135deg, #0056b3, #004080)',
                  },
                }}
              >
                Send Message
              </Button>
            </Box>
          )}
        </Paper>
      </Box>
    </Box>
  );
}

export default Contact;
