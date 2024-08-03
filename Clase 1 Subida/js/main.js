const app = new Vue({
    el: '#app',
    data: {
        mensaje : 'Hola VueJS',
        mensajeHTML : '<p style="color: red;">Hola VueJS!</p>',
        mostrar : true,
/*         usuarios : [
            'Pedro',
            'Juan',
            'Ana',
            'Laura'
        ] */
        usuarios : [
            {nombre: 'Pedro', apellido: 'Gómez', edad: 32, curso: false, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png'},
            {nombre: 'Juan', apellido: 'Picos', edad: 43, curso: true, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/12_avatar-512.png'},
            {nombre: 'Ana', apellido: 'Gutierrez', edad: 27, curso: true, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png'},
            {nombre: 'Laura', apellido: 'Sánchez', edad: 31, curso: false, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-512.png'}
        ]
    },
    methods: {
        /*
        cambiarVistaTexto : function() {

        }
        */
        cambiarVistaTexto() {
            this.mostrar = !this.mostrar;
        },
        borrarUsuario(index) {
            this.usuarios.splice(index, 1);
        }
    }
})