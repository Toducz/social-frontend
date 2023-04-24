import makeStyles from '@mui/material/styles/makeStyles';

export const useStyles = makeStyles((theme) =>
  theme.palette.type === 'light'
    ? {
        info: {
          color: theme.palette.info.main,
        },
        warning: {
          color: theme.palette.warning.main,
        },
        error: {
          color: theme.palette.error.main,
        },
        success: {
          color: theme.palette.success.main,
        },
      }
    : {
        info: {
          color: theme.palette.info.dark,
        },
        warning: {
          color: theme.palette.warning.dark,
        },
        error: {
          color: theme.palette.error.dark,
        },
        success: {
          color: theme.palette.success.main,
        },
      },
);
