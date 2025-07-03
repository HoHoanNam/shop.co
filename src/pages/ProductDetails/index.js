import { useState } from 'react';
import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faChevronDown, faMinus, faPlus, faSliders } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import Comment from '~/components/Comment';
import { products, comments } from '~/data';
import Newsletter from '~/components/Newsletter';
import { getRatingImage } from '~/assets/imgs/images';
import styles from './ProductDetails.module.scss';

const cx = classNames.bind(styles);

const colors = [
  { name: 'green', code: '#00c12b' },
  { name: 'red', code: '#f50606' },
  { name: 'yellow', code: '#f5dd06' },
  { name: 'orange', code: '#f57906' },
  { name: 'cyan', code: '#06caf5' },
  { name: 'blue', code: '#063af5' },
  { name: 'purple', code: '#7d06f5' },
  { name: 'pink', code: '#f506a4' },
  { name: 'brown', code: '#7b4019' },
  { name: 'white', code: '#ffffff' },
  { name: 'black', code: '#000000' },
  { name: 'navy', code: '#404693' },
];

function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const product = products.all.find((item) => item.id === id) || products.newArrivals[0]; // Fallback to first product if id not found
  const hasDiscount = !!product.discount;

  const handlePlus = () => {
    if (quantity < 100) {
      setQuantity((prev) => prev + 1);
    }
  };

  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className={classNames(cx('wrapper'), 'py-5')}>
      <div className="container">
        {/* Product details section */}
        <section className="row gx-5">
          {/* Product image */}
          <div className="col-md-4">
            <img className={cx('product-img')} src={product.imageUrl} alt={product.title} />
          </div>

          {/* Product details */}
          <div className="col-md-8">
            <div className={cx('product-details')}>
              {/* Title */}
              <div className="fw-bold display-3 mb-3">{product.title}</div>

              {/* Rating */}
              <div className="d-flex align-items-center gap-3 mb-3">
                <span className="fs-1 fw-bold">Rating:</span>
                <div>
                  <img
                    className={cx('rating-img')}
                    src={getRatingImage(product.rating)}
                    alt={`Rating ${product.rating}`}
                  />
                </div>
                <span className="display-5">-</span>
                <div className={cx('rating-number')}>{product.rating.toFixed(1)}/5.0</div>
              </div>

              {/* Price */}
              <div className="d-flex align-items-center gap-3 mb-3">
                <span className="fs-1 fw-bold">Price:</span>

                {hasDiscount ? (
                  <div className="d-flex align-items-center gap-3">
                    <span className={cx('new-price')}>{product.price}$</span>
                    <span className={cx('original-price')}>{product.discount.originalPrice}$</span>
                    <span className={cx('discount-percent')}>-{product.discount.percentage}%</span>
                  </div>
                ) : (
                  <span className={cx('new-price')}>{`${product.price}$`}</span>
                )}
              </div>

              {/* Description */}
              <div className="text-secondary">{product.description}</div>

              <hr className="my-3" />

              {/* Colors */}
              <div className="d-flex flex-column gap-2 mb-3">
                <span className="fs-1 fw-bold">Select Colors:</span>
                <div className={cx('size-list')}>
                  {product.colors.map((colorName, index) => {
                    // Tìm mã màu tương ứng từ mảng colors
                    const colorObj = colors.find((c) => c.name === colorName); // Trả về obj
                    const isGray = colorName === 'gray';

                    return isGray ? (
                      <Button
                        key={index}
                        grayStyle
                        className={cx('gray-btn')}
                        leftIcon={index === 0 ? <FontAwesomeIcon icon={faCheck} /> : null}
                      />
                    ) : (
                      <Button
                        key={index}
                        color={colorObj?.code}
                        leftIcon={index === 0 ? <FontAwesomeIcon icon={faCheck} /> : null}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Size */}
              <div className="d-flex flex-column gap-2">
                <span className="fs-1 fw-bold">Choose Size:</span>
                <div className={cx('size-list')}>
                  {product.sizes.map((item, index) => (
                    <Button key={index} className="text-capitalize" pill grayStyle>
                      {item}
                    </Button>
                  ))}
                </div>
              </div>

              <hr className="my-5" />

              {/* Buttons */}
              <div className="row">
                {/* Control button */}
                <div className="col-md-4">
                  <div className={cx('controls')}>
                    <span className={classNames(cx('icon'))}>
                      <FontAwesomeIcon icon={faMinus} onClick={handleMinus} />
                    </span>
                    <span className={cx('quantity')}>{quantity}</span>
                    <span className={classNames(cx('icon'))}>
                      <FontAwesomeIcon icon={faPlus} onClick={handlePlus} />
                    </span>
                  </div>
                </div>

                {/* Add button */}
                <div className="col-md-8">
                  <Button className={cx('add-btn')} pill blackStyle>
                    Add to cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comments section */}
        <section className={cx('comments-section')}>
          <div className={cx('comments-stats')}>
            {/* Number of comments */}
            <div>
              <span className="fs-1 fw-bold me-2">All Reviews</span>
              <span className="fs-2 text-secondary">(392)</span>
            </div>

            {/* Comment buttons */}
            <div>
              <Button grayStyle className={cx('sort-btn')} leftIcon={<FontAwesomeIcon icon={faSliders} />} />
              <Button pill grayStyle rightIcon={<FontAwesomeIcon icon={faChevronDown} />}>
                Latest
              </Button>
              <Button pill long blackStyle>
                Write a Review
              </Button>
            </div>
          </div>

          <div className="row">
            {comments.map((comment, index) => (
              <div className="col-12 col-md-4 gy-4" key={index}>
                <Comment comment={comment} />
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-center mt-5">
            <Button pill long grayStyle>
              Load more Reviews
            </Button>
          </div>
        </section>

        <div className={cx('newsletter-section')}>
          <Newsletter />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
