import Slider from "react-rangeslider";
import 'react-rangeslider/lib/index.css';
import { useState } from "react";
import AvatarEditor from "react-avatar-editor";
import axios from 'axios';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import CustomAvatar from 'materialize/components/mui/avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Close from 'mdi-material-ui/Close';
import IconButton from '@mui/material/IconButton';

import WebcamImage from './WebcamImage'



const EditProfilePhoto = (props) => {  
    const {onChange, title, openAvatarModal,onCloseModal, avatar, username} = props
    const [ editor, setEditor] = useState()

    const [picture, setPicture] = useState({
        cropperOpen: false,
        img: "",
        zoom: 2,
        croppedImg: avatar? avatar : "https://upload.wikimedia.org/wikipedia/commons/0/09/Man_Silhouette.png"
    });

    const [filename, setFilename] = useState("");

    const [showCamera, setShowCamera] = useState(false);


    const handleSlider = (value) => {
        setPicture({
        ...picture,
        zoom: value
        });
    };

    const handleCancel = () => {
        setPicture({
        ...picture,
        cropperOpen: false
        });
    };

    const setEditorRef = (ed) => {
        setEditor(ed)
    };

    const handleSave = () => {
        if (editor) {
            const canvasScaled = editor.getImageScaledToCanvas();
            const croppedImg = canvasScaled.toDataURL();
            setPicture({
                ...picture,
                img: "",
                cropperOpen: false,
                croppedImg: croppedImg
            });
            handleCloseCamera()

            function dataURLtoFile(dataurl, filename) {
    
                var arr = dataurl.split(','),
                    mime = arr[0].match(/:(.*?);/)[1],
                    bstr = atob(arr[1]), 
                    n = bstr.length, 
                    u8arr = new Uint8Array(n);
                    
                while(n--){
                    u8arr[n] = bstr.charCodeAt(n);
                }
                
                return new File([u8arr], filename, {type:mime});
            }
            
            var file = dataURLtoFile(croppedImg,filename);

            var data = new FormData();
            data.append('files', file);

            var config = {
                method: 'post',
                url: `${process.env.NEXT_PUBLIC_BACKEND_URL + '/v1/upload'}`,
                headers: { "Content-Type": "multipart/form-data" },
                data : data
            };

            axios(config)
                .then(function (response) {
                    // console.log(JSON.stringify(response.data));
                    const url = response.data[0].url;
                    // console.log(url)
                    // onChange(`${process.env.NEXT_PUBLIC_BACKEND_URL+url}`)
                    onChange(url)
                })
                .catch(function (error) {
                    // console.log(error);
                }
            );
        } else {
            return
        }
    };

    const handleFileChange = (e) => {
        let url = URL.createObjectURL(e.target.files[0]);
        setFilename(e.target.files[0].name);
        setPicture({
            ...picture,
            img: url,
            cropperOpen: true
        });
    }; 

    const handleCloseModal = () => {
        handleCancel();
        onCloseModal();
    };

    const handleMouseDownClosed = event => {
        event.preventDefault()
    }

    const handleUseCamera = () => {
        setShowCamera(true)
    }

    const handleCloseCamera = () => {
        setShowCamera(false)
    }

    const handleCameraPhotoChange = (cameraImg) => {
        setFilename(username)
        setPicture({
            ...picture,
            img:cameraImg,
            cropperOpen: true
        });
    }
        
    return ( 
        <Modal
            open={openAvatarModal}
            onClose={handleCloseModal}
        >
            <Box sx={style}>
                {!showCamera ? 
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center', width:'100%'}} >
                        <Box sx={{display:'flex', flexDirection:'Row', alignItems:'center', justifyContent:'space-between', width:'100%'}} >
                            <Typography variant='h6' >{title}</Typography>
                            <IconButton
                                onClick={handleCloseModal}
                                onMouseDown={handleMouseDownClosed}
                            >
                            <Close />
                            </IconButton>                        
                        </Box>                    
                        <Divider sx={{ width:'100%', mb: 4 }} />
                        <CustomAvatar alt='User Image' src={picture.croppedImg} variant='rounded' sx={{ width: 120, height: 120, mb: 4, mt: 2 }} />
                        <Divider sx={{ width:'100%', mb: 4 }} />
                        <Box sx={{display:'flex', flexDirection:'Row', alignItems:'center', mt: 2 }}>
                            <Button
                                variant='outlined' 
                                sx={{ mr: 2 }}
                                onClick={handleUseCamera}
                            >                        
                                Use Camera
                            </Button>
                            <input type="file"  onChange={handleFileChange} id="select-image" style={{height: 1, width:1, overflow: "hidden", padding:0, whiteSpace:"nowrap", position:"absolute", display:"block", border:0, margin:-1}}/>
                            <Button
                                variant='contained' 
                                sx={{ mr: 2 }}
                            >
                                <label htmlFor="select-image">Upload Photo</label>
                            </Button> 
                        </Box>                                       
                    </Box> :
                    <WebcamImage 
                        onCloseCamera={handleCloseCamera}
                        onCameraPhotoChange={handleCameraPhotoChange}
                        onCloseEditor={handleCancel}
                    />
                }

                {picture.cropperOpen && (        
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center', mt:4}}>
                        <AvatarEditor
                            ref={setEditorRef}
                            image={picture.img}
                            width={100}
                            height={100}
                            border={25}
                            color={[255, 255, 255, 0.6]} 
                            rotate={0}
                            scale={picture.zoom}
                        />
                        <Box sx={{width:'100%'}}>
                            <Slider
                                aria-label="raceSlider"
                                value={picture.zoom}
                                min={1}
                                max={10}
                                step={0.1}
                                onChange={handleSlider}
                            />
                        </Box>
                        <Box sx={{display: 'flex', justifyContent:'space-between', alignItems: 'center'}}>
                            <Button 
                                color='error' variant='outlined' sx={{ mr: 2 }}
                                onClick={handleCancel}
                            >
                                {"Close"}
                            </Button>
                            <Button 
                                variant='contained' sx={{ mr: 2 }} 
                                onClick={handleSave}
                            >
                                {"Save"}
                            </Button>
                        </Box>
                    </Box>
                )}
            </Box>            
        </Modal>           
    );
};

export default EditProfilePhoto;

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: 1,
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
};
