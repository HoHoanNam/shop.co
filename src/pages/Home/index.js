import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Brands from '~/components/Brands';
import HeroSection from '~/components/HeroSection';

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx('wrapper')}>
      <HeroSection />
      <Brands />
    </div>
  );
}

export default Home;
