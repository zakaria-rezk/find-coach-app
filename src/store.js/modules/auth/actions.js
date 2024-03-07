let timer;
export default {
  async login(context, paylod) {
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCpPs4T1LOUpOHcskCeBp7TmpuHIwjgvbM',
      {
        method: 'POST',
        body: JSON.stringify({
          email: paylod.email,
          password: paylod.password,
          returnSecureToken: true,
        }),
      }
    );
    const reponseDate = await response.json();

    if (!response.ok) {
      const error = new Error(reponseDate.message || 'faild to authenticate');
      throw error;
    }
    const expiresIn = +reponseDate.expiresIn * 1000;
    
    const expiresnDate = new Date().getTime() + expiresIn;
    localStorage.setItem('tokenExpiration', expiresnDate);
    localStorage.setItem('token', reponseDate.idToken);
    localStorage.setItem('id', reponseDate.localId);

    timer = setTimeout(function () {
      context.dispatch('logout');
    }, expiresnDate);

    context.commit('setUser', {
      userid: reponseDate.localId,
      token: reponseDate.idToken,
    });
  },
  autoLogin(context) {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');
   
    const tokenExpiration =localStorage.getItem('tokenExpiration')
    
    const expin =+tokenExpiration - new Date().getTime()
    if (expin <0){
        return;
    }
    timer = setTimeout(function(){
        context.dispatch('logout');
    }, expin)
    if (token && id) {
      context.commit('setUser', {
        userid: id,
        token: token,
      });
    }
  },
  async signup(context, paylod) {
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCpPs4T1LOUpOHcskCeBp7TmpuHIwjgvbM',
      {
        method: 'POST',
        body: JSON.stringify({
          email: paylod.email,
          password: paylod.password,
          returnSecureToken: true,
        }),
      }
    );
    const reponseDate = await response.json();

    if (!response.ok) {
      console.log(reponseDate);
      const error = new Error(reponseDate.message || 'faild to authenticate');
      throw error;
    }
    context.commit('setUser', {
      userid: reponseDate.localId,
      token: reponseDate.idToken,
      expiresIn: reponseDate.expiresIn,
    });
  },
  logout(context) {
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpiration');
    clearTimeout(timer);
    context.commit('setUser', {
      userid: null,
      token: null,
    });
  },
};
