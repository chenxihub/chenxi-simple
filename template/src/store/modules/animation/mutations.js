import { RIGHTLAYOUTANIME } from '../../mutation-types';

export default {
    [RIGHTLAYOUTANIME](state, { data }) {
        state.data = data;
    },
};
