import { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    increment = () => {
        this.setState((prevValue) => ({
            count: prevValue.count + 1,
        }));
    };
    decrement = () => {
        if (this.state.count === 0) {
            this.setState(() => ({
                count: 0,
            }));
        } else {
            this.setState((prevValue) => ({
                count: prevValue.count - 1,
            }));
        }
    };

    render() {
        const { count } = this.state;

        return (

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '300%',
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: '-15%',
            }}>
                Counter App
                <div style={{
                    fontSize: '120%',
                    position: 'relative',
                    top: '10vh',
                }}>
                    {count}
                </div>
                <div className="buttons">
                    <button style={{
                        fontSize: '60%',
                        position: 'relative',
                        top: '20vh',
                        marginRight: '5px',
                        backgroundColor: 'green',
                        borderRadius: '8%',
                        color: 'white',
                    }}
                        onClick={this.increment}>Increment</button>
                    <button style={{
                        fontSize: '60%',
                        position: 'relative',
                        top: '20vh',
                        marginLeft: '5px',
                        backgroundColor: 'red',
                        borderRadius: '8%',
                        color: 'white',
                    }}
                        onClick={this.decrement}>Decrement</button>
                </div>
            </div>
        );
    }
}
export default Counter;