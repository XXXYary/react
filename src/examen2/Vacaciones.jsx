import React ,{Component} from 'react';

class Vacaciones extends Component{
    constructor(props){
        super(props);
        this.state={
            hello:'De vacacionefghjkls'
        }

    }

    render(){
        return(
        <h1>{this.state.hello}</h1>
        )
    }
};

export default Vacaciones;