import { Box, TextField, Stack, FormLabel, useTheme } from "@mui/material";

const UserForm = () => {

    const theme = useTheme();

    const styleTextField = {
        "& .MuiOutlinedInput-root": {
            height: "2.2rem",
            fontSize: "0.9rem",
            backgroundColor: theme.palette.background.default,
            "& fieldset": {
                border: `1px solid ${theme.palette.divider}`,
            },
            "&:hover fieldset": {
                border: `1px solid ${theme.palette.divider}`,
            },
            "&.Mui-focused fieldset": {
                border: `1px solid ${theme.palette.primary.main}`,
            },
        },
    }

    const styleLabel = { fontSize: "0.9rem", color: theme.palette.text.primary, fontWeight: "500" }


    return (
        <Box
            sx={{
                // border: "1px solid red",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                height: "100dvh"
            }}
        >
            <Stack spacing={0.5} sx={{ width: "90%" }}>
                <FormLabel sx={styleLabel}>Full Name</FormLabel>
                <TextField placeholder="Your full name" variant="outlined" sx={styleTextField} />
            </Stack>

            <Stack spacing={0.5} sx={{ width: "90%" }}>
                <FormLabel sx={styleLabel}>Email</FormLabel>
                <TextField placeholder="user@mail.com" variant="outlined" sx={styleTextField} />
            </Stack>

            <Stack spacing={0.5} sx={{ width: "90%" }}>
                <FormLabel sx={styleLabel}>Phone Number</FormLabel>
                <TextField placeholder="Your full name" variant="outlined" sx={styleTextField} />
            </Stack>

            <Stack spacing={0.5} sx={{ width: "90%" }}>
                <FormLabel sx={styleLabel}>Full Name</FormLabel>
                <TextField placeholder="Your full name" variant="outlined" sx={styleTextField} />
            </Stack>


        </Box>

    );
}

export default UserForm;