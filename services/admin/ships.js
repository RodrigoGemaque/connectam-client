import api from '../api'


const ShipsService = {

  index: (url) => {
    return api.get(url).then(res => res.data);
  },

  create:(ship) => {
    // console.log(ship)
    return api.post('/admin/v1/ships', ship)
  
  },

  
  update: (ship) => {
    return api.patch(
      `/admin/v1/ships/${ship.get('ship[id]')}`,
      ship
    );
  },

    // função para remoção de uma categoria
  delete: (id) => {
    return api.delete(`/admin/v1/ships/${id}`);
  },
  

}

export default ShipsService;