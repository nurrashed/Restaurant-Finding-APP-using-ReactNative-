import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer 1YHbdsYijDs4p6Cp3zFehX4ZTytmfVCGreZVjT9XY78Unl-n5i44K13dJRpNnR9YQJ4thg_hCb_PjW3KH6u6WIyIQTvDsEsNT1bJm_RgrXQJxpSvpTuwT1UBPyO9XnYx'
  }
});