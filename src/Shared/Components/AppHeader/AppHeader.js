import React from 'react';

import { withRouter } from "react-router-dom";
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import { Col, Row } from 'reactstrap';


class AppHeader extends React.Component {
    state = {
        dropdownUserOpen: false,
        dropdownManageOpen: false,
    }

    goTo = (url = '') => {
        if(window.location.pathname === "/app") {
            url = "app/" + url 
        }

        this.props.history.push(url);
    }

    toggleUser = () => {
        this.setState({
            dropdownUserOpen: !this.state.dropdownUserOpen,
        })
    }

    toggleManage = () => {
        this.setState({
            dropdownManageOpen: !this.state.dropdownManageOpen,
        })
    }

    render() {
        return (
            <Nav pills>
                <Row className="appHeaderContainer w-100" style={{ margin: '0px' }}>
                    <Col xs="2"></Col>
                    <Col xs="8">
                        <Row style={{ margin: '0px' }}>
                            <Dropdown nav isOpen={this.state.dropdownManageOpen} toggle={this.toggleManage}>
                                <DropdownToggle nav caret>Quản lý</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem onClick={()=>this.goTo('exam')}>Kho vật tư</DropdownItem>
                                    <DropdownItem onClick={()=>this.goTo('machine')}>Quản lý máy lâm sàng</DropdownItem>
                                    <DropdownItem onClick={()=>this.goTo('product')}>Quản lý vật tư tiêu hao</DropdownItem>
                                    <DropdownItem onClick={()=>this.goTo('customer')}>Customer</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </Row>
                    </Col>
                    <Col xs="2">
                        <Dropdown nav isOpen={this.state.dropdownUserOpen} toggle={this.toggleUser}>
                            <DropdownToggle nav caret>User Name</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Info</DropdownItem>
                                <DropdownItem>Change Passworld</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Logout</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Col>
                </Row>
            </Nav>
        );
    }
}

export default withRouter(AppHeader);