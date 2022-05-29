import React, { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';
import toast from 'react-toastify'

interface ShippingProviderProps {
    children: ReactNode;
}

interface ShippingContextData {
    changeShipping: () => void;
    active: boolean;
    setActive: Dispatch<SetStateAction<boolean>>
}


export const ShippingContext = createContext({} as ShippingContextData);


function ShippingProvider({ children }: ShippingProviderProps) {

    const [active, setActive] = useState<boolean>(false)

    function changeShipping(){
        setActive(!active)
    }


    return (
        <ShippingContext.Provider value={{
           changeShipping,
            active,
            setActive
        }}>
            {children}
        </ShippingContext.Provider>
    )

}

function useShipping() {
    return useContext(ShippingContext);
}

export {
    ShippingProvider,
    useShipping,
};
