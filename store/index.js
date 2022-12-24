export const state = {

  user:{
    email:null,
    password:null
  },
  isLogin:false,
  selectedProduct:null



}

export const getters = {

  getUser(state){
    return state.user
  },
  getLoginInfo(state){
    return state.isLogin
  },
  getSelectedProduct(state){
    return state.selectedProduct
  }


}


export const mutations = {

  setUser(state,user){
    state.user = user
  },
  setLogin(state,bool){
    state.isLogin = bool
  },
  setSelectedProduct(state,product){
    state.selectedProduct = product
  }


}



