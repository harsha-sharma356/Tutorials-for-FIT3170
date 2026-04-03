import { useState } from 'react';
function App() {
  const [isPink, setIsPink] = useState(false);


  return (
    <div className={isPink ? "bg-pink" : "bg-blue"}>
      <button onClick={() => setIsPink(!isPink)} className="btn">
        Click Me!
      </button>
    </div>
  );
}
export default App;