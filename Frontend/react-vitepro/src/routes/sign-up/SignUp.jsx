import { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import TypeButton from "./type-button/TypeButton";

const SignUp = () => {
  const [selectedType, setSelectedType] = useState(null);
  const theme = useTheme();

  const MotionBox = motion(Box);

  const slideVariants = {
    enter: { x: 0, opacity: 1 },
    exitLeft: { x: "-100%", opacity: 0 },
    exitRight: { x: "100%", opacity: 0 },
  };

  return (
    <Box
      sx={{
        height: "100dvh",
        width: "100dvw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: "520px",
          width: "90%",
          minHeight: "640px",
          borderRadius: "8px",
          backgroundColor: theme.palette.background.paper,
          display: "flex",
          flexDirection: "column",
          boxShadow: 10,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <AnimatePresence mode="wait">
          {!selectedType ? (
            <MotionBox
              key="selection"
              variants={slideVariants}
              initial="enter"
              animate="enter"
              exit="exitLeft"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
              }}
            >
              <Typography
                variant="h5"
                align="center"
                sx={{
                  mt: 4,
                  fontSize: "1.7rem",
                  fontWeight: 500,
                  letterSpacing: "-1.5px",
                }}
              >
                Join ConnectSphere
              </Typography>
              <Typography
                variant="body1"
                align="center"
                sx={{
                  width: "100%",
                  color: theme.palette.text.secondary,
                  fontSize: "0.85rem",
                  mt: 1,
                }}
              >
                First, Tell us who you are
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 2,
                  py: 3,
                }}
              >
                <TypeButton
                  onClick={() => setSelectedType("user")}
                  icon={"user"}
                  titleText={"Simple User"}
                  subtitle={"Explore projects, connect with people."}
                />
                <TypeButton
                  onClick={() => setSelectedType("cofounder")}
                  icon={"cofounder"}
                  titleText={"Co-Founder"}
                  subtitle={"Looking to start or join a venture."}
                />
                <TypeButton
                  onClick={() => setSelectedType("investor")}
                  icon={"investor"}
                  titleText={"Investor"}
                  subtitle={"Find investment opportunities."}
                />
                <TypeButton
                  onClick={() => setSelectedType("mentor")}
                  icon={"mentor"}
                  titleText={"Mentor"}
                  subtitle={"Share your expertise, guide founders."}
                />
              </Box>

              <Typography
                onClick={() => console.log("Redirect to Login Page")}
                variant="body1"
                align="center"
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: "0.85rem",
                  mt: 2,
                  display: "flex",
                  justifyContent: "center",
                  gap: 0.5,
                  cursor: "pointer",
                }}
              >
                Already have an account?{" "}
                <Typography
                  variant="body1"
                  component="span"
                  sx={{ color: theme.palette.primary.main, fontSize: "0.85rem", fontWeight: 500 }}
                >
                  Login
                </Typography>
              </Typography>
            </MotionBox>
          ) : (
            <MotionBox
              key="form"
              variants={slideVariants}
              initial="exitRight"
              animate="enter"
              exit="exitRight"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
              }}
            >
              {/* Aquí va tu formulario */}
              <Typography variant="h6">Formulario de {selectedType}</Typography>
              <Box
                onClick={() => setSelectedType(null)}
                sx={{
                  height: "50px",
                  border: "1px solid blue",
                  width: "60px",
                }}
              >
                volver
              </Box>
            </MotionBox>
          )}
        </AnimatePresence>
      </Box>
    </Box>
  );
};

export default SignUp;
