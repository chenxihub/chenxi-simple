import {getUserAccountStatus} from "../../service/users";

export default {
  namespaced: true,
  state: {
    accountStatus: null,
  },
  mutations: {
    UPDATEACCOUNTSTATUS(state, data) {
      state.accountStatus = data;
    },
  },
  actions: {
    putChangeAccountStatusAction({commit}, params) {
      console.log(params);
      return new Promise((resolve, reject) => {
        getUserAccountStatus(params.key, params.data).then(res => {
          if (res.status === 200) {
            commit("UPDATEACCOUNTSTATUS", res.data);
            resolve(res.data);
          } else {
            reject(res.data);
          }
        });
      });
    },
  },
};
