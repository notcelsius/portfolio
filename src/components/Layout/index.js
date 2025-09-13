import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar'
import './index.scss';

const Layout = () => {
    return (
    <div className="App">
        <Sidebar /> {/* renders the sidebar */}
        <div className='page'>
            <span className='tags top-tags'>&lt;body&gt;</span>

            <Outlet />  {/* placeholder for where the current route's content gets inserted */}

            <span className='tags bottom-tags'>
                &lt;/body&gt;
                <br />
                <span className='bottom-tag-html'>&lt;/html&gt;</span>

            </span>
        </div>
    </div>
    )
}

export default Layout;