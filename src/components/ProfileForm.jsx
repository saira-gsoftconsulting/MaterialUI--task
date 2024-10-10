import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  TextField,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
  Avatar,
  Alert,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDropzone } from "react-dropzone";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  birthday: Yup.string().required("Birthday is required"),
  gender: Yup.string().required("Gender is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  zip: Yup.string().required("Zip is required"),
});

const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

const states = ["punjab", "sindh", "khber"];

const ProfileForm = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [image, setImage] = useState(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "all",
    
  });
  const onSubmit = (data) => {
    console.log("errors===========", errors, data);
    return;
    localStorage.setItem("form_data", data);
    toast.success("Profile updated successfully!");
  };

  const handleConfirmSubmit = () => {
    setOpenDialog(true);
  };

  const handleDialog = (confirm) => {
    console.log("confirm==============", confirm);
    if (confirm) {
      handleSubmit(onSubmit)();
      setOpenDialog(false);
      reset()
    } else {
      setOpenDialog(false);
    }
  };

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <div style={{ flex: 1 }}>
        <Typography variant="h4" gutterBottom>
          General information
        </Typography>

        <Alert
          severity="error"
          style={{ display: Object.keys(errors).length > 0 ? "block" : "none" }}
        >
          {Object.values(errors).map((error, index) => (
            <div key={index}>{error.message}</div>
          ))}
        </Alert>

        <form onSubmit={handleConfirmSubmit} style={{ padding: 20 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <label>FirstName</label>
                  <Controller
                    name="firstName"
                    control={control}
                    defaultValue=""
                    render={({ field, fieldState }) => (
                      <TextField
                        {...field}
                        placeholder="Enter your first name"
                        variant="outlined"
                        fullWidth
                        error={fieldState.error}
                        helperText={fieldState.error?.message}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <label>LastName</label>
                  <Controller
                    name="lastName"
                    control={control}
                    defaultValue=""
                    render={({ field, fieldState }) => (
                      <TextField
                        {...field}
                        placeholder="Enter your last name"
                        variant="outlined"
                        fullWidth
                        error={fieldState.error}
                        helperText={fieldState.error?.message}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <label>Birthday</label>
                  <Controller
                    name="birthday"
                    control={control}
                    defaultValue=""
                    render={({ field, fieldState }) => (
                      <TextField
                        {...field}
                        type="date"
                        placeholder="Enter your birthday"
                        variant="outlined"
                        fullWidth
                        error={fieldState.error}
                        helperText={fieldState.error?.message}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <label>Gender</label>
                  <Controller
                    name="gender"
                    control={control}
                    defaultValue=""
                    render={({ field, fieldState }) => (
                      <TextField
                        {...field}
                        select
                        placeholder="Select your gender"
                        variant="outlined"
                        fullWidth
                        error={fieldState.error}
                        helperText={fieldState.error?.message}
                      >
                        {genderOptions.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <label>Email</label>
                  <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    render={({ field, fieldState }) => (
                      <TextField
                        {...field}
                        placeholder="Enter your email"
                        variant="outlined"
                        fullWidth
                        error={fieldState.error}
                        helperText={fieldState.error?.message}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <label>Contact No</label>
                  <Controller
                    name="phone"
                    control={control}
                    defaultValue=""
                    render={({ field, fieldState }) => (
                      <TextField
                        {...field}
                        placeholder="Enter your phone number"
                        variant="outlined"
                        fullWidth
                        error={fieldState.error}
                        helperText={fieldState.error?.message}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6" gutterBottom>
                    Address
                  </Typography>
                  <label>Address</label>
                  <Controller
                    name="address"
                    control={control}
                    defaultValue=""
                    render={({ field, fieldState }) => (
                      <TextField
                        {...field}
                        placeholder="Enter your address"
                        variant="outlined"
                        fullWidth
                        error={fieldState.error}
                        helperText={fieldState.error?.message}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={4}>
                  <label>City</label>
                  <Controller
                    name="city"
                    control={control}
                    defaultValue=""
                    render={({ field, fieldState }) => (
                      <TextField
                        {...field}
                        placeholder="Enter your city"
                        variant="outlined"
                        fullWidth
                        error={fieldState.error}
                        helperText={fieldState.error?.message}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={4}>
                  <label>Select state</label>
                  <Controller
                    name="state"
                    control={control}
                    defaultValue=""
                    render={({ field, fieldState }) => (
                      <TextField
                        {...field}
                        select
                        placeholder="Select your state"
                        variant="outlined"
                        fullWidth
                        error={fieldState.error}
                        helperText={fieldState.error?.message}
                      >
                        {states.map((state) => (
                          <MenuItem key={state} value={state}>
                            {state}
                          </MenuItem>
                        ))}
                      </TextField>
                    )}
                  />
                </Grid>
                <Grid item xs={4}>
                  <label>Zip</label>
                  <Controller
                    name="zip"
                    control={control}
                    defaultValue=""
                    render={({ field, fieldState }) => (
                      <TextField
                        {...field}
                        placeholder="Enter your zip code"
                        variant="outlined"
                        fullWidth
                        error={fieldState.error}
                        helperText={fieldState.error?.message}
                      />
                    )}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Button
            type="button"
            variant="contained"
            color="primary"
            style={{ marginTop: 20 }}
            onClick={handleConfirmSubmit}
          >
            Save All
          </Button>
        </form>

        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
          <DialogTitle>Confirm Submission</DialogTitle>
          <DialogContent>Are you sure you want to submit?</DialogContent>
          <DialogActions>
            <Button onClick={() => handleDialog(false)} color="primary">
              Cancel
            </Button>
            <Button onClick={() => handleDialog(true)} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>

        <ToastContainer />
      </div>
    </div>
  );
};

export default ProfileForm;
