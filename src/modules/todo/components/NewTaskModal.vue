<template>
    <div @click.self="this.$emit('openModal')" class="container-modal">
        <div class="container-form">
            <form @submit.prevent="this.$emit('createTask')">
                <input
                    id="input_newTask"
                    @submit="this.$emit('createTask')"
                    type="text"
                    keyup.enter="submit"
                    v-model="newTask.text"
                    placeholder="Escribe tu tarea"
                />
            </form>
        </div>
    </div>
</template>

<script>
export default {
    emits: ['openModal', 'createTask'],
    props: {
        newTask: {
            type: Object,
            default: {
                id: '',
                text: '',
                completed: false,
            }
        },
        showIconPlus: {
            type: Boolean
        }
    }
}
</script>

<style scoped>
form {
    margin: auto;
    width: 90%;
}

input {
    width: 80%;
    height: 30px;
    padding-left: 0.5em;
    border-radius: 5px;
    border: 1px solid #c2c2c2;
    margin: 1em;
    font-weight: 500;
    font-size: 0.9em;
}

.container-modal {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.384);
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 2;
}

.container-form {
    position: relative;
    min-width: 200px;
    background-color: #ffea8a;
    border-radius: 5px;
    height: min-content;
    top: 17em;
    margin: auto;
}

.container-form input {
    padding: 1em;
}

.container-form input:focus {
    border: 1px solid #ffd615;
    outline: 0 none;
}

@media screen and (max-width: 320px) {
    .container-form {
        top: 6em;
        left: 0em;
        margin: auto;
    }
}

@media screen and (min-width: 400px) {
    input {
        width: 84%;
    }
}

@media screen and (min-width: 700px) {
    .container-form {
        width: 700px;
    }

    input {
        width: 570px;
    }
}

@media screen and (min-width: 1200px) {
    .container-form {
        width: 600px;
    }

    input {
        position: relative;
        width: 480px;
    }
}
</style>
