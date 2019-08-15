import React, {useState} from 'react';
import {Button, List, InputItem, Checkbox} from 'antd-mobile';
import axios from 'axios';

import Banner from './Banner';
import {getRandomSeed} from '../randomSeeds';

const EnlistRoom = ({history}) => {
  const [location, setLocation] = useState('');
  const [propType, setPropType] = useState('');
  const [buildingName, setBuildingName] = useState('');
  const [floor, setFloor] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [roomCapacity, setRoomCapacity] = useState(1);
  const [equipments, addEquipment] = useState([]);

  return (
    <div style={{background: '#59A18B', overflowY: 'auto'}}>
      <div style={{position: 'absolute', top: '10px', right: '10px'}}>
        <Button
          size="small"
          onClick={() => {
            let index = 0;
            let x; // eslint-disable-line prefer-const
            const parameters = [
              'Pasig City, Manila',
              'Cafe',
              'Cafe Rizal',
              '2nd',
              205,
              5,
              ['Whiteboard', 'Projector'],
              true,
            ];
            const functions = [
              setLocation,
              setPropType,
              setBuildingName,
              setFloor,
              setRoomNumber,
              setRoomCapacity,
              addEquipment,
              () => {
                clearInterval(x);
              },
            ];

            x = setInterval(() => {
              functions[index](parameters[index]);
              index++;
            }, 300);
          }}
        >
          ?
        </Button>
      </div>
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
          <InputItem value={location} onChange={setLocation}>
            Location
          </InputItem>
          <InputItem value={propType} onChange={setPropType}>
            Prop Type
          </InputItem>
          <InputItem value={buildingName} onChange={setBuildingName}>
            Bldg Name
          </InputItem>
          <InputItem value={floor} onChange={setFloor}>
            Floor
          </InputItem>
          <InputItem value={roomNumber} onChange={setRoomNumber}>
            Room No
          </InputItem>
          <InputItem
            type="digit"
            value={roomCapacity}
            onChange={setRoomCapacity}
          >
            Room Cap
          </InputItem>
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
            <Checkbox
              checked={equipments.includes('Projector')}
              value="Projector"
              onChange={(e) => {
                if (e.target.checked) {
                  addEquipment([...equipments, e.target.value]);
                } else {
                  addEquipment(
                      equipments.filter((eq) => eq !== e.target.value)
                  );
                }
              }}
            >
              <span style={{marginLeft: '5px'}}>Projector</span>
            </Checkbox>
          </List.Item>
          <List.Item>
            <Checkbox
              checked={equipments.includes('Smart TV')}
              value="Smart TV"
              onChange={(e) => {
                if (e.target.checked) {
                  addEquipment([...equipments, e.target.value]);
                } else {
                  addEquipment(
                      equipments.filter((eq) => eq !== e.target.value)
                  );
                }
              }}
            >
              <span style={{marginLeft: '5px'}}>Smart TV</span>
            </Checkbox>
          </List.Item>
          <List.Item>
            <Checkbox
              checked={equipments.includes('Whiteboard')}
              value="Whiteboard"
              onChange={(e) => {
                if (e.target.checked) {
                  addEquipment([...equipments, e.target.value]);
                } else {
                  addEquipment(
                      equipments.filter((eq) => eq !== e.target.value)
                  );
                }
              }}
            >
              <span style={{marginLeft: '5px'}}>Whiteboard</span>
            </Checkbox>
          </List.Item>
          <List.Item>
            <Checkbox
              checked={equipments.includes('PA System')}
              value="PA System"
              onChange={(e) => {
                if (e.target.checked) {
                  addEquipment([...equipments, e.target.value]);
                } else {
                  addEquipment(
                      equipments.filter((eq) => eq !== e.target.value)
                  );
                }
              }}
            >
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
                  src={getRandomSeed().image}
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
                  src={getRandomSeed().image}
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
                  src={getRandomSeed().image}
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
                  src={getRandomSeed().image}
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
            onClick={async () => {
              await axios.post('http://127.0.0.1:8080/api/ror/rooms/', {
                buildingName,
                equipments,
                roomCapacity,
                locationAddress: location,
                propertyType: propType,
                roomFloor: floor,
                roomType: roomNumber,
                hourlyRate: 300,
              });

              history.push('/search');
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
