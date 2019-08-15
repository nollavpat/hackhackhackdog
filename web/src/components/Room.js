import React, {useState, useEffect} from 'react';
import {Button, InputItem} from 'antd-mobile';
import axios from 'axios';

import Banner from './Banner';
import {getAllRandomSeed} from '../randomSeeds';

const Cards = ({img}) => (
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
  </div>
);

const Room = ({history}) => {
  const [location, setLocation] = useState('');
  const [details, setDetails] = useState([]);
  const [equipments, setEquipments] = useState([]);
  const email1 = 'jairus@ubx.ph';
  const email2 = 'joemarie@ubx.ph';
  const email3 = 'louie@ubx.ph';

  useEffect(() => {
    if (history.location.state) {
      const {
        openLocation,
        openDetails,
        openEquipments,
      } = history.location.state;

      setLocation(openLocation);
      setDetails(openDetails);
      setEquipments(openEquipments);
    }
  }, [history.location.state]);

  return (
    <div style={{background: '#59A18B', overflowY: 'auto'}}>
      <Banner caption={location} color="#1A605E" backable history={history} />
      <div
        style={{
          paddingTop: '20px',
          paddingRight: '10px',
          paddingLeft: '10px',
        }}
      >
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
            <Cards img={pair.img} key={pair.img} />
          ))}
        </div>
      </div>
      <div
        style={{
          color: '#FFF',
          borderBottom: '1px solid #FFF',
          borderTop: '1px solid #FFF',
        }}
      >
        <div
          style={{
            marginLeft: '20px',
            fontSize: '18px',
            marginTop: '10px',
            fontWeight: '800',
          }}
        >
          Details
        </div>
        <ul>
          {details.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
        <div
          style={{
            marginLeft: '20px',
            fontSize: '18px',
            marginTop: '10px',
            fontWeight: '800',
          }}
        >
          Equipments Available
        </div>
        <ol>
          {equipments.map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </ol>
      </div>
      <div>
        <div
          style={{
            marginLeft: '20px',
            fontSize: '18px',
            marginTop: '10px',
            marginBottom: '10px',
            fontWeight: '800',
            color: '#FFF',
          }}
        >
          Send invitation to attendees
        </div>
        <div style={{paddingLeft: '15px', paddingRight: '15px'}}>
          <InputItem editable={false} value={email1}>
            Jairus
          </InputItem>
          <InputItem editable={false} value={email2}>
            Joemarie
          </InputItem>
          <InputItem editable={false} value={email3}>
            Louielar
          </InputItem>
          <Button
            style={{marginTop: '10px', marginBottom: '20px'}}
            size="small"
            onClick={async () => {
              await axios.post('http://127.0.0.1:8080/api/ror/reservations', {
                roomId: 1,
                dateFrom: '2019-08-01T01:00:00',
                dateTo: '2019-08-09T01:00:00',
                organizer: 'seloriojoemarie@gmail.com',
                attendees: [email1, email2, email3],
                description: 'test',
                summary: 'test',
              });
            }}
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Room;
