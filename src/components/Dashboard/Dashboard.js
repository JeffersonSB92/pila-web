import React from 'react';
import './Dashboard.css';
import Balance from '../Widget/Balance/Balance';
import Goals from '../Widget/Goals/Goals';

function Dashboard() {
  return (
    <div className='dashboard'>
      <div className='row-1'>

        <div className='column-left'>
          <div className='saldo'>
            <h2>Saldo</h2>
          </div>
          <Balance />
          <Goals />
          {/* <div className='card'>
            <h2>Objetivos</h2>
          </div> */}
        </div>

        <div className='column-right'>

          <div className='row-into-column-right'>

            <div className='column-right-into-1'>
              <h2>Últimas Transações</h2>
            </div>

            <div className='column-right-into-2'>
              <div className='card'>
                <h2>Gastos por categoria</h2>
              </div>
              <div className='card'>
                <h2>Média de gastos por mês</h2>
              </div>
            </div>

          </div>

        </div>


      </div>
    </div>
  );
}

export default Dashboard;
