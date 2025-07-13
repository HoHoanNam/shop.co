import { Fragment, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import images from '~/assets/imgs/images';
import styles from './Profile.module.scss';
import Breadcrumb from '~/components/Breadcrumb';

const cx = classNames.bind(styles);

const initialProfile = {
  fullName: 'Alexa Rawles',
  nickName: '',
  gender: '',
  country: 'Vietnam',
  language: '',
  timeZone: '',
  avatar: images.profileAvatar,
  email: 'alexarawles@gmail.com',
};

const Profile = () => {
  const [profile, setProfile] = useState(initialProfile);
  const [avatarPreview, setAvatarPreview] = useState(profile.avatar);
  const [editMode, setEditMode] = useState(false);
  const fileInputRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = () => setEditMode(true);

  const handleCancel = () => {
    setProfile(initialProfile);
    setAvatarPreview(initialProfile.avatar);
    setEditMode(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
    // Save logic here
  };

  return (
    <div className={cx('wrapper')}>
      <div className="container">
        {/* Breadcrumb */}
        <Breadcrumb />

        <div className={classNames(cx('profile-container'), 'shadow-lg p-5')}>
          {/* Header */}
          <div className="d-flex flex-wrap align-items-center justify-content-between mb-5">
            <div className="d-flex align-items-center gap-3">
              {/* Avatar wrapper */}
              <div className={cx('avatar-wrapper')}>
                {/* Profile avatar */}
                <img src={avatarPreview} alt="Avatar" className={cx('profile-avatar')} />
                {editMode && (
                  <Fragment>
                    <input
                      type="file"
                      accept="image/*"
                      ref={fileInputRef}
                      style={{ display: 'none' }}
                      onChange={handleAvatarChange}
                    />
                    <button
                      type="button"
                      className={cx('edit-btn', 'change-avatar-btn')}
                      onClick={() => fileInputRef.current && fileInputRef.current.click()}
                    >
                      Đổi ảnh
                    </button>
                  </Fragment>
                )}
              </div>

              {/* Profile details */}
              <div>
                {/* Fullname */}
                <div className="fs-1 fw-bold">{profile.fullName}</div>

                {/* Email */}
                <div className="text-muted">{profile.email}</div>
              </div>
            </div>

            {/* Edit button */}
            {!editMode && (
              <button type="button" className={cx('edit-btn')} onClick={handleEdit}>
                Edit
              </button>
            )}
          </div>

          {/* Form */}
          <form className={cx('profile-form')} onSubmit={handleSubmit} autoComplete="off">
            <div className="row g-4">
              {/* Fullname */}
              <div className="col-md-6">
                <label className="fs-2 form-label">Full Name</label>
                <input
                  name="fullName"
                  disabled={!editMode}
                  value={profile.fullName}
                  placeholder="Your Full Name"
                  onChange={handleChange}
                  className={classNames(cx('profile-input'), 'form-control')}
                />
              </div>

              {/* Nickname */}
              <div className="col-md-6">
                <label className="fs-2 form-label">Nick Name</label>
                <input
                  name="nickName"
                  disabled={!editMode}
                  value={profile.nickName}
                  placeholder="Your Nick Name"
                  onChange={handleChange}
                  className={classNames(cx('profile-input'), 'form-control')}
                />
              </div>

              {/* Gender */}
              <div className="col-md-6">
                <label className="fs-2 form-label">Gender</label>
                <select
                  name="gender"
                  disabled={!editMode}
                  value={profile.gender}
                  onChange={handleChange}
                  className={classNames(cx('profile-input'), 'form-select')}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Country */}
              <div className="col-md-6">
                <label className="fs-2 form-label">Country</label>
                <input
                  name="country"
                  disabled={!editMode}
                  value={profile.country}
                  placeholder="Your Country"
                  onChange={handleChange}
                  className={classNames(cx('profile-input'), 'form-control')}
                />
              </div>

              {/* Language */}
              <div className="col-md-6">
                <label className="fs-2 form-label">Language</label>
                <select
                  name="language"
                  disabled={!editMode}
                  value={profile.language}
                  onChange={handleChange}
                  className={classNames(cx('profile-input'), 'form-select')}
                >
                  <option value="">Select Language</option>
                  <option value="en">English</option>
                  <option value="fr">French</option>
                  <option value="es">Spanish</option>
                  <option value="vi">Vietnamese</option>
                </select>
              </div>

              {/* Time zone */}
              <div className="col-md-6">
                <label className="fs-2 form-label">Time Zone</label>
                <select
                  name="timeZone"
                  disabled={!editMode}
                  value={profile.timeZone}
                  onChange={handleChange}
                  className={classNames(cx('profile-input'), 'form-select')}
                >
                  <option value="">Select Time Zone</option>
                  <option value="UTC-5">UTC-5</option>
                  <option value="UTC+0">UTC+0</option>
                  <option value="UTC+7">UTC+7</option>
                  <option value="UTC+8">UTC+8</option>
                </select>
              </div>
            </div>

            {/* Email Address Section */}
            <div className="mt-5">
              <div className="fw-bold mb-3" style={{ fontSize: 22 }}>
                My email Address
              </div>

              <div className="d-flex align-items-center gap-3 mb-3">
                {/* Icon */}
                <span
                  className="bg-black bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: 50, height: 50 }}
                >
                  <FontAwesomeIcon className="fs-2" icon={faEnvelope} />
                </span>

                {/* Email details */}
                <div>
                  <div>{profile.email}</div>
                  <div className="text-muted">1 month ago</div>
                </div>
              </div>

              {editMode && (
                <button type="button" className={cx('add-email-btn')}>
                  +Add Email Address
                </button>
              )}
            </div>

            {/* Action Buttons */}
            {editMode && (
              <div className="d-flex justify-content-end gap-3 mt-5">
                <button type="button" className={cx('edit-btn', 'cancel-btn')} onClick={handleCancel}>
                  Cancel
                </button>
                <button type="submit" className={cx('edit-btn', 'save-btn')}>
                  Save
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
