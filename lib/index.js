
'use strict';

import moment from 'moment';

const getNow = () => {
  return moment().format();
}

export {
  getNow
}