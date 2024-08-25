import { createAction, props } from "@ngrx/store";
import { UserModel } from "../user.model";

export const addUser = createAction(
    "[USers] Add user action",
    props<{user:UserModel}>()
)