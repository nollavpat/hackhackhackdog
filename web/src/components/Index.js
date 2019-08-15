import React from 'react';
import {Button, Carousel} from 'antd-mobile';

import Banner from './Banner';

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
      <Carousel dots autoplay infinite>
        <img src="/img/1.jpg" alt="office 1" height="548" width="360" />
        <img src="/img/2.jpg" alt="office 2" height="548" width="360" />
        <img src="/img/3.jpg" alt="office 3" height="548" width="360" />
        <img src="/img/4.jpg" alt="office 4" height="548" width="360" />
      </Carousel>
    </div>
  );
};

export default Index;
