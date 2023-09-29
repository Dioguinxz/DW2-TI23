const filmes = [

    {
        nome: 'Vingadores: Guerra Civil',
        genero: 'Ação',
        anoLançamento: 2016,
        idiomas: [
            'Portugues',
            'Ingles',
            'Russo'
        ]

    },

    {
        nome: 'Rei Leão',
        genero: 'animação',
        anoLançamento: 1994,
        idiomas: [
            'Ingles',
            'Portugues',
            'Espanhol'
        ]
    },

    {
        nome: 'Mathilda',
        genero: 'Musical',
        anoLançamento: 1996,
        idiomas: [
            'Ingles',
            'Espanhol',
            'Italiano',
            'Portugues'
        ]
    }
]

const htmlList = document.querySelector('#filmes')


for (let filme of filmes) {
    const p = document.createElement('p');
    p.textContent = filme.nome;
    htmlList.appendChild(p);
}








//Faça a modelagem e definição de uma lista dos seus filmes favoritos. Cada filme deve conter pelo menos 3 propriedades
//e pelo menos um deles deve ser um array de string. Além disso, deve possuir uma propriedade que seja do tipo array
//de objetos.