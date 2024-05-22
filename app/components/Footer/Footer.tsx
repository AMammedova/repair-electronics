import React from "react";
import styles from "./Footer.module.scss";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <h5 className={styles.contactTitle}>Contact us</h5>
            <h2 className={styles.title}>Get in touch</h2>
            <p className={styles.description}>
              We’d love to hear from you. Please fill out this form or shoot us
              an email.
            </p>
            <div className={styles.contactInfo}>
              <Image src="/icons/mail.svg" alt="Email" width={24} height={24} />
              <p className={styles.contactMail}>Email</p>
              <p className={styles.contactText}>
                Our friendly team is here to help.
              </p>
              <p className={styles.contactBottomText}>hi@test.com</p>
            </div>
            <div className={styles.contactInfo}>
              <Image
                src="/icons/map-pin.svg"
                alt="Location"
                width={24}
                height={24}
              />
              <p className={styles.contactMail}>6 different states</p>
              <p className={styles.contactText}>
                Las Vegas, Chicago, New York, Seattle, California
              </p>
              <a
                href="/locations"
                className={`${styles.contactBottomText} ${styles.link} mt-4 d-block`}
              >
                See All Locations
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M5.83325 14.1666L14.1666 5.83325M14.1666 5.83325H5.83325M14.1666 5.83325V14.1666"
                    stroke="#3538CD"
                    stroke-width="1.67"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className={`${styles.col} ${styles.offset}`}>
            <form className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="formName">Full name</label>
                <input type="text" id="formName" placeholder="Full name" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="formEmail">Email</label>
                <input
                  type="email"
                  id="formEmail"
                  placeholder="you@company.com"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="formPhone">Phone number (Optional)</label>
                <input
                  type="tel"
                  id="formPhone"
                  placeholder="+1 (xxx) xxx-xxxx"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="formMessage">Message</label>
                <textarea id="formMessage" rows={3}></textarea>
              </div>
              <div className={styles.formGroupBox}>
                <input type="checkbox" id="formCheckbox" />
                <span
                  style={{
                    marginLeft: "0.5rem",
                    color: "#667085",
                    fontSize: "14px",
                  }}
                >
                  You agree to our friendly privacy policy.
                </span>
              </div>
              <button type="submit" className={styles.submitButton}>
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div id={styles.newsletter} className={`${styles.row} ${styles.mt5}`}>
        <div className={styles.jobContent}>
          <div style={{ widows: "50%" }}>
            <h5 className={styles.newsletterTitle}>Join our newsletter</h5>
            <p className={styles.newsletterDescription}>
              We&apos;ll send you a nice letter once per week. No spam.
            </p>
          </div>
          <form className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.newsletterInput}
            />
            <button type="submit" className={styles.newsletterButton}>
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className={styles.bottomFooter}>
        <div className={styles.container}>
        <div className={styles.footerLinksContainer}>
        <ul className={styles.footerLinks}>
            <li>
              <a href="#">Repairs</a>
            </li>
            <li>
              <a href="#">Locations</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
          </ul>
          <p className={styles.footerText}>
            Everyone deserves a second chance, so do your phone!
          </p>
        </div>
          <div className={styles.socialLinks}>
            <a href="#">
              <Image
                src="/icons/sosialicon1.svg"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </a>
            <a href="#">
              <Image
                src="/icons/socialicon2.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </a>
            <a href="#">
              <Image
                src="/icons/socialicon3.svg"
                alt="GitHub"
                width={24}
                height={24}
              />
            </a>
            <a href="#">
              <Image
                src="/icons/sosialicon4.svg"
                alt="GitHub"
                width={24}
                height={24}
              />
            </a>
          </div>
          <div className={styles.faq}>
            <p className={styles.footerText}>
              &copy; 2077 Untitled UI. All rights reserved.
            </p>
            <div className={styles.terms}>
              <span>Privacy</span>
              <span>Terms</span>
              <span>FAQs</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
