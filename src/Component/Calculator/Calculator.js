import React,{Component} from 'react';
import Keypad from './Keypad';
import Result from './Result';
class Calculator extends Component{
    constructor(){
        super();
    this.state ={
        result:""
    }
}
    onClick= event =>{
        if(event==='clear'){
                this.clear()
        }
        else if(event==='=')
       this.equal()
        else{
            this.setState({result:this.state.result+event})
        }
    };
     clear=()=> {
         console.log(this.state.result)
        this.setState({result:this.state.result.slice(0,-1)})
    };
    equal=()=>{
        this.setState({
             result:eval(this.state.result)+""
        })
    }
    render(){
        return(
            <div>
            <Result result={this.state.result}></Result>
            <Keypad onClick={this.onClick}></Keypad>
            </div>
        );
    }
}
export default Calculator;