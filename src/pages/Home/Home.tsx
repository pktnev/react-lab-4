import HomeTitle from "./HomeTitle.tsx";
import Button from "../../common-components/Button.tsx";
import {useNavigate} from "react-router-dom";
import {LayoutProps} from "../../models/LayoutProps.ts";

const HomeLayout = ({children} : LayoutProps) => {
    return (
        <div className="w-full gap-8 flex-col h-svh flex items-center justify-center">
            {children}
        </div>
    )
}

const Home = () => {
    const navigate = useNavigate();

    return (
        <HomeLayout>
            <HomeTitle/>
            <Button
                px={'px-8'}
                py={'py-8'}
                fontSize={'text-3xl'}
                action={() => navigate('/registration/number_input') }
                primary={true}>
                <span>Registration</span>
            </Button>
        </HomeLayout>
    )
}

export default Home;