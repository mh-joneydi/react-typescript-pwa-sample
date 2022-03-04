import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core'
import Header from 'components/layout/Header';
import { Route, Switch } from 'react-router';
import routes from 'utility/routes';
import PageNotFound from 'pages/PageNotFound';
import { BrowserRouter } from 'react-router-dom';

const useStyles = makeStyles(theme=> ({
  main: {
    flexGrow: 1,
    margin: theme.spacing(4,'auto')
  }
}));

function App() {

  const classes = useStyles();

  return (
    <React.Fragment>
      <Header />  
      <Container component='main' className={classes.main}>
        <BrowserRouter>
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
        </BrowserRouter>
      </Container>
    </React.Fragment>
  );
}

export default App;
