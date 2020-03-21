import React from 'react';

class Button extends React.Component{
    /**Recibe datos string entero o booleanos */
    state = {
        count:0,
    }

    handlerClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){ 
        const {count} = this.state;
        return(
            <div>
                <h1>Fresas : {count} </h1>
                <button type="button" onClick={this.handlerClick}>Contar</button>
            </div>
        )
    }
}

export default Button;