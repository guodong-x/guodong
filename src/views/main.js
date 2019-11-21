import React, { Component } from 'react'
import RouterVier from '../router/routerView'
import Footer from '../component/footer'

export default class main extends Component {
    render() {
        return (
            <div>
                <RouterVier routes={this.props.routes}></RouterVier>
                
                <Footer/>
            </div>
        )
    }
}
