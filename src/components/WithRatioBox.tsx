import { Box, BoxProps, makeStyles } from '@material-ui/core';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import clsx from 'clsx';
import { calcRatioPercent } from 'lib';
import React from 'react';

interface IWithRatioBoxOwnProps {
    aspectRatio: string | {
        xs?: string
        sm?: string
        md?: string
        lg?: string
        xl?: string
    }
}

type TWithRatioBoxProps = IWithRatioBoxOwnProps&BoxProps;

const useStyles = makeStyles( theme=> ({
    ratio: ( { aspectRatio }: IWithRatioBoxOwnProps )=>{

        const aspectRatioY = typeof aspectRatio === 'string'
        ? { paddingBottom: `${calcRatioPercent(aspectRatio)}%` }
        : { 
            ...Object.fromEntries(
                Object.entries(aspectRatio).map( 
                    ([brakepoint, aspectRatioValue])=> (
                        [ 
                            theme.breakpoints.up(brakepoint as Breakpoint), 
                            { paddingBottom: `${calcRatioPercent(aspectRatioValue)}%` } 
                        ]
                    ) 
                )
            ) 
        }
        
        return ({
            width: '100%',
            position: 'relative',
            ...aspectRatioY
        })
    },
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        flexDirection: 'column',
        '&>*:first-child': {
            flexGrow: 1,
            width: '100%'
        }
    }
}));

const WithRatioBox: React.FC<TWithRatioBoxProps> = ({ aspectRatio, className, ...props }) => {

    const classes = useStyles({ aspectRatio })

    return (
        <div className={classes.ratio}>
            <Box {...props} className={clsx(classes.container, className)} />
        </div>
    );
};

export default WithRatioBox;
