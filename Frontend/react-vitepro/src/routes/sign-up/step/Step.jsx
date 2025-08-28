import { useState } from "react";
import { Box, LinearProgress, useTheme } from "@mui/material";

const Step = ({ selectedType }) => {
    const [activeStep, setActiveStep] = useState(1);

    const theme = useTheme();

    const totalSteps = 5; //esto debe cambiar dependiendo el tipo de usuario

    const progress = (activeStep / totalSteps) * 100;


    const handleNext = () => {
        if (activeStep < totalSteps) setActiveStep((prev) => prev + 1);
    };

    const handleBack = () => {
        if (activeStep > 1) setActiveStep((prev) => prev - 1);
    };


    return (
        <Box
            sx={{
                width: "90%",
                // border: "1px solid red"
            }}

        >
            <LinearProgress
                variant="determinate"
                value={progress}
                sx={{
                    borderRadius: "5px",
                    height: "10px",
                    background: "#14203a",
                    "& .MuiLinearProgress-bar": {
                        backgroundColor: `${theme.palette.primary.main}`,
                    },
                }}
            />

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 2,
                }}
            >
                
            </Box>

        </Box>

    )

}

export default Step;