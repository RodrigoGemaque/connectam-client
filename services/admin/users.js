import api from '../api';


const UsersService = {
  signUp: ({ 
    name, 
    email, 
    password, 
    password_confirmation 
  }) => 
    api.post('/auth/v1/user', {
      name,
      email,
      password,
      password_confirmation
    }),

  signIn: ({ email, password }) => 
    api.post('auth/v1/user/sign_in', {
      email,
      password
    }),

  resetPassword: (email) => 
    api.post('/auth/v1/user/password', {
      email,
      redirect_url: process.env.redirect_url
    }),

  changePassword: ({ 
    password, 
    password_confirmation, 
    reset_password_token 
  }) => 
    api.patch('/auth/v1/user/password', {
      password,
      password_confirmation,
      reset_password_token
    }),

  index(url) {
    return api.get(url).then(response => response.data);
  },

  create(user) {
    console.log(user)
    return api.post('/admin/v1/users', { user: user });
  },

  update(user) {
    
    return api.put(`/admin/v1/users/${user.id}`, { user: user });
  },

  delete(id) {
    return api.delete(`/admin/v1/users/${id}`);
  }
}

export default UsersService;



