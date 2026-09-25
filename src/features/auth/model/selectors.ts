import type {RootState} from "@/app/store/store";


export const selectUser = () => {}
export const selectAuthStatus = (state: RootState) => state.auth.status;