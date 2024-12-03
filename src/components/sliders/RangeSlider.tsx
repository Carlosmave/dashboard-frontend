import { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { IRangeSlider } from '../../interfaces';

const useStyles = makeStyles({
  root: {
    display: 'flex', 
    justifyContent: 'center'
  },
  sliderContainer: {
    width: 300,
    display: 'flex', 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10px !important'
  },
});

export const RangeSlider = ({lowerBound, upperBound, setUpperBound, setLowerBound}: IRangeSlider) => {
  const classes = useStyles();
  const [value, setValue] = useState([lowerBound, upperBound]);
  const handleChange = (_event: Event, newValue: number | number[]) => {
    setLowerBound((newValue as number[])[0])
    setUpperBound((newValue as number[])[1])
    setValue(newValue as number[]);
  };

  return (
    <div className={classes.root}>
      <div className={classes.sliderContainer}>
      <Typography id="range-slider" gutterBottom>
        Y-Axis Range
      </Typography>
      <Slider
        value={value}
        min={lowerBound}
        step={0.1}
        max={upperBound}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
      />
      </div>
    </div>
  );
}