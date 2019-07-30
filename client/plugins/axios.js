import Cookie from 'js-cookie'

export default function({ $axios, redirect }) {

  $axios.defaults.baseURL = process.env.baseUrl;

  $axios.onRequest(config => {
    if (config.data) {
      config.data = JSON.stringify(config.data)
    }
    config.headers = {
      'Content-Type': 'application/json; charset=utf-8'
    };
    let token = Cookie.get('auth');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  });



  $axios.onError(error => {
    // console.log("错误", error);
    const code = parseInt(error.response && error.response.status);
    if (code === 404) {
      redirect('/404')
    }
  })

}
