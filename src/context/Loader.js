import React from 'react';
import { useLoader } from './LoaderContext';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


//loader Code

const Loader = () => {
  const { isLoading } = useLoader();
  return isLoading &&
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open
    >
      <CircularProgress color="inherit" />
    </Backdrop>
};

export default Loader;
