import React, { useState } from 'react';

function Counter(){
  const Counter = () => {
    const [value, setValue] = useState(0);

    return (
      <div>
        <h1>Hello World</h1>
        <p>
          현재 카운터 값은 <b>{value}</b> 입니다.
        </p>
        <button onClick={() => setValue(value + 1)}>+1</button>
        <button onClick={() => setValue(value - 1)}>-1</button>
      </div>
    );
  }
}

export default Counter;