import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  radioHeader: {
    padding: '0 2px',
  },
});

const DisplayRuleFormHeader: FC = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={1}
    >
      <Grid item xs={3}>
        <Typography
          variant="caption"
          display="block"
          align="center"
          color="textSecondary"
        >
          ディレクトリ
        </Typography>
      </Grid>
      <Grid item xs={2} container justify="center" alignItems="center">
        <Grid item>
          <Typography
            className={classes.radioHeader}
            variant="caption"
            color="textSecondary"
          >
            完全
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            className={classes.radioHeader}
            variant="caption"
            color="textSecondary"
          >
            前方
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            className={classes.radioHeader}
            variant="caption"
            color="textSecondary"
          >
            部分
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Typography
          variant="caption"
          display="block"
          align="center"
          color="textSecondary"
        >
          ページタイトル
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography
          variant="caption"
          display="block"
          align="center"
          color="textSecondary"
        >
          略称
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography
          variant="caption"
          display="block"
          align="center"
          color="textSecondary"
        >
          色
        </Typography>
      </Grid>
    </Grid>
  );
};

export default DisplayRuleFormHeader;
