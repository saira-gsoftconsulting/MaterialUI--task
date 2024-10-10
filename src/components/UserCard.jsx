import React, { useState } from 'react';
import { Button, Card, Avatar, Box, CardContent, Typography } from '@mui/material';
import { useDropzone } from 'react-dropzone';
const UserCard = () => {
  const [image, setImage] = useState(null);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: acceptedFiles => {
      const file = acceptedFiles[0];
      setImage(URL.createObjectURL(file));
    },
    accept: 'image/*'
  });

  const handleDeleteImage = () => {
    setImage("");

  };

  return (
    <Card 
      style={{ 
        textAlign: 'center', 
        padding: '20px', 
        backgroundImage: '',    
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Box position="relative" display="inline-block">
        <Avatar
          alt="Neil Sims"
          src={image || "/static/images/avatar/1.jpg"}
          sx={{ width: 100, height: 100, margin: 'auto', position: 'relative', zIndex: 1 }}
        />
      </Box>
      <CardContent>
        <Typography variant="h6">Saira Saeed</Typography>
        <Typography variant="body2" color="textSecondary">
           Intern Frontend Developer
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Johar Town, Lahore
        </Typography>
        <Box marginTop={2}>
          <Button variant="contained" color="primary" style={{ margin: '10px' }}>
            Connect
          </Button>
          <Button variant="outlined" color="secondary">
            Send Message
          </Button>
        </Box>
        <Box display="flex" justifyContent="center" marginTop={5}>
          <div {...getRootProps()} style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'center' }}>
            <input {...getInputProps()} />
            {image ? (
              <div>
                <Avatar src={image} style={{ width: 100, height: 100, margin: 'auto' }} />
                <Button onClick={handleDeleteImage} variant="contained" color="error" style={{ marginTop: 10 }}>
                  Delete Image
                </Button>
              </div>
            ) : (
              <Typography>Drag 'n' drop an image here, or click to select one</Typography>
            )}
          </div>
        </Box>
      </CardContent>
    </Card>
  );
};

export default UserCard;
    