import { Routes, Route } from "react-router-dom";
import { JournalScreen } from "../components/journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="auth" element={<AuthRouter />} />
                <Route path="/" exact element={<JournalScreen />} />
            </Routes>
        </>
    )
}
