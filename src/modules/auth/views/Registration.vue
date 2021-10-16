<template>
    <div class="registration">
        <h1>Bienvenido/a</h1>
        <h3 v-if="!errors.length">Le ayudamos a cumplir con sus tareas a tiempo</h3>
        <p 
            v-else
            class="title-errors">
            <b>Por favor, corrija el(los) siguientes error(es):</b>
            <ul>
                <li v-for="error in errors" :key="error">{{error}}</li>
            </ul>
        </p>
        <form @submit.prevent="validateForm">
            <input 
                type="text" 
                placeholder="Escribe su nombre"
                v-model.trim="user.name">
            
            <input 
            type="email" 
            placeholder="Escribe su email" 
            v-model.trim="user.email"
            autocomplete="username">

            <input 
            type="password" 
            placeholder="Escribe la contraseña" 
            v-model="user.password"
            autocomplete="new-password"
            >
            
            <input 
            type="password" 
            placeholder="Confirme contraseña" 
            v-model="confirmPassword"
            autocomplete="new-password"
            >
            
            <div class="container-button">
                <button type="submit">Registrar</button>
            </div>
        </form>
    <h5 class="h5-cuenta">¿Tienes una cuenta? <router-link :to="{name: 'login'}">Inicia sección</router-link></h5> 
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import Swal from 'sweetalert2'


export default {
    name: 'registration',
    data(){
        return {
            user: {
                name: '',
                email: '',
                password: '' ,
                photoProfile:   'https://res.cloudinary.com/ddn278n2q/image/upload/v1634324957/profile/iuhnxokjoz8fjhy0qlge.jpg',
            },
            ok: false,
            message: '...',
            errors: [],
            confirmPassword: '',
        }
    },
    methods: {
        ...mapActions( 'auth', ['createUser']),

        async validateForm( user ){
            this.errors = []

            if(!this.user.name){
                this.errors.push('El nombre es obligatorio.')
            }

            if(!this.user.email){
                this.errors.push('El correo es obligatorio')
            }

            if(!this.user.password || !this.confirmPassword){
              return  this.errors.push('La contraseña es obligatoria')

            } else if (this.user.password.length < 6){
                this.errors.push('La contraseña debe tener un mínimo 6 carácteres')

            }

            if(this.user.password !== this.confirmPassword )  {
        
                this.errors.push('La contraseña no coincide')
                 
            }
            

            if(this.errors.length == 0){
                this.registerUser(this.user)
                
            }
            
        },

        async registerUser( user ){
            // enviar los datos
            
            
            const resp =  await this.createUser( user )
        
            /*Traducir a Español el mensaje */
            if(resp.message === 'EMAIL_EXISTS') {
                resp.message = 'La dirección de correo electrónico ya está siendo utilizada por otra cuenta.'

            } else if( resp.message === 'OPERATION_NOT_ALLOWED'){
                resp.message = 'Hemos bloqueado todas las solicitudes de este dispositivo debido a una actividad inusual. Vuelve a intentarlo más tarde.'

            } else if ( resp.message === 'OPERATION_NOT_ALLOWED'){
                resp.message = 'El inicio de sesión con contraseña está desactivado para este proyecto.'

            } else if( resp.message === 'INVALID_EMAIL'){
                resp.message = 'El correo no es válido'
            }


            /*Salta la alerta si la resp.ok es false */
            
                if(!resp.ok) Swal.fire('Error', resp.message, 'error')
                else {
                    this.$router.push({name: 'todolayaout'})

                }

            /*Resetea el usuario */
            this.user = {
                name:'',
                email: '',
                password: '' ,
                photoProfile: 'https://res.cloudinary.com/ddn278n2q/image/upload/v1634324957/profile/iuhnxokjoz8fjhy0qlge.jpg',
            }
            
            this.confirmPassword = ''
            
        },
        
        
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

li {
    text-align: left;
    
}

.title-errors{
    font-size: .8em;
}

.registration {
    width: 290px;
    margin: auto;
    text-align: center;
}

.registration h1 {
    font-size: 1.3em;
}

.registration h3 {
    font-size: .8em;
    font-weight: 500;
}


.container-button {
  text-align: center;
  margin: 1.5em 0;
}

.container-button button {
  width: 200px;
  height: 40px;
  background-color: #FFD200;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1em;
  cursor: pointer;
}

.container-button button:active {
  background-color: #FAE78C;
}

.h5-cuenta {
    font-size: .9em;
}

</style>