import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'


export const useAuth = defineStore({
    id : 'auth',
    state : () => ({
        message : "",
    }),

    actions : {
        async a$login(name,username,password){
            try {
                const response = await axios.post('https://be.tautan.tk/auth/login',{name,username,password})
                if(response.status == 200){

                    this.message = "Login Sukses"
                }else {

                    this.message = response.data.error
                }
                

            } catch (error) {
             
                this.message = error.response.data.error
            }
        },
        async a$register(name,username,password){
            try {
                const response = await axios.post('https://be.tautan.tk/auth/register',{name,username,password})
                if(response.status == 200){

                    this.message = "Register Sukses"
                }else {

                    this.message = response.data.error
                }
                

            } catch (error) {
             
                this.message = error.response.data.error
            }
        }
    }
})