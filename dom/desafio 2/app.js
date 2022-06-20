new Vue({
    el: '#desafio',
    data: {
        valor: '',
        valor2: '',
    },
    methods: {
        exibirAlerta() {
            alert('Parte 1 OK!')
        },
        armazenar(event) {
            this.valor = event.target.value
        },
        
    }
})