const isEmpty = value => value === undefined || value === null || value === ''; // eslint-disable-line
const join = (rules) => (value, data) => rules.map(rule => rule(value, data)).filter(error => !!error)[0]; // eslint-disable-line

export function email(value) { // eslint-disable-line
  // Let's not start a debate on email regex. This is just for an example app!
  if (!isEmpty(value) && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'Invalid email address';
  }
}

export function required(value) { // eslint-disable-line
  if (isEmpty(value)) {
    return 'Required';
  }
}

export function minLength(min) {
  return (value) => { // eslint-disable-line
    if (!isEmpty(value) && value.length < min) {
      return `Must be at least ${min} characters`;
    }
  };
}

export function maxLength(max) {
  return value => { // eslint-disable-line
    if (!isEmpty(value) && value.length > max) {
      return `Must be no more than ${max} characters`;
    }
  };
}

export function integer(value) { // eslint-disable-line
  if (!Number.isInteger(Number(value))) {
    return 'Must be an integer';
  }
}

export function oneOf(enumeration) {
  return (value) => { // eslint-disable-line
    if (!~enumeration.indexOf(value)) { // eslint-disable-line
      return `Must be one of: ${enumeration.join(', ')}`;
    }
  };
}

export function match(field) {
  return (value, data) => { // eslint-disable-line
    if (data) {
      if (value !== data[field]) {
        return 'Do not match';
      }
    }
  };
}

export function phone(value) { // eslint-disable-line
  if (!/^(\d|\+)[0-9+() -]+$/.test(value)) {
    return 'Invalid phone format';
  }
}

export function createValidator(rules, section, activate) {
  return (data = {}) => {
    data = data.toJS ? data.toJS() : data; // eslint-disable-line
    data = section && data.section ? data[section] : data; // eslint-disable-line
    if (activate && typeof data[activate] !== 'undefined') {
      if (!data[activate]) {
        return {};
      }
    }
    const errors = {};
    Object.keys(rules).forEach((key) => {
      const rule = join([].concat(rules[key])); // concat enables both functions and arrays of functions
      const error = rule(data[key], data);
      if (error) {
        errors[key] = error;
      }
    });
    return errors;
  };
}
