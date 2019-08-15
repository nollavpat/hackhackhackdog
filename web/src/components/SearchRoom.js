import React from 'react';
import {Button, List, InputItem, DatePicker} from 'antd-mobile';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';

import Banner from './Banner';

const SearchRoom = () => {
  return (
    <div style={{background: '#59A18B', height: '100vh'}}>
      <Banner caption="Room of Requirement" color="#1A605E">
        <Button
          inline
          size="small"
          style={{
            borderRadius: '51.5px',
          }}
          disabled
        >
          Search room
        </Button>
        <Button
          inline
          size="small"
          style={{
            marginLeft: '8px',
            borderRadius: '51.5px',
          }}
        >
          Enlist a room
        </Button>
      </Banner>
      <div
        style={{
          paddingTop: '30px',
          paddingRight: '10px',
          paddingLeft: '10px',
        }}
      >
        <List>
          <InputItem>Area</InputItem>
          <DatePicker locale={enUs} mode="date">
            <List.Item arrow="horizontal">Date</List.Item>
          </DatePicker>
        </List>
        <List
          style={{marginBottom: '20px'}}
          renderHeader={() => (
            <span
              style={{color: 'white', fontWeight: '600', fontSize: '14px'}}
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
        <List>
          <InputItem type="number">Capacity</InputItem>
        </List>
      </div>
    </div>
  );
};

export default SearchRoom;
