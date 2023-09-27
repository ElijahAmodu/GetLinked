import ToolBar from '../../component/ToolBar'
// import Footer from 'components/footer'
import { Outlet, ScrollRestoration } from 'react-router-dom'



const LandingLayout = () => {
    return (
        <div>
            <ToolBar />
            <Outlet />
            {/* <Footer /> */}
            <ScrollRestoration />
        </div>
    )
}

export default LandingLayout