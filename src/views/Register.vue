<script setup>
import { storeToRefs } from 'pinia';
import { ref, watch } from 'vue';
import { useAuth } from '../stores/auth';
    const name = ref('')
    const username = ref('')
    const password = ref('')
    const  {message} = storeToRefs(useAuth());
    const handleRegister = async () => {
     
        console.log(name.value)
        await useAuth().a$register(name.value,username.value,password.value);
        alert(message.value);
    }

</script>

<template>
    <div>
        
       <label for="">name</label>
       <input type="text" name="" v-model="name" id="">
       <label for="">username</label>
       <input type="text" name="" v-model="username" id="">
       <label for="">password</label>
       <input type="text" name="" v-model="password" id="">
       <button @click="handleRegister" >register</button>
       
    </div>
</template>