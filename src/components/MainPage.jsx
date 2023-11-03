import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import axios from 'axios';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import MedItem from './UI/MedItem';
import useMeds from './hooks/useMeds';

export default function MainPage({ medicines }) {
  const { meds, setMeds } = useMeds(medicines);

  const [filter, setFilter] = useState({
    discount: false,
    ammount: false,
    price: false,
  });
  // const [sort, setSort] = useState(true);

  const sortMedHandler = async (typeSort) => {
    // мне пришел discount
    // const fitlerObj = !filter[typeSort];
    const copyFilter = { ...filter };
    // for()
    const temp = !copyFilter[typeSort];

    for (const key in copyFilter) {
      copyFilter[key] = false;
    }

    copyFilter[typeSort] = temp;

    setFilter(copyFilter);
    const response = await axios.post(`/api/search`, copyFilter);
    console.log(response);
    setMeds(response.data);
    // switch (typeSort) {
    //   case 'discount':
    //     setFilter((prev) => ({ ...prev, discount: !prev.discount, ammount: false, price: false }));
    //     break;
    //   case 'ammount':
    //     setFilter((prev) => ({ ...prev, discount: false, ammount: !prev.ammount, price: false }));
    //     break;
    //   case 'price':
    //     setFilter((prev) => ({ ...prev, discount: false, ammount: false, price: !prev.price }));
    //     break;
    //   default:
    //     break;
    // }
  };

  return (
    <main role="main">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar />
      </LocalizationProvider>
      <Row>
        <Col style={{ display: 'flex', justifyContent: 'center' }}>
          <ButtonGroup aria-label="Basic example">
            <Button
              variant="secondary"
              onClick={() => {
                sortMedHandler('discount');
              }}
              style={{
                backgroundColor: filter.discount ? 'aqua' : '',
                color: filter.discount ? 'white' : '',
              }}
            >
              discount
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                sortMedHandler('ammount');
              }}
              style={{
                backgroundColor: filter.ammount ? 'aqua' : '',
                color: filter.ammount ? 'white' : '',
              }}
            >
              anmmount
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                sortMedHandler('price');
              }}
              style={{
                backgroundColor: filter.price ? 'aqua' : '',
                color: filter.price ? 'white' : '',
              }}
            >
              price
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
      <br />
      <Row>
        {meds?.map((med) => (
          <Col xs={12} sm={6} md={4} lg={3}>
            <MedItem key={med.id} med={med} />
          </Col>
        ))}
      </Row>
    </main>
  );
}
