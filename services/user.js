import api from './api';

const UsersService = {
  signUp: ({
    name,
    email,
    password,
    password_confirmation,
    profile
  }) =>
    api.post('/auth/user', {
      name,
      email,
      password,
      password_confirmation,
      profile
    }),
  signIn: ({ email, password }) =>
    api.post('auth/user/sign_in', {
      email,
      password
    }),

  signOut: () => {
    api.delete('auth/user/sign_out')
  }
}

export default UsersService;