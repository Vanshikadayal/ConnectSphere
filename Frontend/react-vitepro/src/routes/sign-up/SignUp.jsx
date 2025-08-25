import { Box, Typography, useTheme } from "@mui/material";
import TypeButton from "./type-button/TypeButton";

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
          display: "flex",
          flexDirection: "column",
          boxShadow: 10,
          pb: 5,
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
          <TypeButton icon={"user"} titleText={"Simple User"} subtitle={"Explore projects, connect with people."} />
          <TypeButton icon={"cofounder"} titleText={"Co-Founder"} subtitle={"Looking to start or join a venture."} />
          <TypeButton icon={"investor"} titleText={"Investor"} subtitle={"Find investment opportunities."} />
          <TypeButton icon={"mentor"} titleText={"Mentor"} subtitle={"Share your expertise, guide founders."} />
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
          <Typography variant="body1" component="span" sx={{ color: theme.palette.primary.main, fontSize: "0.85rem", fontWeight: 500 }}>
            Login
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default SignUp;
