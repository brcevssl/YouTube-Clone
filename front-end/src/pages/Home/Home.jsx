import PropTypes from 'prop-types';
import './Home.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Feed from '../../Components/Feed/Feed';

const Home = ({ sidebar }) => {
  return (
    <>
        <Sidebar sidebar = {sidebar} />
        <div className={ `container ${sidebar?"":"large-container"}` }>
            <Feed />
        </div>
    </>
  )
};

Home.propTypes = {
  sidebar: PropTypes.bool,
  setSidebar: PropTypes.func.isRequired
};

export default Home;

