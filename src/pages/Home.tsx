import { alpha, Avatar, Button, Divider, Grid, makeStyles, Typography } from '@material-ui/core';
import ProductCard from 'components/ProductCard';
import { fetchProducts } from 'features/products/productsSlice'
import React from 'react'
import { BsGithub } from 'react-icons/bs';
import { useAppDispatch, useAppSelector } from 'store';
import profileImg from 'assets/images/profile.jpg';

const useStyles = makeStyles(theme=> ({
  divider: {
    margin: theme.spacing(1, 'auto')
  },
  projectSource: {
    position: 'sticky',
    top: 100,
    padding: theme.spacing(2,0),
  },
  siteLink: {
    fontWeight: 600,
    color: theme.palette.text.primary
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),  
},
}));

const Home = () => {

  const dispatch = useAppDispatch(),
  classes = useStyles(),
  products = useAppSelector( state=> state.products.all && Object.values(state.products.all) );

  React.useEffect(()=> {
    dispatch( fetchProducts() )
  }, [dispatch])

  return (
    <Grid container direction='row-reverse' spacing={4}>
      <Grid item xs={12} md={9} lg={10}>
        <Typography align='left' component='h1' variant='caption' color='textSecondary'>انواع آگهی‌ها و خدمات در تهران</Typography>
        <Divider className={classes.divider} />
        <Grid container spacing={2}>
          {
              products
              ? products.length
              ? products.map( product=> <ProductCard details={product} key={product.id} /> )
              : null
              : [...new Array(12)].map( (_,index)=> <ProductCard key={index} /> )
          }
        </Grid>
      </Grid>
      <Grid item xs={12} md={3} lg={2}>
        <Grid container direction='column' alignItems='center' spacing={2} className={classes.projectSource}>
          <Grid item>
            <a className={classes.siteLink} target='_blank' href="http://mh-joneydi.ir/" rel="noreferrer">
              <Avatar src={profileImg} className={classes.avatar} />
            </a>
          </Grid>
          <Grid item>
            <Typography variant='caption'>Implemented by <a className={classes.siteLink} target='_blank' href="http://mh-joneydi.ir/" rel="noreferrer">mh-joneydi</a></Typography>
          </Grid>
          <Grid item dir='ltr'>
            <Button 
              href='https://github.com/mh-joneydi/demo-app'
              target='_blank'
              variant='contained' 
              color='secondary' 
              startIcon={<BsGithub />}
            >
              visit source
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Home