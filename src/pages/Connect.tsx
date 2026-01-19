import React, { useState } from 'react';
import { 
  Box, Container, Typography, Grid, TextField, 
  MenuItem, Button, RadioGroup, FormControlLabel, Radio, 
   Stack
} from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
  
// Custom Styles for Dark Inputs
const inputStyles = {
  '& .MuiOutlinedInput-root': {
    color: '#fff',
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: '8px',
    '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
    '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
  },
  '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.5)' },
  mb: 2
};

const ConnectSection: React.FC = () => {
  const [budget, setBudget] = useState('$350 - $800');

  return (
    <Box sx={{ 
      bgcolor: '#000', 
      py: 10, 
      position: 'relative', 
      overflow: 'hidden',
      backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(0, 150, 255, 0.15) 0%, transparent 50%)' 
    }}>
      {/* Background Aurora Effect */}
      <Box sx={{
        position: 'absolute', top: '10%', right: '-5%', width: '400px', height: '600px',
        background: 'linear-gradient(45deg, #00f2fe 0%, #4facfe 100%)',
        filter: 'blur(150px)', opacity: 0.1, zIndex: 0, transform: 'rotate(-20deg)'
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Heading */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography variant="h1" sx={{ color: '#fff', fontWeight: 600, display: 'inline-block', mr: 2 }}>
            Let's
          </Typography>
          <Typography variant="h1" sx={{ color: '#fff', fontStyle: 'italic', fontFamily: 'serif', display: 'inline-block' }}>
            Connect
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {/* Main Form Card */}
          <Grid  size={{xs:12 ,md:7}}>
            <Box sx={{ 
              bgcolor: 'rgba(255,255,255,0.02)', 
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '24px', p: { xs: 3, md: 5 }
            }}>
              <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
                <ChatBubbleOutlineIcon sx={{ color: '#fff' }} />
                <Box>
                  <Typography variant="h5" sx={{ color: '#fff', fontWeight: 'bold' }}>Start Your Project</Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.6)' }}>
                    Let us know how we can help bring <b>your idea to life.</b>
                  </Typography>
                </Box>
              </Stack>

              <Grid container spacing={2}>
                <Grid size={{xs:12 ,sm:6 }}>
                  <Typography variant="caption" sx={{ color: '#fff', mb: 1, display: 'block' }}>Name</Typography>
                  <TextField fullWidth placeholder="Name" sx={inputStyles} />
                </Grid>
                <Grid size={{xs:12 ,sm:6 }}>
                  <Typography variant="caption" sx={{ color: '#fff', mb: 1, display: 'block' }}>Email</Typography>
                  <TextField fullWidth placeholder="Email" sx={inputStyles} />
                </Grid>
                <Grid size={{xs:12 ,sm:6 }}>
                  <Typography variant="caption" sx={{ color: '#fff', mb: 1, display: 'block' }}>Country</Typography>
                  <TextField select fullWidth defaultValue="" sx={inputStyles}>
                    <MenuItem value="Pakistan">Pakistan</MenuItem>
                    <MenuItem value="USA">USA</MenuItem>
                  </TextField>
                </Grid>
                <Grid  size={{xs:12 ,sm:6 }}>
                  <Typography variant="caption" sx={{ color: '#fff', mb: 1, display: 'block' }}>Phone</Typography>
                  <TextField fullWidth placeholder="Phone number" sx={inputStyles} />
                </Grid>
              </Grid>

              {/* Budget Range */}
              <Typography variant="caption" sx={{ color: '#fff', mt: 2, mb: 2, display: 'block' }}>Budget range</Typography>
              <Grid container spacing={1}>
                {['$350 - $800', '$800 - $1,500', '$1,500 - $3,000', 'Above $3,000'].map((range) => (
                  <Grid size={{xs:6}} key={range}>
                    <Button 
                      fullWidth 
                      onClick={() => setBudget(range)}
                      sx={{ 
                        bgcolor: budget === range ? 'rgba(255,255,255,0.1)' : 'transparent',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: '#fff', borderRadius: '8px', py: 1.5, textTransform: 'none',
                        '&:hover': { bgcolor: 'rgba(255,255,255,0.05)' }
                      }}
                    >
                      {range}
                    </Button>
                  </Grid>
                ))}
              </Grid>

              <Typography variant="caption" sx={{ color: '#fff', mt: 3, mb: 1, display: 'block' }}>What do you need help with?</Typography>
              <TextField fullWidth multiline rows={4} placeholder="Tell us what you're looking to create..." sx={inputStyles} />

              <Typography variant="caption" sx={{ color: '#fff', mt: 2, display: 'block' }}>Preferred Response Method</Typography>
              <RadioGroup row sx={{ color: '#fff', mb: 4 }}>
                <FormControlLabel value="email" control={<Radio sx={{ color: '#fff' }} />} label="Email" />
                <FormControlLabel value="whatsapp" control={<Radio sx={{ color: '#fff' }} />} label="WhatsApp" />
              </RadioGroup>

              <Button fullWidth variant="contained" sx={{ 
                bgcolor: '#fff', color: '#000', borderRadius: '50px', py: 1.5, 
                fontWeight: 'bold', '&:hover': { bgcolor: '#eee' } 
              }}>
                Submit
              </Button>
            </Box>
          </Grid>

          {/* Contact Info Sidebar */}
          <Grid size={{xs:12 ,md:3 }} >
            <Box sx={{ 
              p: 3, borderRadius: '20px', bgcolor: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.1)', height: 'fit-content'
            }}>
              <Stack spacing={3}>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <EmailIcon sx={{ color: 'rgba(255,255,255,0.5)' }} />
                  <Typography sx={{ color: '#fff', fontSize: '0.9rem' }}>contact@primestacksol.com</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <WhatsAppIcon sx={{ color: 'rgba(255,255,255,0.5)' }} />
                  <Typography sx={{ color: '#fff', fontSize: '0.9rem' }}>+92 348-6805638</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <LocationOnIcon sx={{ color: 'rgba(255,255,255,0.5)' }} />
                  <Typography sx={{ color: '#fff', fontSize: '0.9rem' }}>Pakistan - Working globally</Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ConnectSection;