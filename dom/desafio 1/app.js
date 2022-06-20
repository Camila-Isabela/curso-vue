new Vue({
    el: '#desafio',
    data: {
        nome: 'Camila Isabela Lins Soares',
        idade: 36,
        imagem: 'https://as1.ftcdn.net/v2/jpg/01/63/74/20/1000_F_163742074_xXiKIiQ75jdQDULESQql7Y1f5uS0XIMK.jpg'
    },
    methods: {
        randomico() {
            return Math.random()
        },
        idademulti() {
            return this.idade * 3
             
        }
    }
}) 