import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import SvgIcons from '../icons/SvgIcons';

const TimelineDotStyle = {
  height: '50px',
  width: '50px',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: '#DCDCDC',
};

const title = {
  fontSize: '16px',
  fontWeight: 550,
  textDecoration: 'none',
  color: '#8892b0',
};

const subTitle = {
  fontSize: '14px',
  color: '#64ffda',
};

const subTitle2 = {
  fontSize: '14px',
  color: '#8892b0',
};

export default function CustomTimeline({ content }) {
  return (
    <Timeline position="alternate">
      {content.map((element, idx) => (
        <TimelineItem key={idx}>
          <TimelineSeparator>
            <TimelineDot style={TimelineDotStyle}>
              <img src={element.icon} alt="" width="40px" height="40px" />
            </TimelineDot>
            {idx !== 4 && <TimelineConnector style={{ height: '8vh' }} />}
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} style={{ padding: '7px 14px', backgroundColor: 'inherit', border: '1px solid #64ffda', boxShadow: 'none', color: '#8892b0' }}>
              <div>
                <a style={title} target="_blank" href={element.website}>
                  {element.institutionName}
                </a>
              </div>
              <div>
                <span style={subTitle}>
                  <SvgIcons.LocationIcon /> {element.location} &nbsp;—&nbsp;
                </span>
                <span style={subTitle2}>{element.study}</span>
              </div>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
