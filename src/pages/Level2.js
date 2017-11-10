import React from 'react';

const Level2 = ({match}) => {
    return (
        <div>
            <h2>
                Level2 {match.params.name}
              </h2>
        </div>
    );
};

export default Level2;