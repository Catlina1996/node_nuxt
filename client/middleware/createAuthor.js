import getCookie from '@/config/get-cookie';

export default function ({store, route, redirect, req}) {
  // If the user is not authenticated
  const {auth} = getCookie(req);
  if (auth) {
    store.commit('setAuth', auth)
  }
}
