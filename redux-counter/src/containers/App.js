import React,{Component} from 'react';
import Counter from '../components/counter';

class App extends Component {
    render(){
        return(
            <div>
                {/* 받는 파라미터 {number, color, onIncreament, onDecreament, onSetColor} */}
                <Counter />
            </div>
        )
    }
}

export default App;
