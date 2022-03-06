import { Button, CircularProgress, Container, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import { fetchProductsDetails } from 'features/products/productsSlice';
import React from 'react'
import { IoChevronBackOutline } from 'react-icons/io5';
import { HiOutlineBookmark, HiOutlineShare } from "react-icons/hi";
import { useParams } from 'react-router'
import { useAppDispatch, useAppSelector } from 'store'
import { splitAmount } from 'lib';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper';
import WithRatioBox from "components/WithRatioBox";
import { openLightBox } from 'features/imageLightBox/imageLightBoxSlice';

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
        lineHeight: '35px',
        whiteSpace: 'pre-wrap',
    },
    swiper: {
        '--swiper-navigation-size': '18px',
        '--swiper-theme-color': '#fff',
        '--swiper-pagination-color': '#fff',
        '--swiper-pagination-bullet-inactive-color': '#fff',
        '--swiper-pagination-bullet-inactive-opacity': 0.4,
        '& .swiper-pagination-bullet': {
            transition: 'transform .36s ease,background-color .36s ease,-webkit-transform .36s ease'
        },
        '& .swiper-pagination-bullet-active': {
            transform: 'scale(1.25)'
        },
        marginBottom: theme.spacing(2)
    },
    galleryImage: {
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[1],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        cursor: 'pointer',
        backgroundColor: theme.palette.grey[200]
    },
    swiperThumbs: {
        '& .swiper-slide': {
            opacity: 0.5,
            transition: 'opacity .36s ease',
        },
        '& .swiper-slide-thumb-active': {
            opacity: 1,
        }
    },
    loading: {
        position: 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translate(-50%,50%)'
    }
}))

const ProductDetails = () => {

    const { productId } = useParams<{ productId: string }>(),
    product = useAppSelector( state=> state.products.details[productId] ),
    classes = useStyles(),
    [thumbsSwiper, setThumbsSwiper] = React.useState(null),
    dispatch = useAppDispatch(),
    produnctPhotos = React.useMemo( ()=> (
        product && product.photos.map( (src, index)=> `${src}/${product.id*(index+2)}` )
    ), [product]);

    const showGalleryLightBox = React.useCallback( (index: number)=> {
        dispatch( openLightBox({ images: produnctPhotos, currentIndex: index }) )
    }, [produnctPhotos, dispatch]);

    React.useEffect(()=> {
        dispatch( fetchProductsDetails(productId) )
    }, [productId, dispatch]);

    return product 
    ? (
        <Container maxWidth='md' disableGutters>
            <Grid container direction='row-reverse' justifyContent='space-between' spacing={5}>
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
                        navigation
                        pagination={{ clickable: true }}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs, Pagination]}
                        className={classes.swiper}
                    >
                        {
                            produnctPhotos.map( (src, index)=> (
                                <SwiperSlide onClick={()=> showGalleryLightBox(index)}>
                                    <WithRatioBox
                                        aspectRatio='1/1' 
                                        style={{ backgroundImage: `url(${src})` }}
                                        className={classes.galleryImage} 
                                    />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    <Swiper
                        onSwiper={setThumbsSwiper as any}
                        spaceBetween={16}
                        slidesPerView={5}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className={classes.swiperThumbs}
                    >
                        {
                            produnctPhotos.map( (src, index)=> (
                                <SwiperSlide>
                                    <WithRatioBox
                                        aspectRatio='1/1' 
                                        style={{ backgroundImage: `url(${src})` }}
                                        className={classes.galleryImage} 
                                    />
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
                                    <HiOutlineBookmark size={18} />
                                </IconButton>
                                <IconButton>
                                    <HiOutlineShare size={18} />
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
    ) 
    : (
        <Grid container direction='column' justifyContent='center' alignItems='center' className={classes.loading}>
            <Grid item>
                <CircularProgress size={25} thickness={6} color='inherit' />
            </Grid>
            <Grid item>
                <Typography>در حال دریافت...</Typography>
            </Grid>
        </Grid>
    )
}

export default ProductDetails