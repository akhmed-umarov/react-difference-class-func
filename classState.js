class exampleClass extends Component { 
   constructor(props){ 
      super(props); 
      this.state = {
         property: `value`
      }
   }

   this.setState({
      // will change only those values that are passed
      newState: `newValue`
   })
      // this is asynchronous method 
      //if you need to track that the method is executed in turn
   this.setState(({oldState})=>({
      newState: oldState + 1
   }))
}


class exampleClass extends Component { 
   state = {
       property: `value`
   }
}
