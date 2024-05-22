"use client";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import styles from "./RepairSection.module.scss";

interface Device {
  name: string;
  description: string;
  image: string;
  buttonText: string;
  color?: string;
  cssClass?: string;
}

const RepairSection: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean[]>(Array(5).fill(false));
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); // İlk render'da pencere genişliğini ayarla
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleExpand = (index: number) => {
    setExpanded((prevExpanded) => {
      const newExpanded = [...prevExpanded];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  const devices: Device[] = [
    {
      name: "Phones",
      description:
        "At iFixHere, we specialize in providing fast, reliable, and affordable smartphone repairs. Whether you own an Apple, Samsung, or any other phone brand, our experts are here to bring your device back to life. With years of experience and a commitment to quality, we understand your phone`s unique needs and deliver top-notch solutions. Trust us for a seamless repair experience and get your smartphone working like new again.",
      image: "/images/phones.png",
      buttonText: "Start a Repair",
      color: "#e0eaff",
    },
    {
      name: "Tablets",
      description:
        "We specialize in tablet repairs that are fast, reliable, and affordable. Our expert technicians are dedicated to reviving your device, whether it`s an iPad, Samsung Galaxy Tab, or any tablet brand. With years of experience and a commitment to quality, we understand the intricacies of tablet technology. Trust us for a seamless repair experience, and see your tablet perform like new again.",
      image: "/images/ipadmini.svg",
      buttonText: "Start a Repair",
      color: "#D1FADF",
    },
    {
      name: "Laptop",
      description:
        "Your Laptops meet their revival experts! We've mastered the art of laptop repair, seamlessly combining speed, reliability, and affordability. Whether it's a sleek MacBook, a dependable Dell, or any laptop brand in between, our seasoned technicians are dedicated to rejuvenating your device. Entrust us with your laptop, and witness its triumphant return to peak performance!",
      image: "/images/macbook.png",
      buttonText: "Start a Repair",
      color: "#E0F2FE",
    },
    {
      name: "Smartwatch",
      description:
        "We're your smartwatch repair aficionados, offering swift, reliable, and budget-friendly solutions. Whether it's an Apple Watch, a Samsung Galaxy Watch, or any other smartwatch brand, our expert technicians are devoted to bringing life back to your device. With extensive hands-on experience and an unwavering commitment to excellence, we decode the intricate world of smartwatches.",
      image: "/images/applewatch.png",
      buttonText: "Start a Repair",
      color: "#EBE9FE",
    },
    {
      name: "Game Console",
      description:
        "Our skilled technicians are dedicated to breathing new life into your gaming world. With years of hands-on experience and an unwavering commitment to quality, we understand the complexities of game console technology. Place your trust in us for a seamless repair experience, and get back to gaming at full throttle!",
      image: "/images/xbox.png",
      buttonText: "Start a Repair",
      color: "#FCE7F6",
    },
  ];

  return (
    <React.Fragment>
      <h1 className={styles.repairSectionTitle}>Repair with Us</h1>
      <p className={styles.repairSectionDescription}>
        With us, you can have all your electronic devices repaired quickly and
        safely.
      </p>
      <Container className={styles.repairSection}>
        {devices.map((device, index) => (
          <Row key={index} className={`${styles.deviceRow} mb-4`}>
            {index % 2 !== 0 ? (
              <>
                <Col
                  xs={12}
                  md={6}
                  className={`${styles.deviceImageCol} d-flex justify-content-center align-items-center`}
                  style={{ backgroundColor: device.color }}
                >
                  <img
                    src={device.image}
                    alt={device.name}
                    className={styles.deviceImage}
                  />
                </Col>
                <Col xs={12} md={6} className="d-flex align-items-center">
                  <Card className={`${styles.deviceCard}`}>
                    <Card.Body>
                      <Card.Title className={styles.deviceTitle}>
                        {device.name}
                      </Card.Title>
                      <Card.Text className={`${styles.deviceDescription} ${expanded[index] ? styles.expanded : ""}`}>
                        {expanded[index] || (windowWidth !== null && windowWidth >= 768)
                          ? device.description
                          : `${device.description.slice(0, 100)}...`}
                        {windowWidth !== null && windowWidth <= 768 && (
                          <span
                            className={styles.readMore}
                            onClick={() => toggleExpand(index)}
                          >
                            {expanded[index] ? " Show Less" : " Read More"}
                          </span>
                        )}
                      </Card.Text>
                      <Button className={styles.deviceButton}>
                        <svg
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          height="1em"
                          width="1em"
                        >
                          <path
                            fillRule="evenodd"
                            d="M14 2.5a.5.5 0 00-.5-.5h-6a.5.5 0 000 1h4.793L2.146 13.146a.5.5 0 00.708.708L13 3.707V8.5a.5.5 0 001 0v-6z"
                          />
                        </svg>{" "}
                        <span>{device.buttonText}</span>
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </>
            ) : (
              <>
                <Col xs={12} md={6} className="d-flex align-items-center">
                  <Card className={styles.deviceCard}>
                    <Card.Body>
                      <Card.Title className={styles.deviceTitle}>
                        {device.name}
                      </Card.Title>
                      <Card.Text className={`${styles.deviceDescription} ${expanded[index] ? styles.expanded : ""}`}>
                        {expanded[index] || (windowWidth !== null && windowWidth >= 768)
                          ? device.description
                          : `${device.description.slice(0, 100)}...`}
                        {windowWidth !== null && windowWidth <= 768 && (
                          <span
                            className={styles.readMore}
                            onClick={() => toggleExpand(index)}
                          >
                            {expanded[index] ? " Show Less" : " Read More"}
                          </span>
                        )}
                      </Card.Text>
                      <Button className={styles.deviceButton}>
                        <svg
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          height="1em"
                          width="1em"
                        >
                          <path
                            fillRule="evenodd"
                            d="M14 2.5a.5.5 0 00-.5-.5h-6a.5.5 0 000 1h4.793L2.146 13.146a.5.5 0 00.708.708L13 3.707V8.5a.5.5 0 001 0v-6z"
                          />
                        </svg>{" "}
                        <span>{device.buttonText}</span>
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col
                  xs={12}
                  md={6}
                  className={`${styles.deviceImageCol}`}
                  style={{ backgroundColor: device.color }}
                >
                  <img
                    src={device.image}
                    alt={device.name}
                    className={styles.deviceImage}
                  />
                </Col>
              </>
            )}
          </Row>
        ))}
      </Container>
    </React.Fragment>
  );
};

export default RepairSection;
