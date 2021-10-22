<template>
    <div class="forget-password">
    <div class="container-modal">
        <div class="container-form">
            <h1>¿Olvidaste la contraseña?</h1>
            <form @submit.prevent="" >
                <input
                    class="input-password"
                    type="text"
                    placeholder="Escribe su email">
            </form>
            <h3>*Recibirá un correo con instrucciones para resetar su contraseña </h3>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'forgetPassword',
    methods: {
        
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
    font-family: 'Poppins', sans-serif;
    padding-left: 1.4em;
}

h1{
    position: relative;
    bottom: 1.5em;
    text-align: center;
    font-size: 1.2em;
}

h3{
    font-size: .8em;
    text-align: start;
    font-weight: 300;
}

.forget-password{
    width: 90vw;
    height: 100%;
    margin: auto;
    text-align: center;
}





</style>