"use client";
import React, { useState } from "react";
import styles from "./FaqSection.module.scss";
import Image from 'next/image';

type FaqItem = {
  question: string;
  answer: string;
}
const faqItems: FaqItem[] = [
  {
    question: "Will it really take 30 minutes to repair my phone?",
    answer:
      "Yes, for almost 90% of repairs we offer. Our most popular repairs (iPhones, iPads, Samsung phones) usually take 30 minutes or less. Our customers love the convenience of dropping off the phone, going shopping and coming back to find the phone repair and fix screen. Schedule a free diagnostic test next time you come to the mall. Look out for our nearest shop for convenience.",
  },
  {
    question:
      "Do you have all the parts in stock, or do you have to order them?",
    answer:
      "We have most of the parts in stock, but if we don't, we can order them and usually get them within a day or two.",
  },
  {
    question: "Do you offer a guarantee with your repairs?",
    answer:
      "Yes, we offer a guarantee on all of our repairs. If you have any issues with a repair, bring it back, and we will make it right.",
  },
  {
    question: "Do you offer discounts for returning customers?",
    answer:
      "Yes, we offer discounts for returning customers. Please ask our staff for more details.",
  },
  {
    question: "Do you offer discounts for vets, teachers and students?",
    answer:
      "Yes, we offer discounts for vets, teachers, and students. Please bring a valid ID to receive the discount.",
  },
  {
    question: "Do you sell devices, or just repair them?",
    answer:
      "We primarily focus on repairs, but we do sell a limited selection of refurbished devices.",
  },
];

const FaqSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.faqSection}>
      <h2 className={styles.title}>Frequently Asked Questions</h2>
      <p className={styles.subtitle}>Everything you need to know about</p>
      <div className={styles.accordion}>
        {faqItems.map((item, index) => (
          <div key={index} className={styles.accordionItem}>
            <div
              className={`${styles.accordionHeader} ${
                activeIndex === index ? styles.active : ""
              }`}
              onClick={() => handleToggle(index)}
            >
              <span>{item.question}</span>
              <span className={styles.icon}>
                {activeIndex === index ? (
                  <Image src="/icons/minus-circle.svg" alt="Minus Icon" width={24} height={24} />
                ) : (
                  <Image src="/icons/plus-circle.svg" alt="Plus Icon" width={24} height={24}/>
                )}
              </span>
            </div>
            <div
              className={`${styles.accordionBody} ${
                activeIndex === index ? styles.show : ""
              }`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.contactBox}>
        <p className={styles.contactTitle}>Still have questions?</p>
        <div className={styles.contactContainer}>
          <p className={styles.contactSubtitle}>
            Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly
            team.
          </p>
          <button className={styles.contactButton}>Get in touch</button>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
