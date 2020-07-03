export const getCurrentTemp = () =>
  fetch('http://dtdmnhom5.us-east-2.elasticbeanstalk.com').then((res) =>
    res.json(),
  );

export const getNextTemp = () =>
  fetch('http://dtdmnhom5.us-east-2.elasticbeanstalk.com/iot').then((res) =>
    res.json(),
  );

export const getNextByInput = () =>
  fetch(
    'http://dtdmnhom5.us-east-2.elasticbeanstalk.com/iot/35.5',
  ).then((res) => res.json());
