import { Box, Typography, useTheme } from "@mui/material";
import { FiUser } from "react-icons/fi";
import { LuHandshake } from "react-icons/lu";
import { PiSuitcase } from "react-icons/pi";
import { LuGraduationCap } from "react-icons/lu";
import { TbFaceIdError } from "react-icons/tb";

const TypeButton = ({ icon, titleText, subtitle }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        border: `2px solid ${theme.palette.divider}`,
        width: "88%",
        minHeight: "90px",
        borderRadius: "8px",
        transition: "background-color 0.3s ease",
        cursor: "pointer",
        p: 2,
        "&:hover": {
          backgroundColor: theme.palette.secondary.main,
        },
        "&:hover .cardTitle, &:hover .cardSubtitle": {
          color: "#0A0F1C",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.3,
        }}
      >
        {(() => {
          switch (icon) {
            case "user":
              return <FiUser size={25} color={"#1E90FF"} title="Simple User Icon" />;
            case "cofounder":
              return <LuHandshake size={25} color={"#1E90FF"} title="Co-Founder Icon" />;
            case "investor":
              return <PiSuitcase size={25} color={"#1E90FF"} title="Investor Icon" />;
            case "mentor":
              return <LuGraduationCap size={25} color={"#1E90FF"} title="Mentor Icon" />;
            default:
              return <TbFaceIdError size={25} color={"#1E90FF"} title={"Error loading icon"} />;
          }
        })()}

        <Typography
          className="cardTitle"
          variant="h6"
          sx={{
            fontSize: "1.15rem",
            letterSpacing: "-0.5px",
            fontWeight: 500,
            color: theme.palette.text.primary,
            transition: "color 0.3s ease",
          }}
        >
          {titleText}
        </Typography>
      </Box>
      <Box
        sx={{
          mt: 0.5,
        }}
      >
        <Typography
          className="cardSubtitle"
          variant="subtitle1"
          sx={{
            color: theme.palette.text.secondary,
            fontWeight: 500,
            fontSize: "0.83rem",
            transition: "color 0.3s ease",
          }}
        >
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default TypeButton;
