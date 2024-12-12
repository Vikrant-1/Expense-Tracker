import { get } from "lodash";
import { RootState } from "../store";


export const getAllGroupsSelector = (state: RootState) => {
    return get(state, 'groupState.groups', []);
}

export const hasGroupsSelector = (state: RootState) => {
    const groups = get(state, 'groupState.groups', []);
    return groups.length >= 1 ? true : false;
}