import { useState} from 'react'


function App() {



  const [name,setName] = useState('Click the  Button to roll the Dice🎲!!')
  const [img1 , setImg1] = useState('images/dice6.png')
  const [img2 , setImg2] = useState('images/dice6.png')



  

  const handleClick = ()=>{
    var r1 = Math.floor(Math.random()*6 + 1)
    var r2 = Math.floor(Math.random()*6 + 1)
    
    setImg1('images/dice'+r1+'.png')
    setImg2('images/dice'+r2+'.png')

    console.log(img1 , img2);

    if(r1>r2){
      setName('Player 1 wins 🥇')
    }else if(r1<r2){

      setName('Player 2 wins 🥇')
    }else{
      setName('Draw !!')
    }
  }

  

  // console.log(r1,r2);

  return (
    <div className='flex  flex-col justify-center bg-[#2D4263] min-h-screen w-full'>
      <div className='flex flex-col items-center poppins space-y-5 '>
        <h1 className='text-[#C84B31] text-5xl font-[200] py-10'>{name} </h1>
        <div className='flex flex-col justify-center bg-[#ECDBBA] w-[130px] h-[40px] rounded-md' onClick={handleClick}>
         <p className='flex flex-col items-center font-[600]'>Roll</p>
        </div>

        <div className='flex justify-between p-10 space-x-3'>
        <div className='flex flex-col items-center'>
        <img src={img1} className='px-4' alt='dice img'/>
        <p className='text-[#ECDBBA] text-3xl p-7'>Player 1</p>
        </div> 
        <div className='flex flex-col items-center'>
        <img src={img2} className='px-4' alt='dice img'/>
        <p className='text-[#ECDBBA] text-3xl p-7'>Player 2</p> 
        </div>       
               
        
        </div>
      
      </div>
    </div>
  );
}

export default App;
