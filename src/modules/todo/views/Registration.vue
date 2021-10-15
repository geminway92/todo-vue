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
        <form @submit.prevent="checkForm">
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
            v-model.number="user.password"
            autocomplete="new-password">
            
            <input 
            type="password" 
            placeholder="Confirme contraseña" 
            v-model.number="confirmPassword"
            autocomplete="new-password">
            
            <div class="container-button">
                <button type="submit">Registrar</button>
            </div>
        </form>
    <h5 class="h5-cuenta">¿Tienes una cuenta? <span @click="routerLogin()">Inicia sección</span></h5> 
    </div>
</template>

<script>
import { mapActions} from 'vuex'
import { nanoid } from 'nanoid'


export default {
    name: 'registration',
    data(){
        return {
            user: {
                id:  '',
                name: '',
                email: '',
                password: null ,
            },
            errors: [],
            confirmPassword: null,
        }
    },
    methods: {
        ...mapActions( 'todo', ['setUser']),
        checkForm(){
            this.errors = []

            if(!this.user.name){
                this.errors.push('El nombre es obligatorio.')
            }
            if(!this.user.email){
                this.errors.push('El correo es obligatorio')
            }
            if(!this.user.password || !this.confirmPassword){
                this.errors.push('La contraseña es obligatoria')

            } else {
                if(this.user.password !== this.confirmPassword ) {
                    this.errors.push('La contraseña no coincide')
                } 
            }

            if(this.user.name && this.user.email && this.user.password && this.user.password == this.confirmPassword) {

                // generar id
                this.user.id = nanoid()
                console.log(this.user)
    
                // enviar los datos
                this.setUser(this.user)
    
    
                this.user = {
                    id:  '',
                    name: '',
                    email: '',
                    password: null ,
                }
            }
            

        },
        
        
        routerLogin(){
            this.$router.push({name: 'login'})
        }
    }

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

span {
    color: #FFD200;
    font-size: 1.1em;
}
</style>