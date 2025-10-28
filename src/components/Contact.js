import React, { useState } from "react";
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
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { LinkedIn, Email, Phone } from "@mui/icons-material";
import contactImg from "../assets/Contact.png";

function Contact() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiry: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://rajalakshmi-portfolio-9197.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Submission failed:", error);
    }
  };

  // Contact info + unique hover colors
  const contactInfo = [
    {
      icon: <LinkedIn sx={{ color: "#0077b5", fontSize: "inherit" }} />,
      label: "LinkedIn",
      value: "linkedin.com/in/Rajalakshmi24082002",
      link: "https://linkedin.com/in/Rajalakshmi24082002",
      hoverColor: "linear-gradient(135deg, #e3f2fd, #bbdefb)",
    },
    {
      icon: <Email sx={{ color: "#d44638", fontSize: "inherit" }} />,
      label: "Email",
      value: "242002lakshmi@gmail.com",
      link: "mailto:242002lakshmi@gmail.com",
      hoverColor: "linear-gradient(135deg, #ffe9e7, #ffd1cc)",
    },
    {
      icon: <Phone sx={{ color: "#34b7f1", fontSize: "inherit" }} />,
      label: "Phone",
      value: "+91 9080890961",
      link: "tel:+919080890961",
      hoverColor: "linear-gradient(135deg, #e0f7fa, #b2ebf2)",
    },
  ];

  return (
    <Container
      maxWidth="lg"
      sx={{
        px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 3, sm: 4, md: 6 },
        minHeight: "100vh",
      }}
    >
      {/* Title */}
      <Typography
        variant="h3"
        align="center"
        sx={{
          color: "#0f355e",
          fontWeight: "bold",
          mb: { xs: 4, md: 6 },
          fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.75rem" },
          textTransform: "uppercase",
          letterSpacing: { xs: 1, md: 2 },
        }}
      >
        Get in Touch
      </Typography>

      {/* Contact Info Cards */}
      <Grid
        container
        spacing={2}
        sx={{
          mb: { xs: 4, md: 6 },
          justifyContent: "center",
        }}
      >
        {contactInfo.map((info, index) => (
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            key={index}
            sx={{
              display: "flex",
              minHeight: { xs: "90px", sm: "110px" },
            }}
          >
            <Card
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                borderRadius: 2,
                p: { xs: 1.5, sm: 2 },
                boxShadow: 3,
                background: "#fff",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 6,
                  background: info.hoverColor,
                },
              }}
            >
              <CardContent
                sx={{
                  p: { xs: 1, sm: 2 },
                  "&:last-child": { pb: { xs: 1, sm: 2 } },
                  width: "100%",
                }}
              >
                <IconButton
                  onClick={() => window.open(info.link, "_blank")}
                  sx={{
                    p: 1,
                    mb: 1,
                    fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
                    "&:hover": { backgroundColor: "rgba(0,0,0,0.05)" },
                  }}
                >
                  {info.icon}
                </IconButton>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
                    mb: 0.5,
                  }}
                >
                  {info.label}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#555",
                    fontSize: { xs: "0.8rem", sm: "0.9rem" },
                    wordBreak: "break-word",
                  }}
                >
                  {info.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Contact Form Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 3, md: 4 },
          alignItems: "stretch",
        }}
      >
        {/* Left Info Panel */}
        <Box
          sx={{
            flex: { md: 1 },
            p: { xs: 3, sm: 4 },
            color: "white",
            background: "linear-gradient(135deg, #007bff, #0056b3)",
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            boxShadow: 3,
          }}
        >
          <Box sx={{ maxWidth: "400px" }}>
            <Typography
              variant="h4"
              sx={{
                mb: 2,
                fontWeight: "bold",
                fontSize: { xs: "1.4rem", sm: "1.7rem", md: "2rem" },
              }}
            >
              Let's Work Together
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                lineHeight: 1.6,
                fontSize: { xs: "0.9rem", sm: "1rem" },
                opacity: 0.9,
              }}
            >
              Whether you're looking to build a web app, collaborate, or just
              say hello — I'd love to hear from you.
            </Typography>
            <Box
              component="img"
              src={contactImg}
              alt="Contact"
              sx={{
                width: { xs: "120px", sm: "160px", md: "180px" },
                height: "auto",
                borderRadius: "50%",
                border: "3px solid white",
                boxShadow: "0 0 20px rgba(255,255,255,0.4)",
              }}
            />
          </Box>
        </Box>

        {/* Right Form */}
        <Paper
          elevation={4}
          sx={{
            flex: { md: 1.5 },
            p: { xs: 3, sm: 4 },
            borderRadius: 2,
            background: "linear-gradient(135deg, #ffffff, #f4f8ff)",
          }}
        >
          {submitted ? (
            <Box
              sx={{
                textAlign: "center",
                py: { xs: 4, sm: 6 },
                px: { xs: 2, sm: 3 },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  mb: 2,
                  fontWeight: "bold",
                  fontSize: { xs: "1.5rem", sm: "1.8rem" },
                  color: "#0f355e",
                }}
              >
                🎉 Thank You!
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  color: "#555",
                  maxWidth: "400px",
                  lineHeight: 1.6,
                }}
              >
                Your message has been sent successfully. I’ll get back to you
                soon.
              </Typography>
            </Box>
          ) : (
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2.5,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  mb: 1,
                  fontWeight: "bold",
                  color: "#0f355e",
                  fontSize: { xs: "1.25rem", sm: "1.5rem" },
                }}
              >
                Send me a message
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="name"
                    label="Your Name"
                    fullWidth
                    required
                    onChange={handleChange}
                    size={isSmallMobile ? "small" : "medium"}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="email"
                    label="Your Email"
                    type="email"
                    fullWidth
                    required
                    onChange={handleChange}
                    size={isSmallMobile ? "small" : "medium"}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="phone"
                    label="Phone Number"
                    type="tel"
                    fullWidth
                    onChange={handleChange}
                    size={isSmallMobile ? "small" : "medium"}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl
                    fullWidth
                    required
                    variant="outlined"
                    size={isSmallMobile ? "small" : "medium"}
                  >
                    <InputLabel shrink>Inquiry Type</InputLabel>
                    <Select
                      name="inquiry"
                      value={formData.inquiry}
                      onChange={handleChange}
                      label="Inquiry Type"
                      displayEmpty
                      sx={{
                        fontSize: isSmallMobile ? "0.9rem" : "1rem",
                        borderRadius: "8px",
                        "& .MuiSelect-select": {
                          display: "flex",
                          alignItems: "center",
                          py: isSmallMobile ? "8px" : "14px",
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#ccc",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#007bff",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#0056b3",
                          borderWidth: 2,
                        },
                      }}
                      MenuProps={{
                        PaperProps: {
                          sx: {
                            borderRadius: 2,
                            mt: 1,
                            "& .MuiMenuItem-root": {
                              fontSize: isSmallMobile ? "0.9rem" : "1rem",
                              py: 1,
                            },
                          },
                        },
                      }}
                    >
                      <MenuItem value="" disabled>
                        <em>Select Inquiry Type</em>
                      </MenuItem>
                      <MenuItem value="freelance">Freelance Project</MenuItem>
                      <MenuItem value="job">Job Opportunity</MenuItem>
                      <MenuItem value="collab">Collaboration</MenuItem>
                      <MenuItem value="other">Other</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>

              <TextField
                name="message"
                label="Your Message"
                multiline
                rows={isMobile ? 4 : 5}
                fullWidth
                required
                onChange={handleChange}
                size={isSmallMobile ? "small" : "medium"}
              />

              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  mt: 1,
                  py: { xs: 1.4, sm: 1.6 },
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  fontWeight: "bold",
                  borderRadius: 2,
                  background: "linear-gradient(135deg, #007bff, #0056b3)",
                  "&:hover": {
                    background: "linear-gradient(135deg, #0056b3, #003d80)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Send Message
              </Button>
            </Box>
          )}
        </Paper>
      </Box>
    </Container>
  );
}

export default Contact;
