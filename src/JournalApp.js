import { AppRouter } from "./routers/AppRouter"
import { Provider } from "react-redux"
import { store } from "./store/store"
import { AuthRouter } from "./routers/AuthRouter"
export const JournalApp = () => {
    return (
        <Provider store={ store }>
            <AppRouter/>
            <AuthRouter/>
        </Provider>
    )
}
