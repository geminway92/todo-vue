<template>
    <div class="login">
      <h1>Bienvenido/a de nuevo</h1>
      <div class="container-img">
          <img src="../assets/images/2151574.jpg" alt="">
      </div>
      <form @submit.prevent="">
          <input 
            type="email"
            autocomplete="email"
            placeholder="Introduce tu email">
          <input 
          type="password"
          autocomplete="new-password"
          placeholder="Introduce tu contraseña">
      </form>
        <h5 class="password-forgot">Olvidé mi contraseña</h5>
        <div class="container-button">
            <button type="submit">Iniciar Sección</button>
        </div>
        <h5 class="h5-cuenta">¿No tienes una cuenta? <span @click="routerRegister()">Regístrese</span></h5> 
    </div>
</template>

<script>
export default {
    name: 'login',
    methods: {
        routerRegister(){
            this.$router.push({ name: 'registration'})
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

.container-button button {
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