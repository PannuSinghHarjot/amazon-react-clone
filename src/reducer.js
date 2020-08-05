
export const initialState = {
    basket: [
        {
        id: "545646",
        title: "Camera Set",
        price: 566.99,
        rating: 4,
        image: "https://cdn.shopify.com/s/files/1/0070/7032/files/DIY_Product_Photography.jpg?v=1527090823&width=1024://www.https://www.google.com/search?q=product+image&safe=strict&sxsrf=ALeKk02ThvVlsuIaIAzB6w3nlGlzOotRRg:1595459444155&tbm=isch&source=iu&ictx=1&fir=nYQFUxHrhA0MMM%252CBfa8p_BERHYMYM%252C_&vet=1&usg=AI4_-kTdBCI1r-RKIMN6pAiOtVFOPDMq1g&sa=X&ved=2ahUKEwja_q_L_eHqAhWTIDQIHaJPCh8Q9QEwAHoECAkQMA#imgrc=nYQFUxHrhA0MMM.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fproduct&psig=AOvVaw3BSu1_am-p-8-scvtIAsq_&ust=1595544941825000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKC-yJ364eoCFQAAAAAdAAAAABAD"
    },

    {
        id: "545446",
        title: "Camera Set",
        price: 566.99,
        rating: 4,
        image: "https://cdn.shopify.com/s/files/1/0070/7032/files/DIY_Product_Photography.jpg?v=1527090823&width=1024://www.https://www.google.com/search?q=product+image&safe=strict&sxsrf=ALeKk02ThvVlsuIaIAzB6w3nlGlzOotRRg:1595459444155&tbm=isch&source=iu&ictx=1&fir=nYQFUxHrhA0MMM%252CBfa8p_BERHYMYM%252C_&vet=1&usg=AI4_-kTdBCI1r-RKIMN6pAiOtVFOPDMq1g&sa=X&ved=2ahUKEwja_q_L_eHqAhWTIDQIHaJPCh8Q9QEwAHoECAkQMA#imgrc=nYQFUxHrhA0MMM.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fproduct&psig=AOvVaw3BSu1_am-p-8-scvtIAsq_&ust=1595544941825000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKC-yJ364eoCFQAAAAAdAAAAABAD"
    },



],
    user: null
}

//hey this is new line 


function reducer(state , action) {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
           return {
            ...state,
            // state.basket.concat(action.item) 
            basket: [...state.basket, action.item]
           }
      
            break; 

        case 'REMOVE_FROM_BASKET':

        let newBasket = [...state.basket];

        let updatebasket = newBasket.filter(el => el.id !== action.id)
            
        return {
            ...state,
            basket: state.basket.filter(el => el.id !== action.id)

            }

            break;
        default:
            return state
    }
}

export default reducer