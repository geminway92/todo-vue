<template>
  <div 
    @click.self="this.$emit('openModalPhoto')"
    class="container-modal-photo">
      <div class="modal">
        <h1>¿Desea cambiar la foto de perfil?</h1>
        <input type="file" 
            @change="uploadImageProfile"
            ref="imageSelector"
            v-show="false"
            accept="image/png, image/jpeg">
        <button @click="onSelectedImage">Subir foto</button>
      </div>
  </div>
</template>

<script>
import uploadImage from '../helpers/uploadImage'

export default {
    emits: ['openModalPhoto','updatePhoto',],
    data(){
        return{
            picture:''
        }
    },


    methods: {
        onSelectedImage( ){
        const data = this.$refs.imageSelector.click()
        console.log(data)
     
      },

        async uploadImageProfile(event){
            const file = event.target.files[0]
            if(!file){
                return
            }
            const picture = await uploadImage(file)
            console.log(this.picture)
            this.$emit('updatePhoto', picture)
            this.$emit('openModalPhoto')
        }
    }



}
</script>
<style scoped>
h1 {
    font-size: 1em;
    font-weight: 500;
    text-align: center;
    padding: .5em;
}
button{
  width: 200px;
  height: 40px;
  background-color: #FFD615;
  border: 3px solid #FFD615;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1em;
  cursor: pointer;
  border-top-color: #ffd000;
}

button:active {
    background-color: #fcdb47;
    border: #fcdb47;
}

.container-modal-photo {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.384);
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 2;
}

.modal {
    position: relative;
    width: 90%;
    background-color: #F5F5F5;
    border-radius: 5px;
    height: 120px;
    top: 17em;
    text-align: center;
    margin: auto;
}

@media screen and (min-width: 700px){
    .modal {
        width: 600px;
        left: 0;
    }
}
</style>

