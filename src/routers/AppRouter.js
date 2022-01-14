import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route} from "react-router-dom";
import { login } from "../actions/auth";
import { JournalScreen } from "../components/journal/JournalScreen";
import { LoadingScreen } from "../components/Loading/LoadingScreen";
import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {

    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    
    useEffect(() => {

        const auth = getAuth();
        onAuthStateChanged(auth, user => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
                setChecking(false);
        });

    }, [dispatch,setIsLoggedIn,setChecking])

    if (checking) {
        return (
            <LoadingScreen />
        )
    }

    return (
        <div>
            <Routes>
                
               


                <Route path="auth/*" element={
                    <PublicRoute isAuthenticated={isLoggedIn}>
                        <AuthRouter />
                    </PublicRoute>
                }/>
              

              <Route path="/*" exact element={
                    <PrivateRoute isAuthenticated={isLoggedIn}>
                        <JournalScreen />
                    </PrivateRoute>
                }/>
               
         

                

            </Routes>
        </div>
    )
}
