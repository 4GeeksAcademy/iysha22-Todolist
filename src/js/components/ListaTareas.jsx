import React, { useState } from 'react';

const ListaTareas = () => {
    const [tareas, setTareas] = useState([]);
    const [nuevaTarea, setNuevaTarea] = useState('');

    const agregarTarea = (e) => {
        if (e.key === 'Enter' && nuevaTarea.trim() !== '') {
            setTareas([...tareas, nuevaTarea]);
            setNuevaTarea('');
        }
    };

    const eliminarTarea = (index) => {
        const nuevasTareas = tareas.filter((_, i) => i !== index);
        setTareas(nuevasTareas);
    };

    return (
        <div>
            <h1>todos</h1>
            <input
                type="text"
                placeholder="What needs to be done?"
                value={nuevaTarea}
                onChange={(e) => setNuevaTarea(e.target.value)}
                onKeyDown={agregarTarea}
            />
            <ul>
                {tareas.length === 0 ? (
                    <li>No hay tareas, añadir tareas</li>
                ) : (
                    tareas.map((tarea, index) => (
                        <li key={index}>
                            {tarea}
                            <span 
                                onMouseOver={(e) => e.currentTarget.style.display='inline'}
                                onMouseOut={(e) => e.currentTarget.style.display='none'}
                                style={{ display: 'none', marginLeft: '10px', cursor: 'pointer' }}
                                onClick={() => eliminarTarea(index)}
                            >
                                🗑️
                            </span>
                        </li>
                    ))
                )}
            </ul>
            <footer>{tareas.length} item{tareas.length !== 1 && 's'} left</footer>
        </div>
    );
};

export default ListaTareas;