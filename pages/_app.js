// index.js의 부모인셈, pages 공통된 부분 이곳에 작성
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import Head from 'next/head';

const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charset='utf-8' />
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  )
};

NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
}

export default NodeBird;