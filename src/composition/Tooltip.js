import React from 'react';
import './Tooltip.css';

function Tooltip(props) {
    return (
        <span className='Tooltip'>
            <span className='Tooltip-content'
            style={{ color: props.color }}>
                {props.children}
            </span>
            <span className='Tooltip-message'>
                {props.children}
            </span>
        </span>
    )
}

class TooltipClass extends React.Component {
    static defaultProps = {
        color: '#01A800', //green
    }
    render() {
        console.log('using a class component!')
        console.log(this.props)
        return (
            <span className='Tooltip'>
                <span className='Tooltip-content'
                style={{ color: this.props.color }}>
                    {this.props.children}
                </span>
                <span className='Tooltip-message'>
                    {this.props.children}
                </span>
            </span>
        )
    }
}

export default TooltipClass;