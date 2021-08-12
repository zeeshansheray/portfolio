import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import SvgIcons from '../icons/SvgIcons';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding        : '7px 14px',
    backgroundColor: 'inherit',
    border         : '1px solid #64ffda',
    boxShadow      : 'none',
    fontSize       : '16px',
    color          : '#8892b0',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));


const TimelineDotStyle = {
  height         : '50px',
  width          : '50px',
  overflow       : 'hidden',
  display        : 'flex',
  justifyContent : 'center',
  alignItems     : 'center',
  flexDirection  : 'column',
  backgroundColor: '#DCDCDC',
}

const title = {
  fontSize      : '16px',
  fontWeight    : 550,
  textDecoration: 'none',
  color         : '#8892b0',
}

const subTitle = {
  fontSize: '14px',
  color   : '#64ffda',
}

const subTitle2 = {
  fontSize: '14px',
  color   : '#8892b0',

}



export default function CustomTimeline({content}) {
  const classes = useStyles();

  return (
    <Timeline align="alternate">
    {content.map((element, idx)=>
      <TimelineItem key={idx}>
            <TimelineOppositeContent>
              <Typography  variant="body2" color="textSecondary">
             
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot className="timelineDot" style={TimelineDotStyle}>
                <img className="image" src={element.icon} alt="" width="40px" height="40px"/>
              </TimelineDot>
              {idx !== 3 && <TimelineConnector style={{height: '8vh'}} />}
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper + ' outerBox'}>
                <div>
                  <a style={title} target="_blank" href={element.website}>{element.institutionName}</a>
                 </div>
                <div>
                 <span style={subTitle}>
                  <SvgIcons.LocationIcon /> 
                  {element.location}
                  &nbsp;—&nbsp;
                 </span>
                  <span style={subTitle2}>
                    {element.study}
                  </span>
                </div>
              </Paper>
            </TimelineContent>
          </TimelineItem>
    )}
    </Timeline>
  );
}
