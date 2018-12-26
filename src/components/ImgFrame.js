import React, { Component } from 'react';

class ImgFrame extends React.Component {

    constructor(props){
        super(props);
        this.state = {service: 'https://picsum.photos/500/300', number:1};
    }

    changeImage = () => {
        this.setState({number: ++this.state.number});
    }

    render(){
        return (
            <React.Fragment>
                <div id="picsum-container">
                    <img src={this.state.service+"?number="+this.state.number} alt="Image" />
                </div>
                <button onClick={this.changeImage}>Change Image</button>
            </React.Fragment>
        );
    }
}

export default ImgFrame;