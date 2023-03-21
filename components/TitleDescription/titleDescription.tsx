import React from 'react';
import './titleDescription.css';

  /**
   * Adding a doc description in the typescript file
   */
export class TitleDescription extends React.Component<{
    title: string,
    description: string,
    titleColor: string
}> {
    render () {
        return(
            <div className="container">
                <h1 className="title" style={{color: this.props.titleColor}}>{this.props.title}</h1>
                <h3 className="description">{this.props.description}</h3>
            </div>
        )
    
    }
}

export default TitleDescription