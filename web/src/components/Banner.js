import React from 'react';
import {WingBlank, Button} from 'antd-mobile';

const Banner = ({color, caption, backable, history, children}) => (
  <WingBlank
    size="sm"
    style={{
      padding: 0,
      margin: 0,
      height: '192px',
      background: color,
    }}
  >
    {backable && (
      <Button
        style={{
          marginLeft: '20px',
          marginTop: '20px',
          color: '#FFF',
          backgroundColor: '#59A18B',
        }}
        className="am-button-borderfix"
        size="small"
        inline
        activeStyle={{
          color: '#FFF',
          backgroundColor: '#1A605E',
        }}
        className="am-button-borderfix"
        size="small"
        inline
        onClick={() => {
          history.go(-1);
        }}
      >
        back
      </Button>
    )}
    <div
      style={{
        fontSize: '36px',
        padding: '18px',
        lineHeight: '41px',
        align: 'left',
        verticalAlign: 'center',
        color: '#FFF',
        textShadow: '4px 0px 4px rgba(0, 0, 0, 0.25)',
      }}
    >
      {caption}
    </div>
    <div style={{marginTop: '5px', marginLeft: '18px'}}>{children}</div>
  </WingBlank>
);

export default Banner;
