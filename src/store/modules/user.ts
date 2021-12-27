export default {
  namespaced: true,
  state(){
    return {
      profile: {
        id: '',
        avatar: '',
        nickname: '',
        account: '',
        mobile: '',
        token: ''
      },
      redirectUrl: '/'
    }
  }, 
  mutations: {
    setUser(state:any, payload:any){
      state.profile = payload
    },
    setRedirectUrl(state:any, url: string){
      state.redirectUrl = url
    }
  }
}
