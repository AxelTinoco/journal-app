import { AppRouter } from "./routers/AppRouter"
import { AuthRouter } from "./routers/AuthRouter"


export const JournalApp = () => {
    return (
        <>
            <AuthRouter/>
            <AppRouter/>
        </>
    )
}
