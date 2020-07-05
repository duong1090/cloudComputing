export const getCurrentTemp = () =>
  fetch(
    'http://projectnhom5-env-2.eba-ref333qn.us-east-2.elasticbeanstalk.com/',
  ).then((res) => res.json());

export const getNextTemp = () =>
  fetch(
    'http://projectnhom5-env-2.eba-ref333qn.us-east-2.elasticbeanstalk.com//iot',
  ).then((res) => res.json());

export const getNextByInput = (value) => {
  return fetch(
    'http://projectnhom5-env-2.eba-ref333qn.us-east-2.elasticbeanstalk.com//iot/' +
      value,
  ).then((res) => res.json());
};
