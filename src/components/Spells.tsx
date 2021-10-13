import React, { Link, useState, useEffect } from 'react';

const API_KEY = '';
const URL = `https://www.potterapi.com/v1/spells?key=${API_KEY}`;

const Spells: React.FC = () => {
    const [spells, setSpells] = useState([]); //빈 array를 spells에 할당

    const getSpells = async () => {
        try {
            const data = await fetch(URL);
            const json = await data.json();
            setSpells(json);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getSpells();
    }, []);

    return (
        <div>
            <h1>Spells</h1>
            {spells.length === 0 ? (
                ''
            ) : (
                <ul>
                    {spells.map((spell, _id) => {
                        return (
                            <li key={_id}>
                                <Link to={{ pathname: `/spell/${_id}`, state: { spells } }}>
                                    {spell}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default Spells;
