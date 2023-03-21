import React from 'react';
import styled from 'styled-components';
//import './titleDescription.scss';

export const Title = styled.h1`
    color: #000;
    font-family: helvetica, sans;
    font-size: 3rem;
`
export const Description = styled.p`
    font-size: 1.5rem;
    color: #777;
`

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
                <Title className="title" style={{color: this.props.titleColor}}>{this.props.title}</Title>
                <Description className="description">{this.props.description}</Description>
            </div>
        )
    
    }
}

export default TitleDescription