import React from 'react';
import PageDefault from '../../components/PageDefault';

function PaginaNaoEncontrada() {
    return (
        <PageDefault>
            <div style={{ textAlign: "center", color: '#F2F2F2' }}>
                <h1>PÁGINA NÃO ENCONTRADA!</h1>
                <p>Infelizmente, a página que você está tentando acessar não existe!</p>
            </div>
        </PageDefault>
    );    
}

export default PaginaNaoEncontrada;