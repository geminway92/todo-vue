<template>
    <div class="forget-password">
        <div class="container-form">
            <h1>¿Olvidaste la contraseña?</h1>
            <form @submit.prevent="changePassword(email)" >
                <input
                    class="input-password"
                    type="text"
                    placeholder="Escribe su email"
                    v-model="email">
                    <button type="submit" class="container-button">Restablecer contraseña</button>
            </form>
            <h3>*Recibirá un correo con instrucciones para resetar su contraseña. </h3>
            <router-link :to="{name: 'login' }"> ¿Ya tienes una cuenta?</router-link>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import Swal from 'sweetalert2'

export default {
    name: 'forgetPassword',
    data(){
        return{
            email: ''
        }
    },

    methods: {
        ...mapActions('auth',['sendCodePaswword']),

        async changePassword(email){
           
           const resp = await this.sendCodePaswword(email)

           /*Validamos los mensajes que llegan */
           if(resp.message === 'INVALID_EMAIL'){
               resp.message = 'La dirección de correo electrónico está mal escrita.'
           
           }else if(resp.message === 'MISSING_EMAIL'){
               resp.message = 'No has escrito ningún email'
           
           }else if(resp.message === 'EMAIL_NOT_FOUND'){
               resp.message = 'No hay ningún registro de usuario correspondiente a este identificador. El usuario puede haber sido eliminado.'
           
           }else if(resp.message === 'RESET_PASSWORD_EXCEED_LIMIT') {
               resp.message = 'Se ha excedido las peticiones de resetear contraseña, inténtelo más tarde'
           }
            
            if(resp.ok)Swal.fire({
                    icon: 'success',
                    title: 'Se ha realizado correctamente',
                    text: 'Si no lo encuentra, mire en la bandeja de no deseados',
                    confirmButtonColor: '#FFD200',
                })
        
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: resp.message,
                    confirmButtonColor: '#FFD200',
                })
            }
        }
    }

}
</script>

<style scoped>
a {
    position: relative;
    top: 1em;
    color: #FFD200;
    font-size: 1em;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
}

input {
    width: 250px;
    height: 40px;
    border-radius: 20px;
    border: none;
    font-size: .9em;
    font-family: 'Poppins', sans-serif;
    padding-left: 1.4em;
}

form{
    width: min-content;
    height: min-content;
    display: flex;
    flex-direction: column;
    margin: auto;
    gap: 2em;
}

h1{
    position: relative;
    bottom: 1.5em;
    text-align: center;
    font-size: 1.2em;
}

h3{
    font-size: .8em;
    text-align: center;
    font-weight: 300;
}

.forget-password{
    width: 90vw;
    height: 100%;
    margin: auto;
    text-align: center;
}

.container-button {
  margin: auto;
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

@media screen and (min-width: 360px) {
    .forget-password{
        transform: translateY(10%);
    }
}

@media screen and (min-width: 700px) {

    
    form{
        width: 500px;
    }

    input{
        width: 400px;
        margin: auto;
    }


    .container-form{
        background-color: #F9E894;
        border-radius: 10px;
        border-top: 4px solid #ecce35;
        border-right: 4px solid #ecce35;

        margin: auto;
        max-width: 500px;
        height: 210px;
        transform: translateY(55%);
    }

    .container-form:hover{
        border-top: #F9E894;
        border-right: 4px solid #F9E894;
    }
}

@media screen and (min-width: 800px) {

    .container-form{
        transform: translateY(100%);
    }
}

@media screen and (min-width: 1200px) {

    .container-form{
        transform: translateY(50%);
    }
}

</style>