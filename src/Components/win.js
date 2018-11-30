import React, {Component} from 'react';

class Win extends Component {

    render() {
        return (

    <div className="clouds">
    <div className="banner-content">
            <h1>Congratulations you won:</h1>
                <h1 className="prizeText">£{this.props.prize}</h1>
                    <div className="banner-btn">
            </div>
        </div>
        <div className="cloud x1"></div>
        <div className="cloud x2"></div>
        <div className="cloud x3"></div>
        <div className="cloud x4"></div>
        <div className="cloud x5"></div>
    </div>

        );
           
    }
}

export default Win;
