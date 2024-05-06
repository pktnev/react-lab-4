import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Error from "./pages/Error.tsx";
import {signal} from "@preact/signals-react";
import {AppDefault} from "./models/AppDefault.ts";
import RegFirstStage from "./pages/SignUp/FirstStage/RegFirstStage.tsx";
import RegSecondStage from "./pages/SignUp/SecondStage/RegSecondStage.tsx";
import RegThirdStage from "./pages/SignUp/ThirdStage/RegThirdStage.tsx";
import ProfileFirstStage from "./pages/ProfileInfo/FirstStage/ProfileFirstStage.tsx";
import ProfileSecondStage from "./pages/ProfileInfo/SecondStage/ProfileSecondStage.tsx";
import ProfileThirdStage from "./pages/ProfileInfo/ThirdStage/ProfileThirdStage.tsx";
import Home from "./pages/Home/Home.tsx";
import {initialAppValues} from "./utils/initial-app-values.ts";
import RegistrationModal
    from "./common-components/RegistrationModal/RegistrationModal.tsx";

export const appDataSignal = signal<AppDefault>(initialAppValues);

function App() {
    return (
        <div className="w-full min-h-screen bg-item select-none">
            <RegistrationModal/>
            <Router>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/registration/number_input'} element={<RegFirstStage/>}/>
                    <Route path={'/registration/number_validation'} element={<RegSecondStage/>}/>
                    <Route path={'/registration/create_account'} element={<RegThirdStage/>}/>
                    <Route path={'/profile-info/personal_data'} element={<ProfileFirstStage/>}/>
                    <Route path={'/profile-info/contacts_data'} element={<ProfileSecondStage/>}/>
                    <Route path={'/profile-info/delivery_data'} element={<ProfileThirdStage/>}/>
                    <Route path={'*'} element={<Error/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App
