<template>
    <div class="login">
      <h1>Bienvenido/a de nuevo</h1>
      <div class="container-img">
          <img src="../../../assets/images/2151574.jpg" alt="">
      </div>
      <form class="form-login" @submit.prevent="loginUser">
          <input 
            type="email"
            autocomplete="email"
            placeholder="Introduce tu email"
            v-model="user.email">
          <input 
          type="password"
          autocomplete="new-password"
          placeholder="Introduce tu contraseña"
          v-model="user.password">
        <h5 class="password-forgot">Olvidé mi contraseña</h5>
            <button type="submit">Iniciar Sección</button>
      </form>
        <div class="container-button">
        </div>
        <h5 class="h5-cuenta">¿No tienes una cuenta? <router-link :to="{ name: 'registration'}">Regístrese</router-link></h5> 
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import Swal from 'sweetalert2'

export default {
    name: 'login',
    data(){
        return{
            user: {
                name: '',
                email: '',
                password: '' ,
            },
        }
    },
    
    methods: {
        ...mapActions('auth', ['signInUser']),

        async loginUser(){
            const resp = await this.signInUser( this.user )

            /*Traducir mensaje a Español */
            if(resp.message === 'INVALID_PASSWORD'){
                resp.message = 'La contraseña no es válida o el usuario no tiene contraseña.'
            } else if(resp.message === 'USER_DISABLED'){
                resp.message = 'La cuenta de usuario ha sido desactivada por un administrador.'
            } else if(resp.message === 'EMAIL_NOT_FOUND'){
                resp.message = 'No hay ningún registro de usuario correspondiente a este identificador. El usuario puede haber sido eliminado.'
            } else if(resp.message === 'INVALID_EMAIL'){
                resp.message = 'El correo no es válido o el usuario no tiene contraseña'
            } else if(resp.message === 'MISSING_PASSWORD'){
                resp.message = 'Falta la contraseña'
            }

            /*Salta la alerta si la resp.ok es false */

            if(!resp.ok) Swal.fire('Error', resp.message, 'error')
            else {
                this.$router.push({name: 'todolayaout'})
            }
        }
    },
    
    
}

</script>

<style scoped>

input {
    width: 220px;
    height: 40px;
    border-radius: 20px;
    border: none;
    font-size: .9em;
    margin: .5em 0;
    font-family: 'Poppins', sans-serif;
    padding-left: 1.4em;
}

a {
    color: #FFD200;
    font-size: 1.1em;
    text-decoration: none;
}


.login {
    text-align: center;
}

.login h1 {
    font-size: 1.3em;
    margin-bottom: 2em;
}

.container-img {
    width: min-content;
    margin-left: 4em;
    margin: 2em 4em ;
}

.container-button {
  text-align: center;
  margin: 1.5em 0;
}

.form-login button {
  width: 200px;
  height: 40px;
  background-color: #FFD615;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1em;
  cursor: pointer;
}

.password-forgot {
    color: #FFD200;
    font-size: 1em;
}

.form-login button:active {
  background-color: #FAE78C;
}


.h5-cuenta {
    font-size: .9em;
}




</style>