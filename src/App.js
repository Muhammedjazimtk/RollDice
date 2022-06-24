import { useState} from 'react'


function App() {



  const [name,setName] = useState('Click the  Button to roll the Dice🎲!!')
  // useEffect(()=>{

  // },[])

  var r1 = Math.floor(Math.random()*6)
  var r2 = Math.floor(Math.random()*6)

  // console.log(r1,r2);

  return (
    <div className='flex  flex-col justify-center bg-[#2D4263] min-h-screen w-full'>
      <div className='flex flex-col items-center poppins space-y-5 '>
        <h1 className='text-[#C84B31] text-5xl font-[200] py-10'>{name} </h1>
        <div className='flex flex-col justify-center bg-[#ECDBBA] w-[130px] h-[40px] rounded-md' onClick={()=>{
          setName(()=>{
            return 'Clicked'
          })
          }}>
         <p className='flex flex-col items-center font-[600]'>Roll</p>
        </div>

        <div className='flex justify-between p-10 space-x-3'>
        <img src='images/dice6.png' className='px-4' alt='dice img'/>        
        <img src='images/dice6.png' className='px-4' alt='dice img'/>        
        
        </div>
      
      </div>
    </div>
  );
}

export default App;
