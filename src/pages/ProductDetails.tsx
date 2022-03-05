import { Button, Container, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import { fetchProductsDetails } from 'features/products/productsSlice';
import React from 'react'
import { IoChevronBackOutline } from 'react-icons/io5';
import { HiOutlineBookmark, HiOutlineShare } from "react-icons/hi";
import { useParams } from 'react-router'
import { useAppDispatch, useAppSelector } from 'store'
import { splitAmount } from 'lib';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from 'swiper';

const useStyles = makeStyles(theme=> ({
    arrows: {
        verticalAlign: 'middle',
        fontSize: 12,
        color: theme.palette.text.secondary
    },
    currentPage: {
        color: theme.palette.text.hint
    },
    listItem: {
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
        padding: theme.spacing(1.5,0)
    },
    bodyText: {
        lineHeight: '34px',
        whiteSpace: 'pre-wrap',
    },
    swiper: {

    },
    swiperThumbs: {

    },
}))

const ProductDetails = () => {

    const { productId } = useParams<{ productId: string }>(),
    product = useAppSelector( state=> state.products.details[productId] ),
    classes = useStyles(),
    [thumbsSwiper, setThumbsSwiper] = React.useState(null),
    dispatch = useAppDispatch();

    React.useEffect(()=> {
        dispatch( fetchProductsDetails(productId) )
    }, [productId, dispatch]);

    return product ? (
        <Container maxWidth='md'>
            <Grid container direction='row-reverse' justifyContent='space-between' spacing={4}>
                <Grid item container spacing={1}>
                    {
                        [...new Array(3)].map(()=> (
                            <React.Fragment>
                                <Grid item>
                                    <Typography variant='caption' color='textSecondary'>لورم ایپسوم</Typography>
                                </Grid>
                                <Grid item>
                                    <IoChevronBackOutline className={classes.arrows} />
                                </Grid>
                            </React.Fragment>

                        ))
                    }
                        <Grid item>
                            <Typography variant='caption' className={classes.currentPage}>{product.title}</Typography>
                        </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Swiper
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className={classes.swiper}
                    >
                        {
                            product.photos.map( (src, index)=> (
                                <SwiperSlide>
                                    <img src={`${src}/${product.id*(index+2)}`} alt={`عکس ${index+1}`} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    <Swiper
                        onSwiper={setThumbsSwiper as any}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className={classes.swiperThumbs}
                    >
                        {
                            product.photos.map( (src, index)=> (
                                <SwiperSlide>
                                    <img src={`${src}/${product.id*(index+2)}`} alt={`عکس ${index+1}`} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Grid container direction='column' spacing={3}>
                        <Grid item container direction='column' spacing={2}>
                            <Grid item>
                                <Typography variant='h5'>{product.title}</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant='body1' color='textSecondary'>
                                    {product.time} در {product.city}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container justifyContent='space-between'>
                            <Grid item>
                                <Button size='large' color='primary' variant='contained'>اطلاعات تماس</Button>
                            </Grid>
                            <Grid item>
                                <IconButton>
                                    <HiOutlineBookmark />
                                </IconButton>
                                <IconButton>
                                    <HiOutlineShare />
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container justifyContent='space-between' className={classes.listItem}>
                                <Typography color='textSecondary'>وضعیت</Typography>
                                <Typography>{product.status}</Typography>
                            </Grid>
                            <Grid container justifyContent='space-between' className={classes.listItem}>
                                <Typography color='textSecondary'>قیمت</Typography>
                                <Typography>{splitAmount(product.price)} تومان</Typography>
                            </Grid>
                            <Grid container justifyContent='space-between' className={classes.listItem}>
                                <Typography color='textSecondary'>آخرین به روزرسانی</Typography>
                                <Typography>{product.time}</Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant='subtitle1'>توضیحات</Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.bodyText} variant='body1'>{product.description}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    ) : null
}

export default ProductDetails