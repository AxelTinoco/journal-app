import { AppRouter } from "./routers/AppRouter"
import { AuthRouter } from "./routers/AuthRouter"


export const JournalApp = () => {
    return (
        <div className="">
            <AuthRouter/>
            <AppRouter/>
        </div>
    )
}
