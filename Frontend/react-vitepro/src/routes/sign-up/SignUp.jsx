import { Box, Typography, useTheme } from "@mui/material";

const SignUp = () => {
  const theme = useTheme();

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
          minHeight: "600px",
          borderRadius: "8px",
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Typography 
            variant="h5" 
            align="center" 
            sx={{
                mt: 4,
                fontSize: "1.7rem",
                fontWeight: 500,
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
                mt: 1
            }}
        >
            First, Tell us who you are
        </Typography>
      </Box>
    </Box>
  );
};

export default SignUp;
