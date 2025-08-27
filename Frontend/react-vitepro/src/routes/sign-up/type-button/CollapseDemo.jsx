import { useState } from "react";
import { Box, Button, Collapse, Typography } from "@mui/material";

export default function CollapseDemo() {
  const [open, setOpen] = useState(false);

  return (
<Box sx={{ p: 4, display: "flex", justifyContent: "flex-end" }}>
      <Button
        variant="contained"
        onClick={() => setOpen(!open)}
        sx={{ mb: 2 }}
      >
        {open ? "Cerrar →" : "Abrir ←"}
      </Button>

      <Collapse
        in={open}
        orientation="horizontal"
        timeout={500}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          "& .MuiCollapse-wrapperInner": {
            display: "flex",
            justifyContent: "flex-end",
          },
        }}
      >
        <Box
          sx={{
            width: 250,
            height: 120,
            bgcolor: "secondary.light",
            borderRadius: 2,
            p: 2,
            ml: 2,
            boxShadow: 3,
          }}
        >
          <Typography variant="h6">Formulario</Typography>
          <Typography variant="body2">
            👋 Soy el contenido que se desliza horizontalmente.
          </Typography>
        </Box>
      </Collapse>
    </Box>
  );
}
