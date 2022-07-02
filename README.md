# difference class-func (using hooks)

Simple rules needed to understand the difference in the use of state in different components

### `state` 

   if you want to write all states into one variable \
   but now it will be necessary to access the object \ 
   \
   const [state , setState] = useState({count , done}) \

   ChangeState = ()=>{ \
      setState((state)=>({ \
         ...state , done: !state.done \
      })) .\
   }


