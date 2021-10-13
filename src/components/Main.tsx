import React, { Link } from 'react';

const Main: React.FC = () => {
    return (
        <div>
            <h1>Main</h1>
            <Link to="/about">About</Link>
            <Link to="/spells">Spells</Link>
        </div>
    );
};

export default Main;
