import IUsersReducer from "./IUsersReducer";

const defaultState = (): IUsersReducer => ({
    users: [],
    user: 0
});

export default defaultState;