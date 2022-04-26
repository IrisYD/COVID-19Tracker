import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import "./InfoBox.css";

/**
 *
 * @param title
 * @param cases
 * @param total
 * @param isRed
 * @param active
 * @param props
 * @returns {JSX.Element}
 */
function InfoBox({ title, cases, total, isRed, active, ...props }) {
  return (
    <Card
        onClick={props.onClick}
        className={`infoBox ${active && "infoBox-selected"} ${isRed && "infoBox-red"}`}
        sx={{ minWidth:200, maxWidth: 600}}
    >
        <CardContent>
            <Typography className='infoBox_title' color='textSecondary'>
                {title}
            </Typography>
            <h2 className={`infoBox_cases ${!isRed && "infoBox_cases_green"}`}>{cases}</h2>
            <Typography  className='infoBox_total' color='textSecondary'>
                {total} total
            </Typography>
    
        </CardContent>
      
    </Card>
  )
}

export default InfoBox
