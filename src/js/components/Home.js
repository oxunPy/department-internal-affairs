// import { useNavigate, Link } from "react-router-dom";
// import { useContext } from "react";
// import AuthContext from "../context/AuthProvider";

// const Home = () => {
//     const { setAuth } = useContext(AuthContext);
//     const navigate = useNavigate();

//     const logout = async () => {
//         // if used in more components, this should be in context 
//         // axios to /logout endpoint 
//         setAuth({});
//         navigate('/linkpage');
//     }

//     return (
//         <section>
//             <h1>Home</h1>
//             <br />
//             <p>You are logged in!</p>
//             <br />
//             <Link to="/editor">Go to the Editor page</Link>
//             <br />
//             <Link to="/iiocitizen">Go to the iiocitizen</Link>
//             <br />
//             <Link to="/admin">Go to the Admin page</Link>
//             <br />
//             <Link to="/lounge">Go to the Lounge</Link>
//             <br />
//             <Link to="/linkpage">Go to the link page</Link>
//             <div className="flexGrow">
//                 <button onClick={logout}>Sign Out</button>
//             </div>
//         </section>
//     )
// }

// export default Home;

import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
const { Header, Sider, Content } = Layout;

const Home = () => {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const logout = async () => {
    setAuth({});
    navigate('/linkpage');
  }

  return (
    
    <Layout style={{ width: "90%" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              label:
                <Menu.Item key="1">
                  <Link to="/user">User</Link>
                </Menu.Item>
            },

            {
              key: '2',
              label:
                <Menu.Item key="2">
                  <Link to="/iiocitezen">IIO larga olib kelingan fuqarolar</Link>
                </Menu.Item>
            },
            {
              key: '3',
              label:
                <Menu.Item key="3">
                  <Link to="/statement">Tuzilgan bayonnomalar</Link>
                </Menu.Item>
            },
            {
              key: '4',
              label:
                <Menu.Item key="4">
                  <Link to="/PROF-Citizen">Tekshirilgan PROF hisobda turuvchi shaxslar</Link>
                </Menu.Item>
            },
            {
              key: '5',
              label:
                <Menu.Item key="5">
                  <Link to="/caught-wanted">Ushlangan qidiruvdagilar</Link>
                </Menu.Item>
            },
            {
              key: '6',
              label:
                <Menu.Item key="6">
                  <Link to="/caught-lost">Aniqlangan bedaraklar</Link>
                </Menu.Item>
            },
            {
              key: '7',
              label:
                <Menu.Item key="7">
                  <Link to="/checked-objects">Tekshirilgan obyektlar qorovullari</Link>
                </Menu.Item> 
            },
            {
              key: '8',
              label:
                <Menu.Item key="8">
                  <Link to="/checked-weapons">Tekshirilgan ov qurollari</Link>
                </Menu.Item>
            }
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '0',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
     // <section>
    //     <h1>Home</h1>
    //     <br />
    //     <p>You are logged in!</p>
    //     <br />
    //     <Link to="/editor">Go to the Editor page</Link>
    //     <br />
    //     <Link to="/iiocitizen">Go to the iiocitizen</Link>
    //     <br />
    //     <Link to="/admin">Go to the Admin page</Link>
    //     <br />
    //     <Link to="/lounge">Go to the Lounge</Link>
    //     <br />
    //     <Link to="/linkpage">Go to the link page</Link>
    //     <div className="flexGrow">
    //         <button onClick={logout}>Sign Out</button>
    //     </div>
    // </section> 

  )
}

export default Home;

