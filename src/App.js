import { useState } from 'react'
import { FaStar } from "react-icons/fa";
import './App.css';


function App() {
  const [rating, setRating] = useState(null);
  const [hover,  setHover] = useState(null);
  return (
  

    <form>
    <div >
      <div className='container'>
      <h1>WEBSITE REVIEW</h1>
      </div>
      <div className='web'>
        <input type='text' placeholder='Enter website URL' required />
      </div>
      <div>
        <textarea name='message' placeholder='Your message' className='message' required></textarea>
      </div>
      <div className='App'>
        {[...Array(5)].map((star, index) => {
          const currentRating = index + 1;
          return (
          <label>
            <input type='radio' name='rating' value={currentRating} onClick={() => setRating(currentRating)}/>
            <FaStar className='star' size={50} color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
            onMouseEnter={() => setHover(currentRating)}
            onMouseLeave={() => setHover(null)}
            
            />
          </label>
          );

        })}

      </div>
      <button className='btn'>Submit</button>
      
    </div>
    </form>
    
   
  );
  
}

  
    


export default App;
