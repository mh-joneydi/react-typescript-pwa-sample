import { createTheme , alpha, responsiveFontSizes } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { IRANSans_bold, IRANSans_light, IRANSans_regular } from "./fonts";

// costomized Theme 
const appTheme = createTheme({
  direction: 'rtl',
  // costomizing palette
  palette: {
    contrastThreshold: 2,
    tonalOffset: 0.09,
    background: {
      default: '#fff'
    },
    primary: {
      main: '#a62626'
    },
    secondary: {
      main: '#0d1117'
    },
    info: {
      main: '#ffcb05'
    },
    error: {
      main: '#e5082e'
    },
    text: {
      primary: 'rgba(0,0,0,.87)',
    },
    action: {
      disabled: 'rgba(100,116,139, 0.25)',
      disabledBackground: 'rgba(100,116,139, 0.09)',
      hover: 'rgba(100,116,139, 0.04)',
      focus: 'rgba(100,116,139, 0.12)',
      selected: 'rgba(100,116,139, 0.08)'
    },

  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768, 
      md: 980, 
      lg: 1440,
      xl: 1920
    }
  }, 
  shadows: [
    'none',
    '0px 4px 60px -5px #a6262615',
    '0px 4px 60px -5px #a6262616',
    '0px 4px 60px -5px #a6262617',
    '0px 4px 60px -5px #a6262618',
    '0px 4px 60px -5px #a6262619',
    '0px 4px 60px -5px #a6262620',
    '0px 4px 60px -5px #a6262621',
    '0px 4px 60px -5px #a6262622',
    '0px 4px 60px -5px #a6262623',
    '0px 4px 60px -5px #a6262624',
    '0px 4px 60px -5px #a6262625',
    '0px 4px 60px -5px #a6262626',
    '0px 4px 60px -5px #a6262627',
    '0px 4px 60px -5px #a6262628',
    '0px 4px 60px -5px #a6262629',
    '0px 4px 60px -5px #a6262630',
    '0px 4px 60px -5px #a6262631',
    '0px 4px 60px -5px #a6262632',
    '0px 4px 60px -5px #a6262633',
    '0px 4px 60px -5px #a6262634',
    '0px 4px 60px -5px #a6262635',
    '0px 4px 60px -5px #a6262636',
    '0px 4px 60px -5px #a6262637',
    '0px 4px 60px -5px #a6262638',
  ],
  shape: {
    borderRadius: 4
  },
  // costomizing typography
  typography: {
    fontFamily: [
      'IRANSans',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontWeight: 900,
      // fontSize: "2.488rem",
    },
    h2: {
      fontWeight: 900,
      // fontSize: "2.074rem",
    },
    h3: {
      fontWeight: 900,
      // fontSize: "1.728rem",
    },
    h4: {
      fontWeight: 900,
      // fontSize: "1.44rem",
    },
    h5: {
      fontWeight: 900,
      // fontSize: "1.1rem",
    },
    h6: {
      fontWeight: 900,
      // fontSize: "1rem",
    },
    subtitle1: {
      fontWeight: 600,
    },
    subtitle2: {
      fontWeight: 600,
    },
  },
  // costomizing Material-UI components & modify Global styles
  overrides: {
    MuiTab: {
      root: {
        fontWeight: 700
      }
    },
    MuiAvatar: {
      colorDefault: {
        backgroundColor: 'rgba(100,116,139, 0.6)'
      },
      root: {
        width: 45,
        height: 45
      }
    },
    MuiFormControlLabel: {
      root: {
        marginRight: -11,
        marginLeft: 16
      },
      label: {
        userSelect: 'none'
      }
    },  
    MuiFormHelperText: {
      root: {
        textAlign: 'center'
      }
    },
    MuiInputBase: {
      root: {
        boxShadow: '0px 10px 27px 0 #a6262608',
      }
    },
    MuiOutlinedInput: {
      root: {
        color: 'rgb(135,147,165)', 
        '&, & *': {
          transition: 'all 0.2s cubic-bezier(.4,0,.2,1)',
        },
        backgroundColor: 'rgba(152,163,184, 0.135)',
        '&.Mui-disabled': {
          backgroundColor: 'rgba(152,163,184, 0.1)',
          color: 'rgba(135,147,165, 0.5)',
        },
        '&.Mui-focused': {
          '&.Mui-error': {
            backgroundColor: '#e5082e10'
          },
          backgroundColor: 'rgba(59,130,246,0.1)'
        }, 
        '&.Mui-disabled .MuiOutlinedInput-notchedOutline, &:not(.Mui-focused):not(.Mui-error):hover .MuiOutlinedInput-notchedOutline': {
          borderColor: 'transparent'
        }
      },
      input: {
        padding: 16,
      },
      notchedOutline: {
        borderColor: 'transparent'
      },
    },
    MuiButton: {
      text: {
        fontSize: '0.75rem',
        lineHeight: 2
      },
      iconSizeMedium: {
        '& > *:first-child': {
          fontSize: 16
        }
      }
    },
    MuiSwitch: {
      switchBase: {
        color: '#ddd'
      }
    },
    MuiCssBaseline: {
      '@global': {
        '*:not(input, textarea)': {
          'user-select': 'none', 
          '-moz-user-select': 'none', /* Firefox */
          '-ms-user-select': 'none', /* Internet Explorer */
          '-khtml-user-select': 'none', /* KHTML browsers (e.g. Konqueror) */
          '-webkit-user-select': 'none', /* Chrome, Safari, and Opera */
          '-webkit-touch-callout': 'none', /* Disable Android and iOS callouts*/
        },
        '@font-face': [IRANSans_light, IRANSans_regular, IRANSans_bold] as any,
        'body': {
          direction: 'rtl',
          '& *':{
            "scrollbarColor": `${alpha(grey[500], 0.5 )} transparent`,
            "scrollbarWidth": 'thin',
          },
          '& *::-webkit-scrollbar': {
            width: '4px',
            height: '4px'
          },
          '& *::-webkit-scrollbar-thumb': {
              backgroundColor: alpha(grey[500], 0.5 ),
              borderRadius: 5
          },
          '& *::-webkit-scrollbar-thumb:hover': {
              backgroundColor: alpha(grey[500], 0.45 )
          },
          '& *::-webkit-scrollbar-thumb:active': {
            backgroundColor: alpha(grey[500], 0.4 )
          },
        },
        '.hideOnPrint': {
          '@media print': {
            display: 'none !important'
          }
        },
        '*': {
          '@media print': {
            '&::-webkit-scrollbar': { 
              width: '0 !important' 
            },
            overflow: '-moz-scrollbars-none',
            '-ms-overflow-style': 'none',
          }
        },
        'a': {
          textDecoration: 'none',
        },
        '.MuiFormControl-root:not([dir="ltr"]) .MuiFormLabel-root' : {
          left: 'unset',
          right: 0,
        },
        '.MuiFormControl-root:not([dir="ltr"]) .MuiInputLabel-root' : {
          transformOrigin: 'top right'
        },
        '.MuiFormControl-root:not([dir="ltr"]) .MuiInputLabel-outlined' : {
          transform: 'translate(-14px, 18px) scale(1)'
        },
        '.MuiFormControl-root:not([dir="ltr"]) .MuiInputLabel-outlined.MuiInputLabel-marginDense': {
          transform: 'translate(-14px, 12px) scale(1)'
        },
        '.MuiFormControl-root .MuiInputLabel-outlined' : {
          transform: 'translate(14px, 18px) scale(1)'
        },
        '.MuiFormControl-root:not([dir="ltr"]) .MuiInputLabel-outlined.MuiInputLabel-shrink' : {
          transform: 'translate(-14px, -6px) scale(0.75)'
        },
        '.MuiFormControl-root:not([dir="ltr"]) legend' : {
          textAlign: 'right'
        },
        '.MuiFormControl-root:not([dir="ltr"]) .MuiSelect-outlined.MuiSelect-outlined' : {
          paddingLeft: '32px',
          paddingRight: '14px',
          borderRadius: 14
        },
        '.MuiFormControl-root:not([dir="ltr"]) .MuiSelect-iconOutlined' : {
          left: '7px',
          right: 'unset'
        },
        '.MuiIconButton-label' : {
          fontSize: '90%'
        },
        '#root': {
          minHeight: '100vh',
          width: '100%',
          // overflowX: 'hidden',
          display: 'flex',
          flexFlow: 'column wrap',
        },
        '.space-between-letters': {
          letterSpacing: '5px !important'
        },
        '.text-center': {
          textAlign: 'center'
        },
        'input::-webkit-outer-spin-button, input::-webkit-inner-spin-button' : {
          '-webkit-appearance': 'none',
          margin: 0
        },
        'input[type=number]': {
          '-moz-appearance': 'textfield'
        },
        // swiper 
        '.swiper-button-next, .swiper-rtl .swiper-button-prev': {
          right: 20
        },
        '.swiper-button-prev, .swiper-rtl .swiper-button-next': {
          left: 20
        },
        // swiper 
        // react image lightbox
        '.ReactModal__Overlay': {
          'z-index': '1300 !important',
          direction: 'ltr'
        }
      }
    }
  },
})

export default responsiveFontSizes(appTheme);