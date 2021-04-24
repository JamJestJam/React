import IUsersReducer from "./IUsersReducer";

const defaultState = (): IUsersReducer => ({
    users: [],
    user: undefined
});

export default defaultState;