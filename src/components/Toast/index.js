import { v4 as uuidv4 } from 'uuid';
import { createContext, useState, useEffect, useRef } from 'react';
import ToastWrapper from './ToastWrapper';

export const ToastContext = createContext();

function Toast({ children }) {
  const [toasts, setToasts] = useState([]);
  const timersRef = useRef({});

  const addToast = ({ type, content, duration = 3000 }) => {
    const id = uuidv4();
    setToasts((prev) => [...prev, { id, type, content, duration, isFading: false }]);

    if (duration > 0) {
      // Chạy fadeOut sau duration - 1000ms (thời gian của fadeOut animation)
      const fadeTimerId = setTimeout(() => {
        setToasts((prev) => prev.map((toast) => (toast.id === id ? { ...toast, isFading: true } : toast)));
        // Xóa toast sau khi fadeOut hoàn thành (1s)
        const removeTimerId = setTimeout(() => {
          removeToast(id);
        }, 1000);
        timersRef.current[id] = { fadeTimerId, removeTimerId };
      }, duration - 1000);
    }
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((item) => item.id !== id));
    if (timersRef.current[id]) {
      clearTimeout(timersRef.current[id].fadeTimerId);
      clearTimeout(timersRef.current[id].removeTimerId);
      delete timersRef.current[id];
    }
  };

  const clear = () => {
    Object.values(timersRef.current).forEach(({ fadeTimerId, removeTimerId }) => {
      clearTimeout(fadeTimerId);
      clearTimeout(removeTimerId);
    });
    timersRef.current = {};
    setToasts([]);
  };

  useEffect(() => {
    return () => {
      Object.values(timersRef.current).forEach(({ fadeTimerId, removeTimerId }) => {
        clearTimeout(fadeTimerId);
        clearTimeout(removeTimerId);
      });
      timersRef.current = {};
    };
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast, clear }}>
      {children}
      <ToastWrapper toasts={toasts} onClose={removeToast} />
    </ToastContext.Provider>
  );
}

export default Toast;
