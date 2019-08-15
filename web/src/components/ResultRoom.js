import React, {useEffect, useState} from 'react';
import {Button, List, InputItem, DatePicker} from 'antd-mobile';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';
import axios from 'axios';

import Banner from './Banner';
import {getRandomSeed} from '../randomSeeds';

const Card = ({location, image, equipments, history, details}) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-around',
      width: '340px',
      marginTop: '20px',
    }}
  >
    <div style={{width: '160px', height: '140px', background: '#000'}}>
      <img src={image} height="140" width="140" alt="office" />
    </div>
    <div style={{width: '160px', height: '140px', color: '#FFF'}}>
      <div style={{fontSize: '12px', wordWrap: 'break-word'}}>{location}</div>
      <ul>
        {JSON.parse(equipments).map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
      <Button
        size="small"
        onClick={() => {
          history.push('/room', {
            openLocation: location,
            openDetails: details,
            openEquipments: JSON.parse(equipments),
          });
        }}
      >
        Reserve now
      </Button>
    </div>
  </div>
);

const ResultRoom = ({history}) => {
  const [location, setLocation] = useState('');
  const [date, setDate] = useState(null);
  const [timeStart, setTimeStart] = useState(null);
  const [timeEnd, setTimeEnd] = useState(null);
  const [result, setResult] = useState([]);

  useEffect(() => {
    if (history.location.state) {
      const {
        searchLocation,
        searchDate,
        searchTimeStart,
        searchTimeEnd,
      } = history.location.state;

      setLocation(searchLocation);
      setDate(searchDate);
      setTimeStart(searchTimeStart);
      setTimeEnd(searchTimeEnd);
    }

    const fetchData = async () => {
      const result = await axios.get(
          'http://127.0.0.1:8080/api/ror/rooms/random'
      );
      setResult(result.data.roomList);
    };

    fetchData();
  }, [history.location.state]);

  return (
    <div
      style={{
        background: '#59A18B',
        overflowY: 'auto',
        paddingBottom: '20px',
      }}
    >
      <Banner
        caption="Meeting Rooms"
        color="#1A605E"
        backable
        history={history}
      >
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
        <InputItem value={location} onChange={setLocation}>
          Location
        </InputItem>
        <DatePicker locale={enUs} mode="date" value={date} onChange={setDate}>
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
        <DatePicker
          locale={enUs}
          mode="time"
          value={timeStart}
          onChange={setTimeStart}
        >
          <List.Item arrow="horizontal">Start</List.Item>
        </DatePicker>
        <DatePicker
          locale={enUs}
          mode="time"
          value={timeEnd}
          onChange={setTimeEnd}
        >
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
        {result.map(
            (data, i) =>
              data && (
                <Card
                  key={i}
                  location={data.locationAddress}
                  image={getRandomSeed().image}
                  equipments={data.equipments}
                  details={[
                    `Building name: ${data.buildingName}`,
                    `Property Type: ${data.propertyType}`,
                    `Room Capacity: ${data.roomCapicity}`,
                    `Room Floor: ${data.roomFloor}`,
                  ]}
                  history={history}
                />
              )
        )}
      </div>
    </div>
  );
};

export default ResultRoom;
