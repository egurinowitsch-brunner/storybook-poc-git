import React from 'react';
import './Button.css';
import { ButtonProps } from '../../models/ButtonModel'

/**
 * Primary UI button component
 */
export class Button extends React.Component<ButtonProps> {
    render() {
        const mode = this.props.primary ? 'button--primary' : 'button--secondary';
        return (
            <button
            type="button"
            style={{backgroundColor: this.props.backgroundColor, color: this.props.textColor}}
            className={['button', `button--${this.props.size ? this.props.size : 'medium'}`, mode].join(' ')}
            onClick={this.props.onClickMethod}
          >
            {this.props.label}
          </button>
        )
    }

};

export default Button
