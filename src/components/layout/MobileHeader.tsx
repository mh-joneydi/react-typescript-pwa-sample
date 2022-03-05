import {  Button, Chip, Divider, Grid, InputAdornment, InputBase, makeStyles } from '@material-ui/core'
import clsx from 'clsx';
import React from 'react'
import { FiMapPin } from 'react-icons/fi';
import { IoSearch } from 'react-icons/io5';

const useStyles = makeStyles(theme=> ({
    appBar: {
        position: 'sticky',
        top: 0,
        zIndex: theme.zIndex.appBar,
        width: '100%',
        backgroundColor: '#fff',
    },
    bars: {
        boxShadow: '0 1px 2px 0 rgb(0 0 0 / 12%)',
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0,2)
    },
    searchbar: {
        height: 65,
        position: 'relative',
        zIndex: theme.zIndex.tooltip,
    },
    toolbar: {
        height: '3rem',
        boxSizing: 'content-box',
        overflow: 'scroll',
        '&::-webkit-scrollbar': { 
            height: '0 !important' 
        },
        '-ms-overflow-style': 'none',
        '&>*': {
            margin: theme.spacing(0,0.5)
        }
    },
    searchBox: {
        width: '100%',
        backgroundColor: 'rgba(0,0,0,.04)',
        padding: theme.spacing(0.25,0.75),
        borderRadius: theme.shape.borderRadius,
        '& svg, & button *': {
            color: theme.palette.text.hint,
        },
        '& svg': {
            fontSize: 18,
            verticalAlign: 'middle'
        }
    },
    divider: {
        margin: theme.spacing(1,0.5)
    },
}));

const MobileHeader = () => {
    
    const classes = useStyles();

    return (
        <div className={classes.appBar}>
            <div className={clsx(classes.bars, classes.searchbar)}>
                <div className={classes.searchBox}>
                    <Grid container wrap='nowrap' alignItems='center'>
                        <Grid item xs>
                            <InputBase
                                fullWidth
                                startAdornment={( 
                                    <InputAdornment position="start"> 
                                        <IoSearch />
                                    </InputAdornment>
                                )}
                            />
                        </Grid>
                        <Divider variant='middle' flexItem orientation="vertical" className={classes.divider} />
                        <Grid item dir='ltr'>
                            <Button size='small' startIcon={<FiMapPin />}>تهران</Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div className={clsx(classes.bars, classes.toolbar)}>
                {
                    [...new Array(20)].map(()=> (
                        <Chip
                            label="لورم ایپسوم"
                            variant="outlined"
                            disabled
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default MobileHeader;
