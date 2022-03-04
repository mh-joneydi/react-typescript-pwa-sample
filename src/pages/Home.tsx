import { Button, Divider, Grid, makeStyles, Typography } from '@material-ui/core';
import ProductCard from 'components/ProductCard';
import { fetchProducts } from 'features/products/productsSlice'
import React from 'react'
import { BsGithub } from 'react-icons/bs';
import { useAppDispatch, useAppSelector } from 'store'

const useStyles = makeStyles(theme=> ({
  divider: {
    margin: theme.spacing(1, 'auto')
  }
}));

const Home = () => {

  const dispatch = useAppDispatch(),
  classes = useStyles(),
  products = useAppSelector( state=> state.products && Object.values(state.products) );

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
        <Grid container direction='column' alignItems='center' spacing={1}>
          <Grid item>
            <Typography variant='caption'>Implemented by mh-joneydi</Typography>
          </Grid>
          <Grid item dir='ltr'>
            <Button 
              href='https://github.com/mh-joneydi/demo-app'
              target='_blank'
              variant='contained' 
              color='secondary' 
              size='large' 
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