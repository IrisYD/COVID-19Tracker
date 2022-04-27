import React, { createRef, useState } from "react";

import {
  Avatar,
  Button as MuiButton,
  Typography,
  Stack,
} from "@mui/material";

import {
  CloudUpload as MuiCloudUpload,
  Delete as MuiDelete,
} from "@mui/icons-material";

import { grey } from "@mui/material/colors";
import { spacing } from "@mui/system";
import styled from "styled-components";
import { useTheme } from '@mui/material/styles';

const Button = styled(MuiButton)(spacing);
const UploadIcon = styled(MuiCloudUpload)(spacing);
const DeleteIcon = styled(MuiDelete)(spacing);

const CenteredContent = styled.div`
  text-align: center;
`;

const BigAvatar = styled(Avatar)`
  width: 160px;
  height: 160px;
  margin: 0 auto ${(props) => useTheme().spacing(2)}px;
  ${({ $withBorder }) =>
    $withBorder &&
    `border: 1px solid ${grey[500]};
     box-shadow: 0 0 1px 0 ${grey[500]} inset, 0 0 1px 0 ${grey[500]};`}
`;

const AvatarUpload = ({ avatar, _setAvatar, inputFileRef }) => {
  // const [avatar, _setAvatar] = useState(null);

  const cleanup = () => {
    URL.revokeObjectURL(avatar);
    inputFileRef.current.value = null;
  };

  const setAvatar = (newAvatar) => {
    if (avatar) {
      cleanup();
    }
    _setAvatar(newAvatar);
  };

  /**
   * Choosing a file.
   *
   * @param event the value change event
   */
  const handleOnChange = (event) => {
    const newAvatar = event.target?.files?.[0];

    if (newAvatar) {
      console.log(newAvatar);
      setAvatar(URL.createObjectURL(newAvatar));
    }
  };

  /**
   * Handle the upload or delete actions.
   *
   * @param event the click event
   */
  const handleClick = (event) => {
    if (avatar) {
      event.preventDefault();
      setAvatar(null);
    }
  };

  return (
      <CenteredContent>
        <Stack sx={{ alignItems: 'center' }}>
          <BigAvatar
              $withBorder
              alt="Avatar"
              src={avatar}
              imgProps={{
                style: {
                  maxHeight: "100%",
                  maxWidth: "100%",
                  objectFit: "cover",
                },
              }}
          />
          <input
              ref={inputFileRef}
              accept="image/*"
              hidden
              id="avatar-image-upload"
              name={'avatarImage'}
              type="file"
              onChange={handleOnChange}
          />
          <label htmlFor="avatar-image-upload">
            <Button
                variant="contained"
                color="primary"
                component="span"
                mb={1}
                mt={5}
                onClick={handleClick}
                sx={{ minWidth: 120 }}
            >
              {avatar ? <DeleteIcon mr={2}/> : <UploadIcon mr={2}/>}
              {avatar ? "Delete" : "Upload"}
            </Button>
          </label>
          <Typography variant="caption" display="block" gutterBottom>
            For best results, use an image of at least 128x
            128 pixels in .jpg format
          </Typography>
        </Stack>
      </CenteredContent>
  );
};

export default AvatarUpload;