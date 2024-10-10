import React, { useState } from 'react';
import { Button, Avatar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: 120,
    height: 120,
    marginBottom: theme.spacing(2),
  },
  input: {
    display: 'none',
  },
}));

const ProfilePhotoPicker = () => {
  const classes = useStyles();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = function (e) {
        setSelectedFile(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Typography variant="h6" gutterBottom>
        Select Profile Photo
      </Typography>
      <Avatar
        alt="Profile Image"
        src={selectedFile || '/static/images/avatar/1.jpg'}
        className={classes.avatar}
      />
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={handleFileChange}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" component="span">
          Choose Image
        </Button>
      </label>
    </div>
  );
};

export default ProfilePhotoPicker;
