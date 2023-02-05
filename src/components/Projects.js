import React, { useState, useEffect } from 'react';

const API_URL = 'https://api.github.com/users/Amine32/repos';

export default function Projects() {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => setRepos(data));
    }, []);

    return (
        <section className="p-5">
            <h2 className="font-weight-bold">Projects</h2>
            <ul className="list-unstyled">
                {repos.map(repo => (
                    <li key={repo.id} className="mb-5">
                        <h3 className="font-weight-bold">{repo.name}</h3>
                        <p>{repo.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}