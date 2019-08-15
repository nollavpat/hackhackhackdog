import React from 'react';
import {Button, Carousel} from 'antd-mobile';

import Banner from './Banner';
import {imgs} from '../randomSeeds';

const Index = ({history}) => {
  return (
    <div>
      <Banner caption="Room of Requirement" color="#1A605E">
        <Button
          inline
          size="small"
          style={{
            borderRadius: '51.5px',
          }}
          onClick={() => {
            history.push('/search');
          }}
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
          onClick={() => {
            history.push('/enlist');
          }}
        >
          Enlist a room
        </Button>
      </Banner>
      <div
        style={{
          height: '160px',
          textAlign: 'center',
          verticalAlign: 'middle',
          paddingTop: '60px',
          fontSize: '18px',
          paddingRight: '15px',
          paddingLeft: '15px',
          overflowWrap: 'break-word',
          backgroundColor: '#00556b',
          color: '#FFF',
        }}
      >
        <div style={{fontStyle: 'italic'}}>
          {`"It is a room that a person can only enter when they have real ` +
            `need of it. Sometimes it is there, and sometimes it is not, but` +
            ` when it appears, it is always equipped for the seeker's needs"`}
        </div>
        <div style={{textAlign: 'right'}}>- Dobby</div>
      </div>
      <Carousel dots autoplay infinite autoplayInterval="2000">
        {imgs.map((url) => (
          <img src={url} width="360" height="240" key={url} alt="office" />
        ))}
      </Carousel>
      <div
        style={{
          height: '88px',
          lineHeight: '88px',
          textAlign: 'center',
          verticalAlign: 'middle',
          backgroundColor: '#002a32',
          color: '#00d6d6',
          fontSize: '14px',
        }}
      >
        © Copyright August 2019
      </div>
    </div>
  );
};

export default Index;
