'use strict';

const isSmartPhone = () => {
  return navigator.userAgent.match(/iPhone|Android.+Mobile/) ? true : false;
};