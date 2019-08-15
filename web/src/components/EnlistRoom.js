import React from 'react';
import {Button, List, InputItem, DatePicker, Checkbox} from 'antd-mobile';

import Banner from './Banner';

const EnlistRoom = ({history}) => {
  return (
    <div style={{background: '#59A18B', overflowY: 'auto'}}>
      <Banner
        caption="Your Room Listing Set up"
        color="#1A605E"
        backable
        history={history}
      />
      <div
        style={{
          paddingTop: '20px',
          paddingRight: '10px',
          paddingLeft: '10px',
        }}
      >
        <List>
          <InputItem>Location</InputItem>
          <InputItem>Prop Type</InputItem>
          <InputItem>Bldg Name</InputItem>
          <InputItem>Floor</InputItem>
          <InputItem>Room No</InputItem>
          <InputItem>Room Cap</InputItem>
        </List>
        <List
          style={{marginTop: '10px', backgroundColor: ' #59A18B'}}
          renderHeader={() => (
            <span
              style={{
                color: 'white',
                fontWeight: '400',
                fontSize: '14px',
                marginLeft: '-10px',
              }}
            >
              Available Equipments
            </span>
          )}
        >
          <List.Item>
            <Checkbox>
              <span style={{marginLeft: '5px'}}>Projector</span>
            </Checkbox>
          </List.Item>
          <List.Item>
            <Checkbox>
              <span style={{marginLeft: '5px'}}>Smart TV</span>
            </Checkbox>
          </List.Item>
          <List.Item>
            <Checkbox>
              <span style={{marginLeft: '5px'}}>Whiteboard</span>
            </Checkbox>
          </List.Item>
          <List.Item>
            <Checkbox>
              <span style={{marginLeft: '5px'}}>PA System</span>
            </Checkbox>
          </List.Item>
        </List>
        <div
          style={{
            paddingTop: '20px',
            paddingRight: '15px',
            paddingLeft: '15px',
          }}
        >
          <span
            style={{
              color: 'white',
              fontWeight: '400',
              fontSize: '14px',
            }}
          >
            Add photos
          </span>
          <div style={{marginTop: '10px', marginBottom: '10px'}}>
            <div style={{height: '150px', width: '320px', display: 'flex'}}>
              <div
                style={{
                  height: '150px',
                  width: '150px',
                  marginRight: '10px',
                  backgroundColor: '#000',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                  alt="office 1"
                  height="150"
                  width="150"
                />
              </div>
              <div
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: '#000',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                  alt="office 1"
                  height="150"
                  width="150"
                />
              </div>
            </div>
            <div
              style={{
                height: '150px',
                width: '320px',
                display: 'flex',
                marginTop: '10px',
              }}
            >
              <div
                style={{
                  height: '150px',
                  width: '150px',
                  marginRight: '10px',
                  backgroundColor: '#000',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                  alt="office 1"
                  height="150"
                  width="150"
                />
              </div>
              <div
                style={{
                  height: '150px',
                  width: '150px',
                  backgroundColor: '#000',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                  alt="office 1"
                  height="150"
                  width="150"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: '100vw',
            margin: 0,
            marginLeft: '-10px',
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
            ENLIST PROPERTY
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EnlistRoom;
