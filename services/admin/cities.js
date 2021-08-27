import api from '../api'


const CitiesService = {

  index: (url) => {
    return api.get(url).then(res => res.data);
  },

  create:(name) => {
    // console.log(city)
    return api.post('/admin/v1/cities', {city: {name}})
  
  },

  
  update: ({id, name}) => {
    return api.patch(`/admin/v1/cities/${id}`, {city: {name}});
  },

    // função para remoção de uma categoria
  delete: (id) => {
    return api.delete(`/admin/v1/cities/${id}`);
  },
  

}

export default CitiesService;