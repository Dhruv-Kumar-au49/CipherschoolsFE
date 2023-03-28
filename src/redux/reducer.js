import {createReducer} from '@reduxjs/toolkit'


export let phelaReducer = createReducer(
    {


        isLogin:false,
    },

    {
        userlogin:(state, action)=>{
           state.isLogin = action.payload
           
        },
    }
    );

    