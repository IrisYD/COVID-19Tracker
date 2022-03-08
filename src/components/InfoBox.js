import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

function InfoBox({ title, cases, total }) {
  return (
    <Card className='inforBox'>
        <CardContent>
            <Typography className='infoBox__title' color='textSecondary'>
                {title}
            </Typography>
            <h2 className='inforBox__cases'>{cases}</h2>
            <Typography  className='infoBox__total' color='textSecondary'>
                {total} total
            </Typography>
    
        </CardContent>
      
    </Card>
  )
}

export default InfoBox
