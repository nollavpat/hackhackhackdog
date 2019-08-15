import React, {useState, useEffect} from 'react';
import {Button, List, InputItem, DatePicker} from 'antd-mobile';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';

import Banner from './Banner';
import {getAllRandomSeed} from '../randomSeeds';

const Cards = ({img, location}) => (
  <div style={{padding: '10px', borderRadius: '50px'}}>
    <div
      style={{
        height: '100px',
        width: '100px',
        background: 'green',
      }}
    >
      <img src={img} width="100" height="100" alt="office" />
    </div>
    <div
      style={{
        height: '20px',
        width: '100px',
        background: 'white',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
    >
      {location}
    </div>
  </div>
);

const SearchRoom = ({history}) => {
  return (
    <div style={{background: '#59A18B', height: '100vh'}}>
      <Banner caption="Room of Requirement" color="#1A605E">
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
      <div
        style={{
          paddingTop: '20px',
          paddingRight: '20px',
          paddingLeft: '20px',
        }}
      >
        <List>
          <InputItem>Location</InputItem>
          <DatePicker locale={enUs} mode="date">
            <List.Item arrow="horizontal">Date</List.Item>
          </DatePicker>
        </List>
        <List
          style={{marginBottom: '20px'}}
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
        <List>
          <InputItem type="digit">Capacity</InputItem>
        </List>
      </div>
      <div
        style={{
          paddingTop: '20px',
          paddingRight: '10px',
          paddingLeft: '10px',
        }}
      >
        <span
          style={{
            color: 'white',
            fontWeight: '400',
            fontSize: '14px',
          }}
        >
          Meeting rooms near you
        </span>
        <div
          style={{
            marginTop: '10px',
            height: '140px',
            width: '100%',
            textAlign: 'center',
            display: 'flex',
            overflowX: 'auto',
            justifyContent: 'flex-start',
          }}
        >
          {getAllRandomSeed().map((pair) => (
            <Cards img={pair.img} location={pair.location} />
          ))}
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          right: '0',
          bottom: '0',
          width: '100vw',
          margin: 0,
          padding: 0,
        }}
      >
        <Button
          style={{
            background: '#1A605E',
            color: '#FFF',
          }}
          activeStyle={{
            background: '#FFF',
            color: '#000',
          }}
        >
          FIND ROOM
        </Button>
      </div>
    </div>
  );
};

export default SearchRoom;
