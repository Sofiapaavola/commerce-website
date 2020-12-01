import { ADD_TO_CART} from '../components/actions/action-types/cart-actions';


const initState = {
    items: [
        {id:1,title:'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:110,img:"https://static-reg.lximg.com/images/product_images/closeup_26157_Fenty_MatchStixTrioMedium200_WEB_00a4b263c590037454ae54a7b8efba4e2c45b363_1523778031.png"},
        {id:2,title:'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,img: "https://static-reg.lximg.com/images/product_images/closeup_26157_Fenty_MatchStixTrioMedium200_WEB_00a4b263c590037454ae54a7b8efba4e2c45b363_1523778031.png"},
        {id:3,title:'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120,img: "https://static-reg.lximg.com/images/product_images/closeup_26157_Fenty_MatchStixTrioMedium200_WEB_00a4b263c590037454ae54a7b8efba4e2c45b363_1523778031.png"},
        {id:4,title:'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260,img:"https://static-reg.lximg.com/images/product_images/closeup_26157_Fenty_MatchStixTrioMedium200_WEB_00a4b263c590037454ae54a7b8efba4e2c45b363_1523778031.png"},
        {id:5,title:'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160,img: "https://static-reg.lximg.com/images/product_images/closeup_26157_Fenty_MatchStixTrioMedium200_WEB_00a4b263c590037454ae54a7b8efba4e2c45b363_1523778031.png"},
        {id:6,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: "https://static-reg.lximg.com/images/product_images/closeup_26157_Fenty_MatchStixTrioMedium200_WEB_00a4b263c590037454ae54a7b8efba4e2c45b363_1523778031.png"}
    ],
    addedItems:[],
    total: 0

}

const CartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    else{
        return state
    }
  }
  

  export default CartReducer;
