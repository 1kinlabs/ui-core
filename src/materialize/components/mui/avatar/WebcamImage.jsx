import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Close from 'mdi-material-ui/Close';
import IconButton from '@mui/material/IconButton';

const WebcamImage = (props) => {
  const {onCloseCamera, onCameraPhotoChange, onCloseEditor} = props
  const [img, setImg] = useState(null);
  const webcamRef = useRef(null);

  const videoConstraints = {
    width: '100%',
    height: '100%',
    facingMode: "user",
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImg(imageSrc);
    onCameraPhotoChange(imageSrc)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [webcamRef]);

  const handleMouseDownClosed = event => {
    event.preventDefault()
  };

  const handleRetake = () => {
    setImg(null)
    onCloseEditor()
  }

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center', width:'100%' }}>
      <Box sx={{display:'flex', flexDirection:'Row', alignItems:'center', justifyContent:'space-between', width:'100%'}} >
        <Typography variant='h6' >Take photo</Typography>
        <IconButton
          onClick={onCloseCamera}
          onMouseDown={handleMouseDownClosed}
        >
        <Close />
        </IconButton>                        
      </Box>                    
      <Divider sx={{ width:'100%', mb:4 }} />
      {img === null ? 
        <Webcam
          audio={false}
          mirrored={true}
          height={"100%"}
          width={"100%"}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
        /> :
        <img src={img} alt="screenshot" />
      }
      <Divider sx={{ width:'100%', mt:4, mb:4 }} />
      <Box sx={{width:'100%', display:'flex', flexDirection:'Row', alignItems:'center', justifyContent:'space-between', mt: 2 }}>
        <Button 
          color='error'
          variant='outlined'
          onClick={onCloseCamera}
        >
          Cancel
        </Button>
        {img === null ? 
          <Button 
            variant='contained'
            onClick={capture}
          >
            Capture photo
          </Button> :
          <Button 
            variant='contained'
            onClick={handleRetake}
          >
            Retake
          </Button>
        }
      </Box>
    </Box>
  );
}

export default WebcamImage;
