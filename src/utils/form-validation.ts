export const usernameValidation = {
  required: {
    value: true,
    message: 'Please enter a username',
  },
  minLength: {
    value: 3,
    message: 'Username must be at least 3 characters',
  },
  pattern: {
    value: /^[a-zA-Z0-9]+$/,
    message: 'Username must be alphanumeric',
  },
};

export const emailValidation = {
  required: {
    value: true,
    message: 'Please enter an email',
  },
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: 'Please enter a valid email',
  },
};

export const passwordValidation = {
  required: {
    value: true,
    message: 'Please enter a password',
  },
  minLength: {
    value: 6,
    message: 'Password must be at least 6 characters',
  },
};
