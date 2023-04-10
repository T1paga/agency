import { Footer, Navbar } from '../components';
import {
  Company,
  Achieve,
  Feture,
  Help,
  Hero,
  Price,
  Schedules,
  Monitor,
  Clients,
  Subscribe,
} from '../sections';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Page = () => (
  <div>
    <div className="max-w-[1440px] mx-auto mb-[65px] xl:mb-[113px] overflow-x-hidden">
      <Navbar />
      <Hero />
    </div>
    <Company />
    <Achieve />
    <Help />
    <Schedules />
    <Monitor />
    <Price />
    <Feture />
    <Clients />
    <Subscribe />
    <Footer />
  </div>
);

export default Page;
