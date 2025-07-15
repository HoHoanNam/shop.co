import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';
import { Fragment, useState, useEffect } from 'react';

import styles from './Auth.module.scss';
import images from '~/assets/imgs/images';
import Breadcrumb from '~/components/Breadcrumb';

const { auth } = images;
const cx = classNames.bind(styles);

function Auth() {
  // State to toggle between Register and Login (login as default)
  const [isLogin, setIsLogin] = useState(true);
  const [passwordStrength, setPasswordStrength] = useState('');

  const {
    reset,
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Watch password field
  const password = watch('password', '');
  const emailOrPhone = watch('emailOrPhone', '');

  // Check password strength
  useEffect(() => {
    if (!password) {
      setPasswordStrength('');
      return;
    }

    if (password.length < 6) {
      setPasswordStrength('Weak');
    } else if (password.length < 10) {
      setPasswordStrength('Medium');
    } else {
      setPasswordStrength('Strong');
    }
  }, [password]);

  // Handle styling
  const getStyles = (data) => {
    switch (data) {
      case 'Weak':
        return 'text-danger';
      case 'Medium':
        return 'text-warning';
      case 'Strong':
        return 'text-success';
      default:
        return null;
    }
  };

  // Check if form is valid for disabling submit button
  const isFormValid = isLogin
    ? emailOrPhone && password && !errors.emailOrPhone && !errors.password
    : emailOrPhone && password && watch('name') && !errors.emailOrPhone && !errors.password && !errors.name;

  // Handle form submission
  const onSubmit = (data) => {
    console.log(data);
    reset(); // Reset form state when submit
    // Here you can add logic to handle form submission (e.g., API calls)
  };

  // Toggle between Login and Register
  const handleToggle = () => {
    setIsLogin(!isLogin);
    reset(); // Reset form state and errors when toggling
  };

  return (
    <div className={classNames(cx('wrapper'), 'pt-5')}>
      <div className="container">
        {/* Breadcrumb */}
        <Breadcrumb />

        <div className="row pt-4">
          <div className="col-12 col-md-8 d-inline-flex justify-content-center">
            {/* Auth image */}
            <img className={cx('auth-img')} src={auth.authImage} alt="Auth image" />
          </div>

          <div className="col-12 col-md-4">
            <div className={cx('auth-content')}>
              {/* Title */}
              <h1 className="m-0 display-5 fw-bold">{isLogin ? 'Log in to Exclusive' : 'Create an account'}</h1>

              {/* Instruction */}
              <p className="m-0 fs-2 text-secondary">Enter your details below</p>

              {/* Input fields */}
              <form onSubmit={handleSubmit(onSubmit)} className={cx('input-fields')}>
                {/* Name */}
                {!isLogin && (
                  <div className={cx('auth-input-wrapper')}>
                    <input
                      className={cx('auth-input')}
                      placeholder="Name"
                      {...register('name', {
                        required: 'Name is required',
                        minLength: {
                          value: 2,
                          message: 'Name must be at least 2 characters',
                        },
                      })}
                    />

                    {/* errors will return when field validation fails  */}
                    {errors.name && <p className="m-0 fs-2 text-danger">{errors.name.message}</p>}
                  </div>
                )}

                {/* EmailOrPhone */}
                <div className={cx('auth-input-wrapper')}>
                  <input
                    className={cx('auth-input')}
                    placeholder="Email or Phone Number"
                    {...register('emailOrPhone', {
                      required: 'Email or phone number is required',
                      pattern: {
                        value: /^(\S+@\S+\.\S+|[0-9]{10})$/,
                        message: 'Please enter a valid email or phone number',
                      },
                    })}
                  />

                  {/* errors will return when field validation fails  */}
                  {errors.emailOrPhone && <p className="m-0 fs-2 text-danger">{errors.emailOrPhone.message}</p>}
                </div>

                {/* Password */}
                <div className={cx('auth-input-wrapper')}>
                  <input
                    className={cx('auth-input')}
                    type="password"
                    placeholder="Password"
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 6,
                        message: 'Password must be at least 6 characters',
                      },
                      validate: (value) => value.trim().length > 0 || 'Password cannot be all whitespace',
                    })}
                  />

                  {/* errors will return when field validation fails  */}
                  {errors.password && <p className="m-0 fs-2 text-danger">{errors.password.message}</p>}
                  {passwordStrength && (
                    <p
                      className={cx('password-strength', {
                        [getStyles(passwordStrength)]: getStyles(passwordStrength),
                      })}
                    >
                      Password strength: {passwordStrength}
                    </p>
                  )}
                </div>

                {/* Actions */}
                <div className={classNames(cx('auth-actions'), 'mt-4')}>
                  {isLogin ? (
                    // Log in
                    <div className="d-flex align-items-center justify-content-between pt-4">
                      <button className={cx('login-btn', { disabled: !isFormValid })} disabled={!isFormValid}>
                        Log In
                      </button>
                      <a className={cx('forget-password')} href="#">
                        Forget Password?
                      </a>
                    </div>
                  ) : (
                    // Sign up
                    <Fragment>
                      <button className={cx('create-btn', { disabled: !isFormValid })} disabled={!isFormValid}>
                        Create account
                      </button>
                      <button className={cx('google-btn')}>
                        <img className={cx('google-logo')} src={auth.googleLogo} alt="Google logo" />
                        <span>Sign up with Google</span>
                      </button>
                    </Fragment>
                  )}
                </div>
              </form>

              {/* Switch between login and register */}
              <div className="fs-2 d-flex align-items-center justify-content-between gap-3">
                <span>{isLogin ? 'Don’t have an account?' : 'Already have an account?'}</span>
                <button type="button" className={cx('login-link')} onClick={handleToggle}>
                  {isLogin ? 'Sign up' : 'Log in'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
