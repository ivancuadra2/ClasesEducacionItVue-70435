<template>
    <div>
        <button v-if="validacion" :class="miClase" :style="`background-color: ${color}`">
            {{ nombre}}
        </button>
        <button @click = "nombre = nombre + ' '" >
            incrementar nombre 
        </button>
    </div>
</template>
<script>
export default {
    name: 'Button',
    props:['color'],
    data() {
        return {
           nombre: 'Iva',
           apellido: 'Cuadrado',
           nombreButton: 'Lindo Botón' 
        }
    },
    computed: {
        validacion () {
            console.log('Computada')
            return  this.nombre.length > 5
        }
    }
}
</script>

<style>
.miClase {
    background-color: blue;
}

/* button {
    background-color: red;
} */

</style>