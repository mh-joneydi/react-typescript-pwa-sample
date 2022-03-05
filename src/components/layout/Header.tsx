import { Button, Container, Divider, Grid, InputAdornment, InputBase, makeStyles } from '@material-ui/core'
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import { FiChevronDown, FiMapPin, FiMessageCircle, FiUser,  } from "react-icons/fi";
import { IoSearch } from 'react-icons/io5';
import React from 'react'
import { Link } from 'react-router-dom';
import routes from 'utility/routes';

const useStyles = makeStyles(theme=> ({
    appBar: {
        position: 'sticky',
        top: 0,
        height: 65,
        boxShadow: '0 1px 2px 0 rgb(0 0 0 / 12%)',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        zIndex: theme.zIndex.appBar,
        backgroundColor: '#fff'
    },
    searchInput: {
        backgroundColor: 'rgba(0,0,0,.04)',
        padding: theme.spacing(0.5,0,0.5,1.5),
        borderRadius: theme.shape.borderRadius,
        '& svg': {
            margin: theme.spacing(0,1),
            color: theme.palette.grey[400]
        },
        '& input::placeholder': {
            fontSize: theme.typography.body2.fontSize
        },
        maxWidth: 480
    }
}));

const Header = () => {
    
    const classes = useStyles();

    return (
        <div className={classes.appBar}>
            <Container maxWidth='lg'>
                <Grid container justifyContent='space-between' alignItems='center' wrap='nowrap'> 
                    <Grid item xs>
                        <Grid container spacing={4} alignItems='center' wrap='nowrap'>
                            <Grid item>
                                <Grid container wrap='nowrap'>
                                    <Grid item>
                                        <Link to={routes.home.returnURL()}>
                                            <Logo width={50} style={{ verticalAlign: 'middle' }} />
                                        </Link>
                                    </Grid>
                                    <Divider variant='middle' flexItem orientation="vertical" />
                                    <Grid item dir='ltr'>
                                        <Button endIcon={<FiMapPin />}>تهران</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs>
                                <Grid container spacing={2} alignItems='center' wrap='nowrap'>
                                    <Grid item dir='ltr'>
                                        <Button startIcon={<FiChevronDown />}>دسته ها</Button>
                                    </Grid>
                                    <Grid item xs>
                                        <InputBase
                                            fullWidth
                                            className={classes.searchInput}
                                            placeholder="جستجو در همه آگهی ها"
                                            startAdornment={( 
                                                <InputAdornment position="start"> 
                                                    <IoSearch />
                                                </InputAdornment>
                                            )}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container spacing={3} wrap='nowrap' alignItems='center'>    
                            <Grid item dir='ltr'>
                                <Button endIcon={<FiUser />}>پروفایل</Button>
                            </Grid>
                            <Grid item dir='ltr'>
                                <Button endIcon={<FiMessageCircle />}>چت</Button>
                            </Grid>
                            <Grid item>
                                <Button>پشتیبانی</Button>
                            </Grid>
                            <Grid item>
                                <Button variant='contained' color='primary'>ثبت آگهی</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Header;
