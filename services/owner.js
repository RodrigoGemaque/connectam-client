import api from './api';

const OwnerService = {
  signUp: ({
    name,
    email,
    password,
    password_confirmation,
    profile
  }) =>
    api.post('/auth/owner_ship', {
      name,
      email,
      password,
      password_confirmation,
      profile
    }),
  signIn: ({ email, password }) =>
    api.post('auth/owner_ship/sign_in', {
      email,
      password
    }),

  signOut: () => {
    api.delete('auth/owner_ship/sign_out')
  }
}

export default OwnerService;