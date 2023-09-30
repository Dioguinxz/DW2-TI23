const medicos = [
    {
        nome: 'Leticia',
        sobrenome: 'Costana',
        genero: 'feminino',
        imagemPerfil: 'http://placekitten.com/400/400'
    },
    {
        nome: 'Adimaldo',
        sobrenome: 'Pinto',
        genero: 'masculino',
        imagemPerfil: 'http://placekitten.com/401/401'
    },
    {
        nome: 'Noah',
        sobrenome: 'Lutus',
        genero: 'nao-binario',
        imagemPerfil: 'http://placekitten.com/402/402'
    },
];

let doutor;
let apresentacao = "";


const root = document.querySelector('#root')

for (let medico of medicos) {


    let img = document.createElement('img');
    img.src = medico.imagemPerfil;
    root.appendChild(img);

    p = document.createElement('p');
    p.textContent = medico.genero;
    root.appendChild(p);

    if (medico.genero === 'masculino') {
        apresentacao = `'Dr. ${doutor.nome} ${doutor.sobrenome}`

    } else if (medico.genero === 'feminino') {
        apresentacao = `'Dr(a) ${doutor.nome} ${doutor.sobrenome}`

    } else if (medico.genero === 'nao-binario') {
        apresentacao = `'Dr(e) ${doutor.nome} ${doutor.sobrenome}`
    }

    p = document.createElement('p');
    p.textContent = medico.nome;
    root.appendChild(p);

}