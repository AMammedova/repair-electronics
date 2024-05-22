
"use client";
import React from "react";
import { Container, Card, Badge } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./Blog.module.scss";
import Image from "next/image";

const blogs = [
  {
    title: "UX review presentations",
    date: "20 Jan 2022",
    readTime: "8 min read",
    tag: "Tech news",
    image: "/images/Blog.png",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
  },
  {
    title: "UX review presentations",
    date: "20 Jan 2022",
    readTime: "8 min read",
    tag: "Tech news",
    image: "/images/Blog.png",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
  },
  {
    title: "UX review presentations",
    date: "20 Jan 2022",
    readTime: "8 min read",
    tag: "Tech news",
    image: "/images/Blog.png",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
  },
  {
    title: "UX review presentations",
    date: "20 Jan 2022",
    readTime: "8 min read",
    tag: "Tech news",
    image: "/images/Blog.png",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
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

const Blog: React.FC = () => {
    const CustomLeftArrow = ({ onClick }: { onClick?: () => void }) => (
        <button
          style={{ right: "4rem", top: "0px",borderTopRightRadius:"0px",borderBottomRightRadius:"0px" }}
          className={`${styles.arrowButton} left-0`}
          onClick={onClick}
        >
          <Image
            src="/icons/arrow-left.svg"
            alt="Left Arrow"
            width={24}
            height={24}
          />
        </button>
      );
    
      const CustomRightArrow = ({ onClick }: { onClick?: () => void }) => (
        <button
          style={{ right: "1rem", top: "0px",borderTopLeftRadius:"0px",borderBottomLeftRadius:"0px" }}
          className={`${styles.arrowButton} right-0`}
          onClick={onClick}
        >
          <Image
            src="/icons/arrow-right.svg"
            alt="Right Arrow"
            width={24}
            height={24}
          />
        </button>
      );
  return (
    <Container className={styles.blogSection}>
      <h2 className={styles.title}>Blogs</h2>
      <p className={styles.subtitle}>Everything about electronic devices.</p>
      <Carousel
        responsive={responsive}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        infinite={true}
        swipeable={true}
        keyBoardControl={true}
      >
        {blogs.map((blog, index) => (
          <div key={index} className={styles.blogWrapper}>
            <Card className={styles.blogCard}>
              <Image
                src={blog.image}
                alt={blog.title}
                className={styles.image}
                width={600}
                height={400}
                layout="responsive"
              />
              <Card.Body className="d-flex align-items-start flex-column">
                <div className={`d-flex justify-content-between ${styles.tags}`}>
                  <Badge className={styles.badge}>{blog.tag}</Badge>
                  <span className={styles.readTime}>{blog.readTime}</span>
                </div>
                <Card.Title className={styles.blogTitle}>
                  {blog.title} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#101828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </Card.Title>
                <Card.Text className={styles.blogDescription}>
                  {blog.description}
                </Card.Text>
                <Card.Text className={styles.blogDate}>{blog.date}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Carousel>
    </Container>
  );
};

export default Blog;
