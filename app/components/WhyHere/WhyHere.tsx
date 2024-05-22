// components/WhyHere/WhyHere.tsx
"use client";
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './WhyHere.module.scss';

const WhyHere: React.FC = () => {
type Item = {
  title: string;
  subtitle?: string;
  description: string;
  icon?: string;
};

  const items: Item[] = [
    {
      title: '30 Min',
      subtitle: 'Quick Repair',
      description: 'Our Speedy Repair Guarantee! We\'ll have your device back in action in under 30 minutes.',
    },
    {
      title: '',
      subtitle: 'Warranty for Repair',
      description: 'Ensuring flawless device performance, we stand confidently behind our work.',
      icon: '/icons/check-circle.svg',
    },
    {
      title: '11 Years',
      subtitle: 'Years of Experience',
      description: 'With over 11 years of industry experience, our proven expertise guarantees exceptional tech repairs and unmatched service quality!',
    },
    {
      title: '',
      subtitle: 'Professional Technicians',
      description: 'Our Professional Technicians: Your devices in safe hands! We resolve issues with expertise.',
      icon: '/icons/tool.svg',
    },
  ];

  return (
    <div className={styles.whyHere}>
      <h2 className={styles.title}>Why Here?</h2>
      <p className={styles.description}>
        Our unwavering commitment to tech excellence ensures flawless repairs.
        Opt for – where Speed, Reliability, and Affordability Meet!
      </p>
      <Row>
        {items.map((item, index) => (
          <Col key={index} md={12} lg={6} className="mb-2 d-flex align-items-end">
            <div className={styles.item}>
            {item.icon && <div className={styles.itemIconContainer}> <div className={styles.icon}><img src={item.icon} alt={item.title} /></div></div>}
              <h3 className={styles.itemTitle}>{item.title}</h3>
              {item.subtitle && <h4 className={styles.itemSubtitle}>{item.subtitle}</h4>}
              <p className={styles.itemDescription}>{item.description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default WhyHere;
