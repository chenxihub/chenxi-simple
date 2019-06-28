import {getUsersData, getSystemData} from "../../service/users";

export default {
  namespaced: true,
  state: {
    count: {
      status: false,
      userCount: 0,
      groupCount: 0,
      resCount: 0,
      orgCount: 0,
      usersByStatus: 0,
      totalUsers: 0,
      numberArrays: 0,
    },
    system: {},
  },
  mutations: {
    USERGROUPORGAPPDATA(state, data) {
      state.count.status = true;
      state.count.userCount = data.totalUsers || 0;
      state.count.groupCount = data.totalGroups || 0;
      state.count.orgCount = data.totalOrgs || 0;
      state.count.resCount = data.totalResources || 0;
      state.count.usersByStatus = data.usersByStatus || 0;
      state.count.totalUsers = data.totalUsers || 0;
      state.count.numberArrays = data.numberArrays || 0;
    },
    SYSTEMDATA(state, data) {
      state.system = data;
    },
  },
  actions: {
    getUserGroupOrgAppDataAction({commit}) {
      return new Promise((resolve, reject) => {
        getUsersData().then(res => {
          if (res.status === 200) {
            commit("USERGROUPORGAPPDATA", res.data);
            resolve(res.data);
          } else {
            reject(res);
          }
        });
      });
    },
    getSystemDataDataAction({commit}) {
      return new Promise((resolve, reject) => {
        getSystemData().then(res => {
          if (res.status === 200) {
            commit("SYSTEMDATA", res.data);
            resolve(res.data);
          } else {
            reject(res);
          }
        });
      });
    },
  },
};
