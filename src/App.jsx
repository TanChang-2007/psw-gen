import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import Slider from 'rc-slider';
import copy from 'copy-to-clipboard';

function Checkbox({
  value,
  setValue
}) {
  return <div>
    <label class="relative flex justify-between items-center overflow-hidden">
    <input type="checkbox" class="sr-only peer" onClick={() => setValue(!value)} checked/>
       <span class="w-10 h-6 flex items-center flex-shrink-0 p-0.5 border-2 border-white"/>
    </label>
  </div>
}

function App() {
  const [PasswordLength, setPasswordLength] = useState(16);
  const [password, setPassword] = useState("");

  const [containUppercase, setContainUppercase] = useState(true);
  const [containLowercase, setContainLowercase] = useState(true);
  const [containNumber, setContainNumber] = useState(true);
  const [containSymbol, setContainSymbol] = useState(true);

  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    const lowerCaseCharacthers = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseCharacthers = lowerCaseCharacthers.toUpperCase();
    const numberCharacthers = "1234567890";
    const symbolCharacthers = "`~!@#$%^&*()_+{}:<>/?,|'';[]-="

    let newPassword = "";

    for (let i = 0; i < PasswordLength; i++) {
      const characthersCandidates = lowerCaseCharacthers + upperCaseCharacthers + numberCharacthers + symbolCharacthers
      const char = characthersCandidates.charAt(Math.floor(Math.random() * characthersCandidates.length));
      newPassword += char;
    }

    setPassword(newPassword);
  }

  useEffect(() => {
    generatePassword()
  }, [PasswordLength, containUppercase, containLowercase, containNumber, containSymbol]);

  return (
    <body className='w-full h-screen font flex flex-col items-center justify-center'>
      <h1 className='text-4xl font-bold'>Password Generator</h1>
      <p>Generate Password That Hard To Guess</p>
      <div className=' text-xl flex justify-between border-2 min-w-[50%] max-w-[90%] m-1 p-1 rounded-lg '>
        <div className="overflow-x-auto overflow-y-hidden whitespace-nowrap">{password}</div>
        <button className=' flex m-1 gap-2 justify-end items-end'>
          <Icon icon="clarity:copy-line" width="25" height="25"/>
          <Icon icon="pepicons:reload" width="25" height="25" onClick={generatePassword} />
        </button>
      </div>
      <div className='flex justify-start items-start'>Password Length</div>
      <div class="slidecontainer" className='flex justify-center items-center w-1/2 m-2'>
        <div className='gap-3'>8</div>
        <input type="range" min="8" max="256" class="slider w-full" onChange={e => setPasswordLength(e.target.value)} />
        <div>256</div>
      </div>

      <div className="flex">
        <div className='flex flex-row mt-6 justify-between' />
        <div className='flex items-center p-2 pl-3'>Uppercase</div>
        <Checkbox value={containUppercase} setValue={containUppercase}/>
        <label class="relative flex justify-between items-center group  text-xl ">
          <input type="checkbox" class="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md" />
          <span class="w-14 h-19 flex items-center flex-shrink-0 ml-2 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-green-400 after:w-5 after:h-5 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6 group-hover:after:translate-x-1"></span>
        </label>
        <div className='flex items-center p-2 pl-3'>Lowercase</div>
        <Checkbox value={containLowercase} setValue={containLowercase}/>
        <label class="relative flex justify-between items-center group  text-xl ">
          <input type="checkbox" class="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md" />
          <span class="w-14 h-19 flex items-center flex-shrink-0 ml-2 p-1 mr-1  bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-green-400 after:w-5 after:h-5 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6 group-hover:after:translate-x-1"></span>
        </label>
      </div>
      <div className="flex">
        <div className='flex flex-row items-center p-2 pl-3'>Number</div>
        <Checkbox value={containNumber} setValue={containNumber}/>
        <label class="relative flex justify-between items-center group  text-xl ">
          <input type="checkbox" class="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md" />
          <span class="w-14 h-19 flex items-center flex-shrink-0 ml-2 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-green-400 after:w-5 after:h-5 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6 group-hover:after:translate-x-1"></span>
        </label>
        <div className='flex flex-col items-center p-1 pl-3 '>Symbol</div>
        <Checkbox value={containSymbol} setValue={containSymbol}/>
        <label class="relative flex justify-between items-center group  text-xl ">
          <input type="checkbox" class="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md" />
          <span class="w-14 h-19 flex items-center flex-shrink-0 ml-2 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-green-400 after:w-5 after:h-5 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6 group-hover:after:translate-x-1"></span>
        </label>
      </div>
    </body>
  )
}

export default App
