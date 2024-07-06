import s from './OSComponent.module.scss';
import React from "react";

interface OSComponentProps {
  type: 'android' | 'ios';
}

export const OSComponent: React.FC<OSComponentProps> = ({ type }) => {
  const getImgSrc = () => {
    switch (type) {
      case 'android':
        return `${import.meta.env.BASE_URL}/images/os/android.svg`;
      case 'ios':
        return `${import.meta.env.BASE_URL}/images/os/ios.svg`;
    }
  }

  return (
    <div className={s.wrapper}>
      <img src={getImgSrc()} alt="OS Icon" />
      <div className={s.os_descr}>
        <p>{type === 'android' ? 'get it on' : 'Available on the'}</p>
        <h4>{type === 'android' ? 'Google Play' : 'App Store'}</h4>
      </div>
    </div>
  )
}