import './App.css'
import Titulo from './Titulo/titulo'
import Mensagem from './Mensagem/mensagem';
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [loading, setLoading] = React.useState(true);
  const [mensagens, setMensagens] = React.useState([]);
  const [erro, setErro] = React.useState(false);

  async function requisao() {


    try {
      const resultado = await axios.get('http://localhost:8080/');
      setMensagens(resultado.data);
      setLoading(false);
      setErro(false);

    } catch {
      setErro(true);
      setLoading(false);
    }
  }
  useEffect(() => {
    requisao();
  }, []);

  if (erro) {
    return (
      <div>Deu erro!</div>
    )
  }
  return (
    <>
      <body>
        <div class="chat">
          <Titulo />
          <div class="content">
            {
              loading === false && (
                <ul>
                  {
                    mensagens.map(mensagem => (
                      <Message
                        mensagem={mensagem.mensagem}
                        visualizado={mensagem.visualizado}
                        remetente={mensagem.remetente} />
                    ))
                  }

                </ul>
              )
            }
            {
              loading === true && (
                <div>
                  <div className='skeleton-loader' />
                  <div className='skeleton-loader' />
                  <div className='skeleton-loader' />
                </div>
              )

            }
          </div>
        </div>
      </body>
    </>
  )
}

export default App;