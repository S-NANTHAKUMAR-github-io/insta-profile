import React from 'react'
import { Snackbar, Alert } from '@mui/material'


//Code for material ui modal, creating once and access by getting props from every component
const CustomSnackBar = ({ open, message, severity, onClose }) => {
    return (
        <div>
            <Snackbar open={open} autoHideDuration={6000}  onClose={onClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Alert onClose={onClose} variant='filled' severity={severity} >
                    {message}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default CustomSnackBar