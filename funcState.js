exampleFun = () =>{ 

   const [count , setCount] = useState(0);
   const [done , setDone] = useState(false);

   ChangeCount = ()=>{ 
      // this will not work properly since the function is asynchronous
      setCount(count + 1);
      setCount(count + 1);
      ///this is right
      //if you need to track that the method is executed in turn
      setCount(count=>(count + 1))
      setCount(count=>(count + 1))
   }

   

   
   //if you want to write all states into one variable
   //but now it will be necessary to access the object
   const [state , setState] = useState({count , done});

   ChangeState = ()=>{ 
      setState((state)=>({
         ...state , done: !state.done
      }))
   }


   ///if I want to write to the state a function that returns something, then I need to pass it in this form

   const Randomizer = ()=>(
      Math.floor(Math.random() * 50)
   )

   const [number , setNumber ] = useState(Randomizer) || useState(()=>{Randomizer()});

   //if written like this, it will call the function every time

   const [numbers , setNumbers ] = useState(Randomizer())

}