import React from 'react';
import { BottomNavigation, BottomNavigationAction, Container, isWidthDown, makeStyles, withWidth, WithWidthProps } from '@material-ui/core'
import Header from 'components/layout/Header';
import { Route, Switch } from 'react-router';
import routes from 'utility/routes';
import PageNotFound from 'pages/PageNotFound';
import { BrowserRouter } from 'react-router-dom';
import MobileHeader from 'components/layout/MobileHeader';
import { IoAddCircle, IoList, IoLogoReact, IoPerson } from 'react-icons/io5';
import { RiChat1Fill } from 'react-icons/ri';
import GlobalAlert from 'components/core/GlobalAlert';
import ImageLightBox from 'components/core/ImageLightBox';

const useStyles = makeStyles(theme=> ({
  main: {
    flexGrow: 1,
    margin: theme.spacing(4,'auto', 10),
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      overflow: 'hidden',
    }
  },
  bottomNavigation: {
    alignItems: 'stretch',
    backgroundColor: '#fff',
    bottom: 0,
    boxShadow: '0 -1px 2px 0 rgb(0 0 0 / 12%)',
    display: 'flex',
    height: 56,
    left: 0,
    opacity: 1,
    position: 'fixed',
    width: '100%',
    zIndex: theme.zIndex.appBar,
    '& svg': {
      fontSize: 22,
      marginBottom: theme.spacing(0.5)
    },
    '& .MuiBottomNavigationAction-root': {
      minWidth: 0
    }
  }
}));

const App: React.FC<WithWidthProps> = ({ width })=> {

  const classes = useStyles(),
  isMobile = isWidthDown('sm', width!);

  return (
    <BrowserRouter>
      {
        isMobile
        ? <MobileHeader />
        : <Header />
      }
      <Container component='main' className={classes.main}>
          <Switch>
                {
                    Object.values(routes).map( route=> (
                        <Route 
                            path={route.path} 
                            key={route.path}
                            exact 
                            component={route.Component}
                        />
                    ))
                }
                <Route component={PageNotFound}/>
            </Switch>
      </Container>
      {
        isMobile && (
          <BottomNavigation showLabels classes={{ root: classes.bottomNavigation }}>
            <BottomNavigationAction label="آگهی ها" icon={<IoLogoReact />} />
            <BottomNavigationAction label="دسته ها" icon={<IoList />} />
            <BottomNavigationAction label="ثبت آگهی" icon={<IoAddCircle />} />
            <BottomNavigationAction label="چت" icon={<RiChat1Fill />} />
            <BottomNavigationAction label="پروفایل" icon={<IoPerson />} />
          </BottomNavigation>
        )
      }
      <GlobalAlert />
      <ImageLightBox />
    </BrowserRouter>
  );
}

export default withWidth({ noSSR: true })(App);
