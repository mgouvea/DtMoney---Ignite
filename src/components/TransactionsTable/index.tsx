import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './style';

export function TransactionTable() {
  useEffect(()=>{
    api.get('transactions').then(response => console.log(response.data))
  },[])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$ 3.000</td>
            <td>Dev</td>
            <td>20/01/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw"> - R$ 1.500</td>
            <td>Casa</td>
            <td>10/01/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
