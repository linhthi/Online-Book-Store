import { useContext, useEffect , useState} from "react";

import { AppContext } from "./context";


const useAppContext = () => {
    const [state, dispatch] = useContext(AppContext);


    function updateBook(book) {
        dispatch((draft) => {
            draft.book = book;
        })
    }

    // Add book to the cart
    function updateCart(cart) {
        dispatch((draft) => {
            draft.cart = cart;
        })
    }



    return {
        ...state,
        updateBook,
        updateCart
    };
};

export { useAppContext };