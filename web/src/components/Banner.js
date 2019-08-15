import React from 'react';
import {WingBlank} from 'antd-mobile';

const Banner = ({color, caption, children}) => (
  <WingBlank
    size="sm"
    style={{padding: 0, margin: 0, height: '192px', background: color}}
  >
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
    <div style={{marginTop: '5px', marginLeft: '18px'}}>
      {children}
    </div>
  </WingBlank>
);

export default Banner;
