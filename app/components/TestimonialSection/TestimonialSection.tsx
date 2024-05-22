"use client";
import React from "react";
import { Container, Card } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./TestimonialSection.module.scss";
import Image from 'next/image';

type Testimonial = {
  name: string;
  position: string;
  image: string;
  rating: number;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Annie Stanley",
    position: "Head of Design, Layers",
    image: "/images/Avatar.png",
    rating: 5,
    quote:
      "iFixhere has saved us thousands of hours of work. We’re able to spin up projects and features faster.",
  },
  {
    name: "Kelly Williams",
    position: "Head of Design, Layers",
    image: "/images/Avatar2.png",
    rating: 5,
    quote:
      "iFixhere has saved us thousands of hours of work. We’re able to spin up projects and features faster.",
  },
  {
    name: "Kelly Williams",
    position: "Head of Design, Layers",
    image: "/images/Avatar.png",
    rating: 5,
    quote:
      "iFixhere has saved us thousands of hours of work. We’re able to spin up projects and features faster.",
  },
  {
    name: "Kelly Williams",
    position: "Head of Design, Layers",
    image: "/images/Avatar2.png",
    rating: 5,
    quote:
      "iFixhere has saved us thousands of hours of work. We’re able to spin up projects and features faster.",
  },
  {
    name: "Kelly Williams",
    position: "Head of Design, Layers",
    image: "/images/Avatar.png",
    rating: 5,
    quote:
      "iFixhere has saved us thousands of hours of work. We’re able to spin up projects and features faster.",
  },
  {
    name: "Kelly Williams",
    position: "Head of Design, Layers",
    image: "/images/Avatar.png",
    rating: 5,
    quote:
      "iFixhere has saved us thousands of hours of work. We’re able to spin up projects and features faster.",
  },
  {
    name: "Kelly Williams",
    position: "Head of Design, Layers",
    image: "/images/Avatar2.png",
    rating: 5,
    quote:
      "iFixhere has saved us thousands of hours of work. We’re able to spin up projects and features faster.",
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const TestimonialSection: React.FC = () => {
  const CustomLeftArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
      style={{ right: "5rem", top: "0px" }}
      className={`${styles.arrowButton} left-0`}
      onClick={onClick}
    >
      <Image src="/icons/arrow-left.svg" alt="Left Arrow" width={24} height={24} />
    </button>
  );

  const CustomRightArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
      style={{ right: "1rem", top: "0px" }}
      className={`${styles.arrowButton} right-0`}
      onClick={onClick}
    >
      <Image src="/icons/arrow-right.svg" alt="Right Arrow" width={24} height={24} />
    </button>
  );

  return (
    <Container className={styles.testimonialSection}>
      <h2 className={styles.title}>Don’t just take our word for it</h2>
      <p className={styles.subtitle}>
        Hear from some of our amazing customers who are building faster.
      </p>
      <Carousel
        responsive={responsive}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        infinite={true}
        swipeable={true}
        keyBoardControl={true}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonialWrapper}>
            <Card className={styles.testimonialCard}>
              <Card.Body>
                <div className={styles.imageWrapper}>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    className={styles.image}
                    width={100}
                    height={100}
                  />
                </div>
                <Card.Title className={styles.name}>
                  {testimonial.name}
                </Card.Title>
                <Card.Subtitle className={styles.position}>
                  {testimonial.position}
                </Card.Subtitle>
                <div className={styles.rating}>
                  {Array.from({ length: testimonial.rating }).map((_, idx) => (
                    <svg
                      key={idx}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                    >
                      <path d="M3.612 15.443c-.396.24-.86-.11-.746-.533l.83-4.73L.173 6.765c-.329-.32-.158-.888.283-.95l4.898-.696 2.15-4.343c.197-.396.73-.396.927 0l2.15 4.343 4.898.696c.441.062.612.63.283.95l-3.523 3.415.83 4.73c.114.423-.35.773-.746.533L8 13.187l-4.389 2.256z" />
                    </svg>
                  ))}
                </div>
                <Card.Text className={styles.quote}>
                  &quot;{testimonial.quote}&quot;
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Carousel>
    </Container>
  );
};

export default TestimonialSection;
