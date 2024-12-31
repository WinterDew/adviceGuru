import React, { useEffect } from 'react';
import CardWithButton from './components/Card';
import {useState} from 'react';
import fetchDataFromAPI from './services/adviceAPI';

const App = () => {

  const [adviceNumber, setAdviceNumber] = useState(0);
  const [advice, setAdvice] = useState("Loading...");


  async function handleButton(){
    console.log("Called!");
    setAdvice("Loading...");
    setAdviceNumber(0);
    const data = await fetchDataFromAPI();
    if(data == -1) {
      setAdvice("Oops, an error occurred, please try again.");
      setAdviceNumber(999);
    } else {

      setAdvice(data.slip.advice);
      setAdviceNumber(data.slip.id);
    }
  }

  useEffect(() => {
    handleButton();
  },[]);

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-neutral-darkBlue">
      <div className='absolute bottom-5 right-0 text-primary-lightCyan bg-neutral-darkGB p-5 rounded-l-full shadow-lg'>
        By <a className="text-primary-neonGreen" href="https://winterdew.github.io">Winterdew Studio</a>
      </div>
      <CardWithButton className="w-[80%] lg:max-w-[60%] min-h-20 bg-neutral-darkGB" 
                      buttonCallback={handleButton}>
        <h2 className="tracking-[0.5em] text-xs font-bold text-center text-primary-neonGreen font-primary">
          ADVICE #{adviceNumber}
        </h2>
        <p className='text-primary-lightCyan md:text-4xl mt-10 mb-8 text-center break-before-auto sm:text-xl'>
          "{advice}"
        </p>

        <hr className="my-6 border-t-2 border-primary-neonGreen relative text-center align-middle" />
      </CardWithButton>
    </div>
  );
};

export default App;
