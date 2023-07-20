import React from "react";
import { AppBar, Toolbar, Typography } from '@mui/material';

function App() {
  return (
    <AppBar sx={{ backgroundColor: "white" }}>
      <Toolbar>
        <Typography color={"black"}>Home</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default App;
