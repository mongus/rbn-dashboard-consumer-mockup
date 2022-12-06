import {useHistory} from 'react-router-dom';
import {useCallback, useEffect, useRef} from "react";

function useNavigationConfirmation(warning:string|undefined, validNavigation?:undefined|string|RegExp|((path:string) => boolean)):(() => void) {
    const history = useHistory();
    const unblock = useRef<void|(()=>void)|undefined>(undefined);

    useEffect(() => {
        if (warning) {
            unblock.current = history.block((location:any) => {
                if (!unblock.current)
                    return;

                if (validNavigation) {
                    const path = location.pathname;
                    if (validNavigation === path ||
                        (typeof validNavigation === 'function' && validNavigation(path)) ||
                        (validNavigation instanceof RegExp && validNavigation.test(path))
                    ) {
                        // ok to navigate away without confirmation
                        return;
                    }
                }

                return warning;
            });

            return unblock.current;
        }
    }, [warning, validNavigation, history]);

    return useCallback(() => {
        if (typeof unblock.current === 'function') {
            unblock.current();
            unblock.current = undefined;
        }
    }, []);
}

export default useNavigationConfirmation;