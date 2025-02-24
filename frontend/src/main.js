import React from "react";
import { Container, Grid, Paper, Typography, TextField, Button, MenuItem, Card, CardContent, CardMedia } from "@mui/material";
import image1 from "./assests/image1.webp"; // Make sure to place an actual image in the correct path
import image2 from "./assests/image2.avif";
import kidneyImage from "./assests/kidneyImage.webp";
import heartImage from "./assests/heartImage.jpg";
import cancerImage from "./assests/cancerImage.avif";
import liverImage from "./assests/liverImage.webp";
import accidentImage from "./assests/accidentImage.jpg";
import nicuCare from "./assests/nicuCare.jpg";
const HomePage = () => {

    const medicalTreatments = [
        { title: "Kidney Transplant", image: kidneyImage },
        { title: "Heart Surgery", image: heartImage },
        { title: "Cancer Treatment", image: cancerImage},
        { title: "Liver Transplant", image: liverImage },
        { title: "Accident Recovery", image: accidentImage },
        { title: "NICU Care for Children", image: nicuCare },

      ];
  return (
    <>
      {/* Full-width background section */}
      <div style={{ backgroundColor: "rgba(0, 128, 0, 0.2)" , width: "100vw", padding: "40px 0" }}>
        <Container maxWidth="lg">
            <Grid container spacing={3}>
              {/* Left Side: Form */}
              <Grid item xs={12} md={6} marginTop={"80px"}>
                <Typography variant="h4" gutterBottom textAlign={"start"}>
                  Start a FREE Medical Fundraiser & Raise Funds for Medical Treatments
                </Typography>
                <Typography variant="h6" color="textSecondary" gutterBottom>
                  Now with 0% platform fees*
                </Typography>
                <Paper elevation={2} style={{ padding: "15px", backgroundColor: "#bbdefb" }}>
                  <Typography variant="body1">
                    <strong>Dhiraj (Aarohi’s father)</strong> raised ₹ 25,00,000 for Aarohi’s Cancer Treatment in Just 20 days.
                  </Typography>
                </Paper>
              </Grid>
              
                        <Grid item xs={12} md={6}>
            <Paper elevation={3} style={{ padding: "20px", backgroundColor: "white" }}>
                <Typography variant="h5" gutterBottom>
                Need Money Urgently?
                </Typography>
                <TextField fullWidth label="Name" margin="normal" required />
                <TextField fullWidth label="Email Address" margin="normal" required type="email" />
                <TextField fullWidth label="Your Mobile Number" margin="normal" required type="tel" />
                <TextField select fullWidth label="What will the funds be used for?" margin="normal" required>
                <MenuItem value="Medical">Medical</MenuItem>
                <MenuItem value="Education">Education</MenuItem>
                <MenuItem value="Non-Profit">Non-Profit</MenuItem>
                </TextField>
                <TextField select fullWidth label="Hospitalisation Status" margin="normal" required>
                <MenuItem value="Admitted">Admitted</MenuItem>
                <MenuItem value="Not Admitted">Not Admitted</MenuItem>
                </TextField>
                <Button variant="contained" color="primary" fullWidth style={{ marginTop: "20px" }}>
                Start a Fundraiser
                </Button>
            </Paper>
            </Grid>

            
            </Grid>
        </Container>
      </div>

            {/* Additional Section */}
            <div style={{ backgroundColor: "white", width: "100vw", padding: "40px 0" }}>
        <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom textAlign={"center" }>
              Medical Fundraising & Crowdfunding
            </Typography>
            <Typography variant="body1" gutterBottom color="grey" marginTop={"20px"}>
              Online medical crowdfunding is an alternative method for individuals and organisations to generate funds required for costly medical treatments like open-heart surgeries, NICU care, bone marrow transplants, cancer treatments, and other serious medical needs.
            </Typography>
        <Grid container spacing={3}>
          {/* Left Side: Image */}
          <Grid item xs={12} md={6} marginTop={"20px"}>
            <img src={image1} alt="Medical Help" style={{ width: "80%", borderRadius: "10px" }} />
          </Grid>
          {/* Right Side: Text */}
          <Grid item xs={12} md={6} marginTop={"20px"}>
           
           
            <Typography variant="h5" marginTop={"60px"}gutterBottom >
              Medical Bills are a Burden for Many Individuals and Families
            </Typography>
            <Typography variant="body1" color="grey">
              Expenses related to hospital stays, high-cost chemotherapy routines, and essential medications can be overwhelming. Even with insurance, many medical policies do not cover all necessary expenses. Through medical crowdfunding, individuals can seek financial support from a compassionate community to ease the burden of treatment costs.
            </Typography>
          </Grid>
              {/* Right Side: Text */}
              <Grid item xs={12} md={6} marginTop={"20px"}>
           
           
           <Typography variant="h5" marginTop={"90px"}gutterBottom>
            
                       Try Medical Crowdfunding
           </Typography>
           <Typography variant="body1" color="grey">
           Stop worrying about rising medical bills, or debts and start a medical fundraising campaign with Ketto. Ketto is a Crowdfunding Platform based out of India. Crowdfunding is the easiest way to avail support from friends, family and numerous individuals who are waiting to donate funds.
           </Typography>
         </Grid>
          <Grid item xs={12} md={6} marginTop={"20px"}>
            <img src={image2} alt="Medical Help" style={{ width: "80%", borderRadius: "10px" }} />
          </Grid>
      
        </Grid>
      </Container>
      </div>

      <div style={{ backgroundColor: "rgba(255, 218, 185, 0.5)" , width: "100vw", padding: "40px 0"} }>
      <Container maxWidth="lg" style={{ marginTop: "20px" }}>
      
      {/* What Medical Treatments Can You Raise Funds For? */}
      <Typography variant="h4" gutterBottom style={{ marginTop: "40px", textAlign: "center" }}>
        What Medical Treatments Can You Raise Funds For?
      </Typography>
      
      <Grid container spacing={3} justifyContent="center">
        {medicalTreatments.map((treatment, index) => (
          <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
            <Card style={{ textAlign: "center", padding: "10px" }}>
              <CardMedia component="img" height="140" image={treatment.image} alt={treatment.title} />
              <CardContent>
                <Typography variant="h6">{treatment.title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

    </Container>
    </div>

    </>
  );
};

export default HomePage;
