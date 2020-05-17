import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function TextButtons() {
  const classes = useStyles();

 const createTable = (n) => {
    const items = []
    for (let i = 1; i <= n; i++) {
     
      items.push(<Button color="primary">{i}</Button>)
    }
    return items
  }

  return (
    <div className={classes.root}>
     {createTable(30)}
    </div>
  );
}
