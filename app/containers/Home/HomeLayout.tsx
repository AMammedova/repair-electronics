import React from 'react';
import styles from './HomeLayout.module.scss';
import Intro from '@/app/components/Intro/Intro';
import DeviceSlider from '@/app/components/DeviceSlider/DeviceSlider';
import RepairSection from '@/app/components/Repair/RepairSection';
import { NextPage } from 'next';
import WhyHere from '@/app/components/WhyHere/WhyHere';
import TestimonialSection from '@/app/components/TestimonialSection/TestimonialSection';
import FaqSection from '@/app/components/FaqSection/FaqSection';
import Blog from '@/app/components/Blogs/Blog';


const HomeLayout = () => {
  return (
    <div className={styles.container}>
     <Intro />
     <DeviceSlider/>
     <RepairSection/>
     <WhyHere/>
     <TestimonialSection/>
     <FaqSection/>
     <Blog/>
    </div>
  );
};

export default HomeLayout;
