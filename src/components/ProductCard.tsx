import { Grid, makeStyles, Typography } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab';
import { IProductDetails } from 'features/products/productsSlice'
import { splitAmount } from 'lib';
import React from 'react'

interface IProductCardProps {
    details?: IProductDetails
}

const useStyles = makeStyles(theme=> ({
    container: {
        padding: theme.spacing(2),
        background: '#fff',
        borderRadius: theme.shape.borderRadius,
        height: 168,
        boxShadow: 'inset 0 0 0 1px rgb(0 0 0 / 8%), inset 0 0 0 1px #fff'
    },
    info: {
        height: '100%'
    },
    photoContainer: {
        marginRight: theme.spacing(0.5),
        maxHeight: '100%'
    },
    photo: {
        display: 'block',
        height: '100%',
        '-o-object-fit': 'cover',
        objectFit: 'cover',
        width: 136,
        borderRadius: theme.shape.borderRadius,
        background: theme.palette.grey[200]
    }
}));

const ProductCard: React.FC<IProductCardProps> = ({ details }) => {
    const classes = useStyles();

    return (
        <Grid item xs={12} md={6} lg={4}>
            <Grid container className={classes.container}>
                <Grid item xs>
                    <Grid container direction='column' justifyContent='space-between' className={classes.info}>
                        <Grid item>
                            <Typography variant='subtitle1'>
                                {
                                    details
                                    ? details.title
                                    : <Skeleton variant='text' width={'80%'} />
                                }
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='body2' color='textSecondary'>
                                {
                                    details
                                    ? `${splitAmount(details.price)} تومان`
                                    : <Skeleton variant='text' width={'60%'} />
                                }
                            </Typography>
                            <Typography variant='caption' color='textSecondary'>
                                {
                                    details
                                    ? `${details.time} در ${details.city}`
                                    : <Skeleton variant='text' width={'90%'} />
                                }
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.photoContainer}>
                    {
                        details
                        ? <img src={details.photos[0]+details.id*2} className={classes.photo} alt={details.title} />
                        : <Skeleton className={classes.photo} variant='rect' />
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ProductCard