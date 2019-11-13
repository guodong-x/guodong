import React, { Component } from 'react'
import { connect } from "dva";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import styles from "./indexPage.scss"
import MyMenu from "../components/mymenu";
import RouteView from "../routes/RouterView"

const {Header,Content,Sider} = Layout

export default class indexPage extends Component {
    render() {
        return (
            <Layout className={styles.wrap}>
                <Header className="header">
                    头部
        </Header>
                <Layout className={styles.container}>
                    <Sider width={200} className={styles.sider}>
                        <MyMenu />
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content className={styles.content}
                            style={{
                                background: '#fff',
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            <p className='sider content'>Content</p>

                            <RouterView routes={this.props.routes} />
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}
