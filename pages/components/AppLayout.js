import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import 'antd/dist/antd.css';

const AppLayout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item><Link href="/"><a>노드버드</a></Link></Menu.Item>
        <Menu.Item><Link href="/profile"><a>프로필</a></Link></Menu.Item>
        <Menu.Item>
          <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
        </Menu.Item>
        <Menu.Item><Link href="/signup"><a>회원가입</a></Link></Menu.Item>
      </Menu>

      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="https://ant.design/components/grid/" target="_blank" rel="noreferror noopenerr">앤트디</a>
        </Col>
      </Row>
    </div>
  )
};



AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AppLayout;