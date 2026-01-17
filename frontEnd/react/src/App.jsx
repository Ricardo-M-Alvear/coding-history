import React, { useState } from 'react';

function App() {
    const employees = [
        { id: 1, name: "Sam", role: "Frontend", seed: "Sam" },
        { id: 2, name: "Alex", role: "Design", seed: "Alex" },
        { id: 3, name: "Charlie", role: "Frontend", seed: "Charlie" },
        { id: 4, name: "Jordan", role: "Backend", seed: "Jordan" }
    ];
    const [showOnlySpecialists, setShowOnlySpecialists] = useState(false);
    function toggleSpecialists() {
        setShowOnlySpecialists(!showOnlySpecialists);
    }
    const filteredEmployees = showOnlySpecialists
        ? employees.filter(emp => emp.role === "Frontend")
        : employees;
    return (
        <ul>
            {filteredEmployees.map((em) => (
                <BioCard key={em.id} name={em.name} role={em.role} seed={em.seed}/>
                ))}
            <button onClick={() => toggleSpecialists()}>{showOnlySpecialists ? "Show All" : "Show Only Specialists"}</button>
        </ul>
    )
}

function BioCard ({ name, role }) {

    return (
        <div style={{border: role === 'Frontend' ? '1px solid gold' : '1px solid black'}}>
            <h1>{name}</h1>
            <p>{role}</p>
        </div>
    )
}

export default App;