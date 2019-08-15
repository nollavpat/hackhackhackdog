import React from 'react';
import {Button, List, InputItem, DatePicker, WhiteSpace} from 'antd-mobile';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';

import Banner from './Banner';

const Card = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-around',
      width: '340px',
      marginTop: '20px',
    }}
  >
    <div style={{width: '160px', height: '140px', background: '#000'}}>a</div>
    <div style={{width: '160px', height: '140px', color: '#FFF'}}>
      <div style={{fontSize: '12px', wordWrap: 'break-word'}}>
        MR34A, Floor 34, Unionbank Plaza.
      </div>
      <ul>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ul>
      <Button size="small">Reserve now</Button>
    </div>
  </div>
);

const ResultRoom = ({history}) => {
  return (
    <div
      style={{
        background: '#59A18B',
        overflowY: 'auto',
        paddingBottom: '20px',
      }}
    >
      <Banner caption="Meeting Rooms" color="#1A605E" backable>
        <Button
          inline
          size="small"
          style={{
            borderRadius: '51.5px',
          }}
          onClick={() => {
            history.push('/');
          }}
        >
          Home
        </Button>
        <Button
          inline
          size="small"
          style={{
            marginLeft: '8px',
            borderRadius: '51.5px',
          }}
          onClick={() => {
            history.push('/enlist');
          }}
        >
          Enlist a room
        </Button>
      </Banner>
      <List
        style={{marginLeft: '20px', marginRight: '20px', marginTop: '20px'}}
      >
        <InputItem>Location</InputItem>
        <DatePicker locale={enUs} mode="date">
          <List.Item arrow="horizontal">Date</List.Item>
        </DatePicker>
      </List>
      <List
        style={{marginTop: '10px', marginLeft: '20px', marginRight: '20px'}}
        renderHeader={() => (
          <span
            style={{
              color: 'white',
              fontWeight: '400',
              fontSize: '14px',
              marginLeft: '-10px',
            }}
          >
            Duration
          </span>
        )}
      >
        <DatePicker locale={enUs} mode="date">
          <List.Item arrow="horizontal">Start</List.Item>
        </DatePicker>
        <DatePicker locale={enUs} mode="date">
          <List.Item arrow="horizontal">End</List.Item>
        </DatePicker>
      </List>
      <div
        style={{
          paddingTop: '10px',
          paddingRight: '10px',
          paddingLeft: '10px',
        }}
      >
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default ResultRoom;
