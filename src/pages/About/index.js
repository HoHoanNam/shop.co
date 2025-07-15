import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

import styles from './About.module.scss';
import Button from '~/components/Button';
import images from '~/assets/imgs/images';
import StoreItem from '~/components/StoreItem';
import Breadcrumb from '~/components/Breadcrumb';
import ServiceItem from '~/components/ServiceItem';
import { services, stores, testimonials } from '~/data';

const cx = classNames.bind(styles);
const { models } = images;

function About() {
  return (
    <div className={classNames(cx('wrapper'), 'pt-5')}>
      <div className="container">
        {/* Breadcrumb */}
        <Breadcrumb />

        {/* Introduction */}
        <section className={classNames(cx('introduction'), 'pb-5')}>
          {/* Title */}
          <h1 className={classNames(cx('braille'), 'display-1 text-center fw-bold mb-3')}>Visit Us</h1>
          <p className="fs-1 text-center">
            Embrace the "Less, but better" philosophy at our fashion boutique, <br /> where stylish designs and
            personalized service blend seamlessly with the <br /> charm of a retail haven.
          </p>
        </section>

        <div className="my-5">
          <hr />
        </div>

        {/* About us */}
        <section className={classNames(cx('about'), 'py-5')}>
          {/* Title */}
          <p className="fs-1 d-flex justify-content-center gap-4" style={{ lineHeight: '100%' }}>
            <span>&#x2015;</span>
            <span>About us</span>
            <span>&#x2015;</span>
          </p>
          <h3 className="display-3 text-center fw-semibold mb-5">
            <span>Explore Our </span>
            <span className={cx('braille')}>SHOP.CO</span>
          </h3>

          {/* About content */}
          <div className={classNames(cx('about-content-seciton'), 'pt-5')}>
            {/* Row 1 */}
            <div className="row g-5" style={{ marginBottom: 60 }}>
              {/* Image */}
              <div className="col-12 col-lg-5">
                <img className={cx('model-img')} src={models.model1} alt="" />
              </div>
              <div className="col-12 col-lg-7">
                {/* Title */}
                <h3 className="display-3 text-center fw-semibold mb-3">
                  <span>History of </span>
                  <span className={cx('braille')}>SHOP.CO</span>
                </h3>

                {/* Decs */}
                <p className={classNames(cx('decs'), 'fs-2')}>
                  Step into the world of elegance and sophistication with SHOP.CO, where timeless fashion seamlessly
                  blends with contemporary style. Our curated collection showcases breathtaking designs, such as this
                  stunning sequined masterpiece, meticulously crafted to turn heads and make a statement at any
                  occasion. At SHOP.CO, we are dedicated to bringing you the finest in fashion innovation, ensuring
                  every piece reflects quality, creativity, and individuality.
                </p>

                {/* Sub decs */}
                <p className={classNames(cx('sub-decs', 'decs'), 'fs-2 fw-semibold text-decoration-underline')}>
                  Elevate your wardrobe with SHOP.CO's exclusive pieces, crafted to reflect your unique personality and
                  grace. Explore our history of fashion excellence today!
                </p>

                {/* Read button */}
                <div className="d-inline-block">
                  <Button className={cx('read-btn')} pill>
                    Read more
                  </Button>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="row gx-5">
              <div className="col-12 col-lg-7">
                {/* Title */}
                <h3 className="display-3 text-center fw-semibold mb-3">
                  <span>Why Choose </span>
                  <span className={cx('braille')}>SHOP.CO?</span>
                </h3>

                {/* Decs */}
                <p className={classNames(cx('decs'), 'fs-2')}>
                  Discover why SHOP.CO stands out as your premier fashion destination, where unparalleled style meets
                  exceptional quality. Our commitment to trendy yet timeless designs, like this elegant runway piece,
                  ensures you step out with confidence. We craft each item to suit your unique taste, blending comfort
                  and sophistication. Why the extra effort? Your satisfaction drives us, much like pressing a weak
                  remote battery shows our determination!
                </p>

                {/* Sub decs */}
                <p className={classNames(cx('sub-decs', 'decs'), 'fs-2 fw-semibold text-decoration-underline')}>
                  Elevate your style with SHOP.CO's exclusive collections, designed to reflect your individuality.
                  Explore why we're the top choice today!
                </p>

                {/* Read button */}
                <div className="d-inline-block">
                  <Button className={cx('read-btn')} pill>
                    Read more
                  </Button>
                </div>
              </div>
              <div className="col-12 col-lg-5 mt-5 mt-lg-0">
                {/* Image */}
                <img className={cx('model-img')} src={models.model2} alt="" />
              </div>
            </div>
          </div>
        </section>

        <div className=" my-5">
          <hr />
        </div>

        {/* Service section */}
        <section className={classNames(cx('service-section'), 'py-5')}>
          {/* Title */}
          <p className="fs-1 d-flex justify-content-center gap-4" style={{ lineHeight: '100%' }}>
            <span>&#x2015;</span>
            <span>Our Services</span>
            <span>&#x2015;</span>
          </p>
          <h3 className="display-3 text-center fw-semibold mb-5">
            <span>Explore Our </span>
            <span className={cx('braille')}>Services</span>
          </h3>

          {/* Services */}
          <div className="row g-5 justify-content-center pt-5">
            {services.map((service) => (
              <div className={classNames(cx('service-item'), 'col-12 col-md-6 col-lg-4')} key={service.id}>
                <ServiceItem service={service} />
              </div>
            ))}
          </div>
        </section>

        <div className="my-5">
          <hr />
        </div>

        {/* Testimonial */}
        <section className={classNames(cx('testimonials'), 'py-5')}>
          {/* Title */}
          <p className="fs-1 d-flex justify-content-center gap-4" style={{ lineHeight: '100%' }}>
            <span>&#x2015;</span>
            <span>Testimonial</span>
            <span>&#x2015;</span>
          </p>
          <h3 className="display-3 text-center fw-semibold mb-5">
            <span>What People </span>
            <span className={cx('braille')}>Say?</span>
          </h3>

          {/* Testimonials*/}
          <div className={classNames(cx('testimonial-content'), 'pt-5')}>
            <div className="row gy-5">
              {testimonials.map((testimonial, index) => (
                <div className="col-12 col-md-6 col-xl-3" key={index}>
                  <div className={cx('testimonial')}>
                    {/* Icon */}
                    <div className={classNames(cx('quote-icon'))}>
                      <FontAwesomeIcon icon={faQuoteRight} />
                    </div>

                    {/* Content */}
                    <div className="fs-2 text-center">{testimonial.comment}</div>

                    {/* Author */}
                    <div className="fs-2 fw-semibold">{testimonial.name}</div>

                    {/* Email */}
                    <div>{testimonial.email}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="my-5">
          <hr />
        </div>

        {/* Store */}
        <section className={classNames(cx('stores'), 'pt-5')}>
          {/* Title */}
          <p className="fs-1 d-flex justify-content-center gap-4" style={{ lineHeight: '100%' }}>
            <span>&#x2015;</span>
            <span>Our Stores</span>
            <span>&#x2015;</span>
          </p>
          <h3 className="display-3 text-center fw-semibold mb-5">
            <span>Explore Our </span>
            <span className={cx('braille')}>Stores</span>
          </h3>

          {/* Store list */}
          <div className="d-flex flex-column gap-5 pt-5">
            {stores.map((store, index) => {
              const seperate = index < stores.length - 1 ? <hr style={{ marginTop: 40 }} /> : null;

              return (
                <div key={index}>
                  <StoreItem store={store} />
                  {seperate}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
