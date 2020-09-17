import React,{Component} from 'react';
import Keypad from './Keypad';
import Result from './Result';
class Calculator extends Component{
    state ={
        result:''
    }
    onClick=(event)=>{
        if(event==='clear'){
                this.clear();
        }
        else if(event==='=')
       this.equal();
        else{
            this.setState({result:this.state.result+event})
        }
    }
     clear=()=>{
        this.setState({
        result:this.state.result.slice(0,-1)});
    }
    equal=()=>{
        let r=toString(eval(this.state.result));
        this.setState({
            result:r
        })
    }
    render(){
        return(
            <div>
            <Result result={this.state.result}></Result>
            <Keypad onClick={(event)=>this.onClick(event)}></Keypad>
            </div>
        );
    }
}
export default Calculator;