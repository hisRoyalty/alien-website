import React from 'react'
import { useState } from 'react';
import Header from './Header'
import data from '../data/Dialogs.json'
import Footer from './Footer';



function Decrypt() {
    const [decryptedData, setDecryptedData] = useState('');
    const [message, setMessage] = useState('');

    


    const handleInputChange = (e) => {
        setMessage(e.currentTarget.value)
    }
 
    const handleSubmitButton = (event) => {
        event.preventDefault()
        if (message.trim().length !== 0) {
            setDecryptedData(data[Math.floor(Math.random() * (29 - 1) + 1)])
          } else {
            alert('Please provide a value.')
          }
        
    }






    return (
        <div className='bg-slate-400'>
          <Header/>
          <h3 className='font-bold text-center text-5xl mt-2'>Decryption Tool</h3>
          <h3 className='font-bold text-center text-3xl mt-2 font-serif'>Decrypt Alien code into English.</h3>
          <h3 className='font-bold text-center text-xl mt-2'>Note: The code's value changes every second due to the Aliens' high-end engineering.</h3>
          <div className='min-h-screen flex items-center justify-center bg-slate-400 h-60'>
            
            <input
              className="border rounded w-50 py-2 px-3 text-gray-700 leading-tight"
              type="number"
              placeholder="Enter integers to decrypt"
              onChange={handleInputChange}
            />
            <button onClick={handleSubmitButton} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Decrypt
            </button>
            <div>
            <div className='m-8'>{decryptedData}</div>
            </div>
          </div>
          <Footer></Footer>
    
          
        </div>
      );
}

export default Decrypt