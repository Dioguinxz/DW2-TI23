const alunos = [
    {
      nome: 'Mathias',
      notas: [
        { cadeira: 'DW2', nota: 10 },
        { cadeira: 'BD2', nota: 7 },
      ],
    },
    {
      nome: 'Luiza',
      notas: [
        { cadeira: 'DW2', nota: 8 },
        { cadeira: 'BD2', nota: 8 },
      ],
    },
    {
      nome: 'Pedro',
      notas: [
        { cadeira: 'DW2', nota: 10 },
        { cadeira: 'BD2', nota: 10 },
      ],
    }
  ]

  const mediaGeral = alunos.map((aluno) => {
    const notas = aluno.notas.map((nota) => nota.nota);
    let somaNotas = 0;
    
    for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i];
    }
    
    const mediaGeral = somaNotas / notas.length;
    return { ...aluno, mediaGeral };
    });
    
    mediaGeral.map((aluno) => {
    console.log(`${aluno.nome} `);
    console.log(`Media geral = ${aluno.mediaGeral}`);
    });