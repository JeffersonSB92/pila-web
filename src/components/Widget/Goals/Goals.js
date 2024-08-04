import React from 'react';
import './Goals.css';
import GoalsCard from './Card/GoalsCard';

function Goals() {
    return (

        <div className='card'>
            <h2>Objetivos</h2>
            <GoalsCard title={'Viagem de Férias'} />
        </div>

    )
}

export default Goals;