import { isWidthDown, makeStyles, Snackbar, withWidth, WithWidthProps } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { hideAlert, IAlertInfo } from "features/alert/alertSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "store";


const useStyle = makeStyles( theme=> ({
    alert: {
        width: 450,
        [theme.breakpoints.down('xs')]: {
            width: '90vw'
        },
        padding: theme.spacing(0.75,1.5),
        '& div.MuiAlert-icon': {
            marginRight: 0,
            marginLeft: '12px'
        },
        '& div.MuiAlert-action': {
            marginLeft: '-12px',
            marginRight: 'auto'
        }
    }
}));

const GlobalAlerts: React.FC<WithWidthProps> = ({ width }) => {
    const classes = useStyle(),
    { snackPack } = useAppSelector( state=> ({
        snackPack: state.globalAlert
    })),
    [open, setOpen] = useState<boolean>(false),
    [messageInfo, setMessageInfo] = useState<IAlertInfo>(),
    afteExitHandler = () => setMessageInfo(undefined),
    dispacher = useDispatch(),
    handleClose = (event: Event, reason: any) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
    };
    useEffect(() => {
        if (snackPack.length && !messageInfo) {
          // Set a new snack when we don't have an active one
          setMessageInfo({ ...snackPack[0] });
          dispacher(hideAlert());
          setOpen(true);
        } else if (snackPack.length && messageInfo && open) {
          // Close an active snack when a new one is added
          setOpen(false);
        }
      }, [snackPack, messageInfo, open, dispacher]);

    const [vertical = 'bottom', horizontal = 'right'] = messageInfo?.anchorOrigin?.split('-') || [] as any[],
    message = messageInfo? messageInfo.message: '',
    severity = messageInfo?.severity || 'info',
    color = messageInfo?.color || severity,
    autoHideDuration = (messageInfo?.autoHide === false ) ? null : 3000;
    
    return ( 
        <Snackbar 
            open={open} 
            autoHideDuration={autoHideDuration}
            anchorOrigin={{ vertical, horizontal: isWidthDown('xs', width!) ? 'center' : horizontal }}
            onClose={handleClose as any}
            TransitionProps={{ onExited: afteExitHandler }}
            key={messageInfo?.key}
        >
            <Alert 
                dir='rtl'
                severity={severity} 
                color={color} 
                variant='filled' 
                onClose={handleClose as any}
                className={classes.alert}
            >
                { message }
            </Alert>
        </Snackbar>
    );
}
 


export default withWidth({ noSSR: true })(GlobalAlerts);