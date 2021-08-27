import api from '../api';


const OwnersService = {
  signUp: ({ 
    name, 
    email, 
    password, 
    password_confirmation 
  }) => 
    api.post('/auth/v1/owner_ship', {
      name,
      email,
      password,
      password_confirmation
    }),

  signIn: ({ email, password }) => 
    api.post('auth/v1/owner_ship/sign_in', {
      email,
      password
    }),

  resetPassword: (email) => 
    api.post('/auth/v1/owner_ship/password', {
      email,
      redirect_url: process.env.redirect_url
    }),

  changePassword: ({ 
    password, 
    password_confirmation, 
    reset_password_token 
  }) => 
    api.patch('/auth/v1/owner_ship/password', {
      password,
      password_confirmation,
      reset_password_token
    }),

  index(url) {
    return api.get(url).then(response => response.data);
  },

  create(owner_ship) {
    console.log(owner_ship)
    return api.post('/admin/v1/owner_ships', { owner_ship: owner_ship });
  },

  update(owner_ship) {
    
    return api.put(`/admin/v1/owner_ships/${owner_ship.id}`, { owner_ship: owner_ship });
  },

  delete(id) {
    return api.delete(`/admin/v1/owner_ships/${id}`);
  }
}

export default OwnersService;



