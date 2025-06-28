import classNames from 'classnames/bind';
import images from '~/assets/imgs/images';
import styles from './Comment.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

// Logic chọn ảnh rating dựa trên giá trị rating
const getRatingImage = (rating) => {
  const ratingMap = {
    3.0: images.rating.rating3,
    3.5: images.rating.rating3dot5,
    4.0: images.rating.rating4,
    4.5: images.rating.rating4dot5,
    5.0: images.rating.rating5,
  };
  // Làm tròn rating về số thập phân gần nhất (0.5) để khớp với key trong ratingMap
  const roundedRating = Math.round(rating * 2) / 2;
  return ratingMap[roundedRating] || images.rating.rating3; // Mặc định là rating3 nếu không khớp
};

function Comment({ comment }) {
  return (
    <div className={classNames(cx('wrapper'), 'py-4', 'px-5')}>
      {/* Rating */}
      <div className="mb-3">
        <img className={cx('rating-img')} src={getRatingImage(comment.rating)} alt={`Rating ${comment.rating}`} />
      </div>

      {/* Name */}
      <div className="d-flex align-items-center gap-2 mb-3">
        <span className="fs-2 fw-bold">{comment.clientName}</span>
        <span className={cx('check-icon')}>
          <FontAwesomeIcon icon={faCircleCheck} />
        </span>
      </div>

      {/* Content */}
      <p className={classNames(cx('comment-content'), 'mb-3')}>{comment.content}</p>

      {/* Timestamp */}
      <p className="fw-semibold text-info-emphasis">{comment.timestamp}</p>
    </div>
  );
}

export default Comment;
