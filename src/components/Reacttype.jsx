// src/components/TypedText.tsx

import React from 'react';
import Typed from 'react-typed';

const Reacttype= () => {
  return (
    <div style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center', marginTop: '50px' }}>
      <Typed
        strings={['Hello, World!', 'Welcome to React!', 'Typing with style...']}
        typeSpeed={50}
        backSpeed={30}
        loop
      />
    </div>
  );
};

export default Reacttype;
