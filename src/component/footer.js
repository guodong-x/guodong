import React, { Component } from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import "./footer.css"

export default class footer extends Component {
    render() {
        return (
            <div className="footer">
            <NavLink to="/main/home">配送到家</NavLink>
            <NavLink to="/main/classify">分类</NavLink>
            <NavLink to="/main/vip">会员</NavLink>
            <NavLink to="/main/cart">购物车</NavLink>
            <NavLink to="/main/my">我的</NavLink>
                
            </div>
        )
    }
}

// const mapStateToProps=state=>{
//     return{
//         num:state.cart.reduce((total,item)=>{
//             if(item.checked){
//                 total+=item.num
//             }
//             return total;
//         },0)
//     }
// }
// export default connect(mapStateToProps)(footer)
