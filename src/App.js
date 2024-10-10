import React from "react";
import { Grid } from "@mui/material";
import ProfileForm from "./components/ProfileForm";
import UserCard from "./components/UserCard";

const App = () => {
  return (
    <Grid container spacing={4} style={{ padding: "20px" }}>
      <Grid item xs={8}>
        <ProfileForm />
      </Grid>
      <Grid item xs={4}>
        <UserCard />
      
      </Grid>
    </Grid>
  );
};

export default App;

