"use client";
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './DeviceSlider.module.scss';
import Image from 'next/image';


const DeviceSlider: React.FC = () => {
  const [selectedDevice, setSelectedDevice] = useState<string>('Phones');

  const devices = [
    { name: 'Phones', icon: '/icons/smartphone.svg' },
    { name: 'Tablets', icon: '/icons/tablet.svg' },
    { name: 'Laptop', icon: '/icons/laptop.svg' },
    { name: 'Smartwatch', icon: '/icons/smartwatch.svg' },
    { name: 'Game Console', icon: '/icons/tablet-02.svg' },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className={styles.deviceSlider}>
      <Carousel responsive={responsive} infinite={true} keyBoardControl={true}>
        {devices.map((device, index) => (
          <div key={index} className="d-flex justify-content-center">
            <Card
              onClick={() => setSelectedDevice(device.name)}
              className={`${styles.deviceCard} ${selectedDevice === device.name ? styles.selected : ''}`}
            >
              <Card.Body className="text-center d-flex flex-column justify-content-center align-items-center">
                <div className={styles.iconWrapper}>
                  {/* <img src={device.icon} alt={device.name} /> */}
                  <Image src={device.icon} alt={device.name} width={24} height={24}/>
                </div>
                <Card.Text>{device.name}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default DeviceSlider;
