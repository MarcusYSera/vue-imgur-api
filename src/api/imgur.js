import qs from 'qs';

const ROOT_URL = 'https://api.imgur.com';

export default {
  login() {
    const querystring = {
      client_id: process.env.VUE_APP_CLIENT_ID,
      response_type: 'token',
    };
    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(
      querystring
    )}`;
  },
};
