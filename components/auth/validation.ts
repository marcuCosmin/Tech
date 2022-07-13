import { ErrorState } from './Interfaces';

function validateEmail(email: string): ErrorState {
  const errorShallow = {
    visible: false,
    message: '',
  };

  if (!email.length) errorShallow.visible = true;

  if (!errorShallow.visible) {
    const emailDomain = email.split('@')[1].split('.');

    if (emailDomain.length < 2) {
      errorShallow.visible = true;
      errorShallow.message = 'Invalid domain provided';
    }
  }

  return errorShallow;
}

export { validateEmail };
