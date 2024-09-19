import { useState } from "react";

const person = {
  name: 'Grow up game',
  theme: {
    backgroundColor: 'Blue',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100vw',  
    height: '100vh'  
  }
};

export default function TodoList() {
  const [level, setLevel] = useState(0);
  const [size, setSize] = useState(100); 
  const [image, setImage] = useState("data:image/jpeg;base64,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"); 

  const feed = (foodLevel) => {
    const newLevel = level + foodLevel;

    if (newLevel > 100) {
      setImage("Sittinon.jpg"); 
    }

    setLevel(newLevel);
    setSize(100 + newLevel); 
  };

  return (
    <div style={person.theme}>
      <h1>{person.name}</h1>
      <img
        className="avatar"
        src={image}
        alt="Sittinon.jpg"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          maxWidth: '90vw',  
          maxHeight: '90vh', 
          objectFit: 'cover', 
        }}
      />

      <h2>Feed the Pig</h2>
      {/* Container for horizontal buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button 
          onClick={() => feed(5)}
          style={{ backgroundColor: 'red', color: 'black' }}
        >
          อาหารอ่อน (+5)
        </button>
        <button 
          onClick={() => feed(10)}
          style={{ backgroundColor: 'yellow', color: 'black' }}
        >
          นมผง (+10)
        </button>
        <button 
          onClick={() => feed(20)}
          style={{ backgroundColor: 'lightgreen', color: 'black' }}
        >
          กระเพราหมูกรอบ (+20)
        </button>
      </div>

      <p>Current Level: {level}</p>
    </div>
  );
}















