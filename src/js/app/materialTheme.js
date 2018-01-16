import { fade } from 'material-ui/utils/colorManipulator'
import * as Colors from 'material-ui/styles/colors';
import { spacing, getMuiTheme } from 'material-ui/styles';

const rawBaseTheme = {
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: Colors.cyan500,
    primary2Color: Colors.cyan700,
    primary3Color: Colors.lightBlack,
    accent1Color: Colors.pinkA200,
    accent2Color: Colors.grey100,
    accent3Color: Colors.grey500,
    textColor: Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.grey300,
    disabledColor: fade(Colors.darkBlack, 0.3)
  }
};

//Theme must be wrapped in funciton getMuiTheme
export default getMuiTheme(rawBaseTheme);


// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
// import * as Colors from 'material-ui/styles/colors';
// import { fade } from 'material-ui/utils/colorManipulator'
//
// const getTheme = () => {
//   let overwrites = {
//     "palette": {
//         "primary1Color": Colors.teal400,
//         "primary2Color": Colors.teal600,
//         "accent1Color": Colors.deepOrange500,
//         "pickerHeaderColor": Colors.teal500
//     }
// };
//   return getMuiTheme(baseTheme, overwrites);
// }
