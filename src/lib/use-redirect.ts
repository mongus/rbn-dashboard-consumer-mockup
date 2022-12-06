import {useCallback, useRef} from "react";
import { useHistory, useLocation } from "react-router-dom";
import useNavigationConfirmation from "./use-navigation-confirmation";

const useRedirect = (navigationWarning?:string, validNavigation?:string|RegExp|(() => boolean)) => {
    const historyRef = useRef<any>(null);
    historyRef.current = useHistory();
    const {pathname:previousPath} = useLocation();

    const cancelNavigationConfirmation = useNavigationConfirmation(navigationWarning, validNavigation);

    return useCallback((path: string, state?: any) => {
        cancelNavigationConfirmation();

        typeof window !== 'undefined' && window.setTimeout(() => historyRef.current.push(path, state), 0);

        return previousPath;
    }, [historyRef, previousPath, cancelNavigationConfirmation]);
};

export default useRedirect;

