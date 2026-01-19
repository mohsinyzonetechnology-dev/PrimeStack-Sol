import { Box, Container, Grid, Typography, Link, Stack, useTheme } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const footerLinks = {
  company: [
    { name: 'About', link: '#' },
    { name: 'Approach', link: '#' },
    { name: 'Work', link: '#' },
    { name: 'Privacy Policy', link: '#' },
  ],
  services: [
    { name: 'Crafted Websites', link: '#' },
    { name: 'Website Redesign', link: '#' },
    { name: 'eCommerce Design', link: '#' },
    { name: 'CMS & Dynamic Sites', link: '#' },
  ],
  resources: [
    { name: 'Blog', link: '#' },
    { name: 'Templates', link: '#' },
    { name: 'Process', link: '#' },
    { name: 'FAQs', link: '#' },
  ],
  contact: [
    { name: 'Email: contact@primestacksol.com', link: 'mailto:contact@primestacksol.com' },
    { name: 'Phone: +92 348-6805638', link: 'tel:+92 348-6805638' },
    { name: 'WhatsApp', link: '#' },
    { name: 'Global Operations', link: null },
  ]
};

const socialLinks = [
  { name: 'Instagram', icon: <InstagramIcon fontSize="small" />, link: '#' },
  { name: 'Facebook', icon: <FacebookIcon fontSize="small" />, link: '#' },
  { name: 'Twitter', icon: <TwitterIcon fontSize="small" />, link: '#' },
  { name: 'LinkedIn', icon: <LinkedInIcon fontSize="small" />, link: '#' },
];

const Footer = () => {
  const theme = useTheme();

  return (
    <Box sx={{ 
      bgcolor: 'background.default', 
      color: 'text.primary', 
      pt: 10, 
      pb: 4, 
      borderTop: `1px solid ${theme.palette.primary.main}15` 
    }}>
      <Container maxWidth="lg">
        
        {/* Brand/Social Grid Section */}
        <Grid container sx={{ 
          border: `1px solid ${theme.palette.primary.main}22`, 
          borderRadius: '24px',
          overflow: 'hidden',
          mb: 8,
          bgcolor: 'background.paper'
        }}>
          {socialLinks.map((social, index) => (
            <Grid size={{xs:6 ,sm:3}} key={social.name} sx={{ 
              borderRight: { 
                xs: index % 2 === 0 ? `1px solid ${theme.palette.primary.main}15` : 'none', 
                sm: index !== socialLinks.length - 1 ? `1px solid ${theme.palette.primary.main}15` : 'none' 
              },
              borderBottom: { xs: index < 2 ? `1px solid ${theme.palette.primary.main}15` : 'none', sm: 'none' },
              transition: '0.4s',
              '&:hover': { bgcolor: `${theme.palette.primary.main}08` }
            }}>
              <Link 
                href={social.link} 
                underline="none" 
                sx={{ 
                  color: 'text.secondary', 
                  p: 3,
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  '&:hover': { color: 'primary.main' }
                }}
              >
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Box sx={{ display: 'flex', color: 'primary.main' }}>{social.icon}</Box>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>{social.name}</Typography>
                </Stack>
                <ArrowOutwardIcon sx={{ fontSize: 16, opacity: 0.5 }} />
              </Link>
            </Grid>
          ))}
        </Grid>

        {/* Links Navigation Grid */}
        <Grid container spacing={5} sx={{ mb: 8, px: { xs: 2, md: 0 } }}>
          {Object.entries(footerLinks).map(([category, links]) => (
            <Grid size={{xs:6 ,sm:3}} key={category}>
              <Typography variant="subtitle1" sx={{ 
                color: 'primary.main', 
                mb: 3, 
                textTransform: 'uppercase', 
                fontWeight: 800, 
                letterSpacing: 1.5,
                fontSize: '0.75rem' 
              }}>
                {category}
              </Typography>
              <Stack spacing={2}>
                {links.map((link) => (
                  link.link ? (
                    <Link 
                      key={link.name} 
                      href={link.link} 
                      underline="none" 
                      sx={{ 
                        color: 'text.secondary', 
                        fontSize: '0.95rem',
                        width: 'fit-content',
                        transition: '0.3s',
                        '&:hover': { color: 'text.primary', transform: 'translateX(5px)' } 
                      }}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <Typography key={link.name} sx={{ color: 'text.disabled', fontSize: '0.95rem' }}>
                      {link.name}
                    </Typography>
                  )
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>

        {/* Bottom Branding & Copyright */}
        <Box sx={{ 
          pt: 4, 
          borderTop: `1px solid ${theme.palette.primary.main}10`,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2
        }}>
          {/* <Typography variant="h6" sx={{ fontWeight: 900, letterSpacing: -0.5 }}>
            PRIME<Box component="span" sx={{ color: 'primary.main' }}>STACK</Box>
          </Typography> */}
          

          <Box 
              // component={Link} 
              // to="/" 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                textDecoration: 'none', 
                gap: 1.5 
              }}
            >
              {/* Logo Box (Optional: Replace with your actual logo <img>) */}
              <Box 
                sx={{ 
                  width: 32, 
                  height: 32, 
                  bgcolor: 'primary.main', 
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  color: 'black'
                }}
              >
                P
              </Box>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 800, 
                  color: 'white', 
                  letterSpacing: -0.5,
                  fontSize: '1.4rem'
                }}
              >
                PrimeStack<Box component="span" sx={{ color: 'primary.main' }}>Sol</Box>
              </Typography>
            </Box>


          <Typography variant="caption" sx={{ color: 'text.disabled', textAlign: 'center' }}>
            © {new Date().getFullYear()} PrimeStack-Sol. Expertly crafted for digital growth.
          </Typography>

          <Stack direction="row" spacing={3}>
            <Link href="#" sx={{ color: 'text.disabled', fontSize: '0.75rem', underline: 'none', '&:hover': { color: 'primary.main' } }}>Status</Link>
            <Link href="#" sx={{ color: 'text.disabled', fontSize: '0.75rem', underline: 'none', '&:hover': { color: 'primary.main' } }}>Terms</Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;