import { createReducer, on } from "@ngrx/store";
import { UserModel } from "../user.model";
import { addUser } from "./users.action";

export const initialState: UserModel[] = []

export const usersReducer = createReducer(
    initialState,
    on(addUser,(state,{user})=>{
        const newUser = {...user, name:'By ' + user.name}
        return [...state,newUser]
    })
)