 
// import { Container, Grid, Box, Button, Stack, Typography } from "@mui/material";
// import { useTranslation } from "react-i18next";
// import { Link } from 'react-router-dom'; 
// import img1 from "../assets/pic4.png";
// import img2 from "../assets/hdhcbj.png";

// const Delivery = () => {
//   const { t } = useTranslation();

//   return (
//     <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
//       <Grid container alignItems="center" spacing={{ xs: 6, md: 10 }}>
        
//         {/* Left Content */}
//         <Grid   size={{xs:12 ,md:5}}>
//           <Box sx={{ position: 'relative' }}>
//             {/* Background Decoration */}
//             <Box sx={{
//               position: 'absolute',
//               top: -20,
//               left: -20,
//               width: 60,
//               height: 60,
//               borderLeft: '3px solid #3BC1A8',
//               borderTop: '3px solid #3BC1A8',
//               opacity: 0.5
//             }} />

//             <Typography 
//               variant="h3"
//               sx={{
//                 fontWeight: 800,
//                 fontSize: { xs: "32px", md: "42px" },
//                 lineHeight: 1.2,
//                 color: 'white',
//                 mb: 3
//               }}
//             >
//               {t("Delivery.heading")}
//             </Typography>

//             <Typography 
//               variant="body1"
//               sx={{ 
//                 color: 'text.secondary',
//                 fontSize: "1.1rem",
//                 lineHeight: 1.8,
//                 mb: 4
//               }}
//             >
//               {t("Delivery.paragraph")}
//             </Typography>

//             {/* Buttons with Theme Colors */}
//             <Stack direction="row" spacing={2}>
//               <Button
//                 variant="contained"
//                 component={Link}
//                 to="/about"
//                 sx={{
//                   bgcolor: 'primary.main',
//                   color: 'black',
//                   fontWeight: 'bold',
//                   px: 4,
//                   py: 1,
//                   borderRadius: "8px",
//                   '&:hover': { 
//                     bgcolor: 'primary.main',
//                     boxShadow: '0 0 20px rgba(59, 193, 168, 0.4)' 
//                   },
//                 }}
//               >
//                 {t("buttons.about")}
//               </Button>

//               <Button
//                 variant="outlined"
//                 component={Link}
//                 to="/works"
//                 sx={{
//                   borderColor: 'rgba(59, 193, 168, 0.5)',
//                   color: 'white',
//                   px: 4,
//                   py: 1,
//                   borderRadius: "8px",
//                   '&:hover': { 
//                     borderColor: '#3BC1A8',
//                     bgcolor: 'rgba(59, 193, 168, 0.05)' 
//                   },
//                 }}
//               >
//                 {t("buttons.work")}
//               </Button>
//             </Stack>
//           </Box>
//         </Grid>

//         {/* Right Content - Visuals */}
//         <Grid   size={{xs:12 , md:7}}>
//           <Box
//             sx={{
//               position: 'relative',
//               p: 1,
//               background: 'rgba(59, 193, 168, 0.05)',
//               borderRadius: '24px',
//               border: '1px solid rgba(59, 193, 168, 0.2)',
//               boxShadow: 'inset 0 0 30px rgba(59, 193, 168, 0.1), 0 20px 50px rgba(0,0,0,0.5)', // Smoke Shadow
//               overflow: 'hidden'
//             }}
//           >
//             <Box
//               component="img"
//               src={img1}
//               alt="delivery"
//               sx={{
//                 width: "100%",
//                 height: { xs: "300px", md: "500px" },
//                 objectFit: "cover",
//                 borderRadius: '16px',
//                 display: "block",
//               }}
//             />
//           </Box>
//         </Grid>

//         {/* Bottom Logo/Graphic with Smoke Glow */}
//         <Grid  size={{xs:12}}>
//           <Box
//             sx={{
//               mt: 6,
//               p: 4,
//               borderRadius: '16px',
//               border: '1px solid rgba(255,255,255,0.05)',
//               background: 'radial-gradient(circle, rgba(59, 193, 168, 0.08) 0%, transparent 70%)', // Under smoke glow
//             }}
//           >
//             <Box
//               component="img"
//               src={img2}
//               alt="delivery detail"
//               sx={{
//                 width: "100%",
//                 maxWidth: "800px",
//                 height: "auto",
//                 display: "block",
//                 mx: "auto",
//                 filter: 'drop-shadow(0 0 10px rgba(59, 193, 168, 0.2))'
//               }}
//             />
//           </Box>
//         </Grid>

//       </Grid>
//     </Container>
//   );
// };

// export default Delivery;



import { Container, Grid, Box, Button, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"; 
import img1 from "../assets/pic1.png";
import img2 from "../assets/pic2.png";
import img3 from "../assets/pic3.png";
import img4 from "../assets/pic4.png";
import img5 from "../assets/pic5.png";
import img6 from "../assets/pic6.png";

import img7 from "../assets/hdhcbj.png";
import * as THREE from "three";
import { useEffect, useRef } from "react";
interface RubikCubeProps {
  images: string[]; // exactly 6 images
}

const RubikCube: React.FC<RubikCubeProps> = ({ images }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    if (images.length !== 6) return console.error("Provide exactly 6 images");

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(4, 4, 6);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    // Load textures
    const loader = new THREE.TextureLoader();
    const textures = images.map(img => {
      const tex = loader.load(img);
      tex.magFilter = THREE.NearestFilter;
      tex.minFilter = THREE.LinearFilter;
      tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
      return tex;
    });

    const cubeGroup = new THREE.Group();

    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          const materials: THREE.Material[] = [];

          for (let i = 0; i < 6; i++) {
            let mat: THREE.Material;

            // Assign textures only to outer faces
            if ((i === 0 && x === 1) || (i === 1 && x === -1) ||
                (i === 2 && y === 1) || (i === 3 && y === -1) ||
                (i === 4 && z === 1) || (i === 5 && z === -1)) {
              mat = new THREE.MeshBasicMaterial({ map: textures[i] });
            } else {
              mat = new THREE.MeshBasicMaterial({ color: "#111" });
            }

            materials.push(mat);
          }

          const cube = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.95, 0.95), materials);
          cube.position.set(x, y, z);
          cubeGroup.add(cube);
        }
      }
    }

    scene.add(cubeGroup);

    const animate = () => {
      cubeGroup.rotation.y += 0.005;
      cubeGroup.rotation.x += 0.003;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (mountRef.current) mountRef.current.removeChild(renderer.domElement);
    };
  }, [images]);

  return <div ref={mountRef} style={{ width: "100%", height: "500px" }} />;
};

// Delivery component
const Delivery: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
      <Grid container alignItems="center" spacing={{ xs: 6, md: 10 }}>
        
        {/* Left Content */}
        <Grid  size={{xs:12 ,md:5}}>
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                position: "absolute",
                top: -20,
                left: -20,
                width: 60,
                height: 60,
                borderLeft: "3px solid #3BC1A8",
                borderTop: "3px solid #3BC1A8",
                opacity: 0.5,
              }}
            />

            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "32px", md: "42px" },
                lineHeight: 1.2,
                color: "white",
                mb: 3,
              }}
            >
              {t("Delivery.heading")}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                fontSize: "1.1rem",
                lineHeight: 1.8,
                mb: 4,
              }}
            >
              {t("Delivery.paragraph")}
            </Typography>

            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                component={Link}
                to="/about"
                sx={{
                  bgcolor: "primary.main",
                  color: "black",
                  fontWeight: "bold",
                  px: 4,
                  py: 1,
                  borderRadius: "8px",
                  "&:hover": {
                    bgcolor: "primary.main",
                    boxShadow: "0 0 20px rgba(59, 193, 168, 0.4)",
                  },
                }}
              >
                {t("buttons.about")}
              </Button>

              <Button
                variant="outlined"
                component={Link}
                to="/works"
                sx={{
                  borderColor: "rgba(59, 193, 168, 0.5)",
                  color: "white",
                  px: 4,
                  py: 1,
                  borderRadius: "8px",
                  "&:hover": {
                    borderColor: "#3BC1A8",
                    bgcolor: "rgba(59, 193, 168, 0.05)",
                  },
                }}
              >
                {t("buttons.work")}
              </Button>
            </Stack>
          </Box>
        </Grid>

        {/* Right Content - Rubik Cube */}
        <Grid size={{xs:12 ,md:7}}>
          <Box
            sx={{
              position: "relative",
              p: 1,
              background: "rgba(59, 193, 168, 0.05)",
              borderRadius: "24px",
              border: "1px solid rgba(59, 193, 168, 0.2)",
              boxShadow: "inset 0 0 30px rgba(59, 193, 168, 0.1), 0 20px 50px rgba(0,0,0,0.5)",
              overflow: "hidden",
            }}
          >
            <RubikCube images={[img1, img2, img3, img4, img5, img6]} />

          </Box>
        </Grid>

        {/* Bottom Logo/Graphic */}
        <Grid size={{xs:12}}>
          <Box
            sx={{
              mt: 6,
              p: 4,
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.05)",
              background: "radial-gradient(circle, rgba(59, 193, 168, 0.08) 0%, transparent 70%)",
            }}
          >
            <Box
              component="img"
              src={img7}
              alt="delivery detail"
              sx={{
                width: "100%",
                maxWidth: "800px",
                height: "auto",
                display: "block",
                mx: "auto",
                filter: "drop-shadow(0 0 10px rgba(59, 193, 168, 0.2))",
              }}
            />
          </Box>
        </Grid>

      </Grid>
    </Container>
  );
};

export default Delivery;
