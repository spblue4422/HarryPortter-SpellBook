import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

const SpellDetail: React.FC = () => {
    const data = useLocation().state.spells;
    const param = useParams();
    const [spell, setSpell] = useState([]);

    const getSpell = () => {
        const spellData = data.filter((data) => data._id === param.id);
        setSpell(spellData);
    };

    useEffect(() => {
        getSpell();
    }, []);

    return (
        <div>
            <h1>SpellDetail</h1>
            {typeof spell === 'undefined' ? (
                ''
            ) : (
                <ul>
                    <li>spell: {spell[0].spell}</li>
                    <li>type: {spell[0].type}</li>
                    <li>effect: {spell[0].effect}</li>
                </ul>
            )}
        </div>
    );
};

export default SpellDetail;
