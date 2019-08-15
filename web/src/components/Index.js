import React from 'react';
import {Button} from 'antd-mobile';

import Banner from './Banner';

const Index = ({history}) => {
  return (
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
      >
        Enlist a room
      </Button>
    </Banner>
  );
};

export default Index;
