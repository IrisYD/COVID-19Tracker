import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

function InfoBox({ title, cases, total }) {
  return (
    <Card className='infoBox' sx={{ minWidth:200, maxWidth: 600}}>
        <CardContent>
            <Typography className='infoBox__title' color='textSecondary'>
                {title}
            </Typography>
            <h2 className='infoBox__cases'>{cases}</h2>
            <Typography  className='infoBox__total' color='textSecondary'>
                {total} total
            </Typography>
    
        </CardContent>
      
    </Card>
  )
}

export default InfoBox
