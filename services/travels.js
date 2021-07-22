import api from './api'

const TravelsService = {
  index: (url) => {
    return api.get(url).then(response => response.data);
  },
}

export default TravelsService