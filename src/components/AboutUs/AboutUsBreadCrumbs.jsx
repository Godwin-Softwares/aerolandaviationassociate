import React from 'react'
import css from './AboutUsBreadCrumbs.module.scss'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

const AboutUsBreadCrumbs = () => {

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Home
    </Link>,
    
    <Typography key="3" color="text.primary">
      about us
    </Typography>,
  ];
  return (
    <div className={`paddings ${css.wrapper}`}>
         <div className={` ${css.container}`}>
         <Stack spacing={2}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
         </Stack>
        </div>
    </div>

  )
}

export default AboutUsBreadCrumbs