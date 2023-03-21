import React from 'react';
import './Hero.css';
import { HeroProps } from '../../models/HeroModel';
import { Button } from '../Button/Button';

/**
 * Primary UI Hero component
 */
export class Hero extends React.Component<HeroProps> {
    render() {
        const backgroundColor = this.props.primaryBackgroundColor ? 'hero--primary' : 'hero--secondary';
        return (
            <div
                className={this.props.textPosition ? 'hero hero-text-right' : 'hero hero-text-left'}
            >
                <div 
                style={{backgroundColor: this.props.backgroundColor}}
                className={['hero-section', 'hero-section-color', backgroundColor].join(' ')}
                >
                    <h1 className="hero-title" style={{ color: this.props.titleTextColor }}>
                        {this.props.title}
                    </h1>
                </div>
                <div className="hero-section hero-section-text">
                    <p className="hero-description" style={{ color: this.props.descriptionTextColor }}>
                        {this.props.description}
                    </p>
                    <Button label="Get a Quote" onClickMethod={() => {}} primary />
                </div>
            </div>
        )
    }

};

export default Hero
