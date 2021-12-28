import { Module } from 'vuex'
import {IUserState} from './types'
import {IRootState} from '../types'

const userModule: Module<IUserState, IRootState> = {
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
export default  userModule
