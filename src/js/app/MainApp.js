import React, { Component } from 'react';
import Routes from './routes';
//import injectTapEventPlugin       from 'react-tap-event-plugin';
import MuiThemeProvider           from 'material-ui/styles/MuiThemeProvider';

import theme from './materialTheme'
import Layout from '../components/Layout/Layout'

export default class MainApp extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={theme}>
        <Layout>
          <Routes />
        </Layout>
      </MuiThemeProvider>

    );
  }
}
