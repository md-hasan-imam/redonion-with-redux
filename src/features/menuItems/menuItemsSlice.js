import breakfastImg1 from '../../assets/images/breakfast/breakfast1.png';
import breakfastImg2 from '../../assets/images/breakfast/breakfast2.png';
import breakfastImg3 from '../../assets/images/breakfast/breakfast3.png';
import breakfastImg4 from '../../assets/images/breakfast/breakfast4.png';
import breakfastImg5 from '../../assets/images/breakfast/breakfast5.png';
import breakfastImg6 from '../../assets/images/breakfast/breakfast6.png';
import lunchimg1 from '../../assets/images/lunch/lunch1.png';
import lunchimg2 from '../../assets/images/lunch/lunch2.png';
import lunchimg3 from '../../assets/images/lunch/lunch3.png';
import lunchimg4 from '../../assets/images/lunch/lunch4.png';
import lunchimg5 from '../../assets/images/lunch/lunch5.png';
import lunchimg6 from '../../assets/images/lunch/lunch6.png';
import dinnerimg1 from '../../assets/images/dinner/dinner1.png';
import dinnerimg2 from '../../assets/images/dinner/dinner2.png';
import dinnerimg3 from '../../assets/images/dinner/dinner3.png';
import dinnerimg4 from '../../assets/images/dinner/dinner4.png';
import dinnerimg5 from '../../assets/images/dinner/dinner5.png';
import dinnerimg6 from '../../assets/images/dinner/dinner6.png';
import { createSlice } from '@reduxjs/toolkit';


// isLoading: false,
// error:null,

const initialMenuItems = {
    menuItems:[
    { id:1,name:"Bagel and cream cheese",description:'will add next time' , notes:"How we dream about our future", price:'9.99',amount:1, image:breakfastImg1,category:'breakfast'},
    { id:2,name:"Bagel and cream cheese",description:'will add next time' , notes:"How we dream about our future", price:'7.99',amount:1, image:breakfastImg2,category:'breakfast'},
    { id:3,name:"Bagel and cream cheese",description:'will add next time' , notes:"How we dream about our future", price:'12.99',amount:1, image:breakfastImg3,category:'breakfast'},
    { id:4,name:"Bagel and cream cheese",description:'will add next time' , notes:"How we dream about our future", price:'6.99',amount:1, image:breakfastImg4,category:'breakfast'},
    { id:5,name:"Bagel and cream cheese",description:'will add next time' , notes:"How we dream about our future", price:'8.99',amount:1, image:breakfastImg5,category:'breakfast'},
    { id:6,name:"Bagel and cream cheese",description:'will add next time' , notes:"How we dream about our future", price:'6.99',amount:1, image:breakfastImg6,category:'breakfast'},
    { id:7,name:"Bagel and cream cheese",description:'will add next time' , notes:"How we dream about our future", price:'9.99',amount:1, image:lunchimg1,category:'lunch'},
    { id:8,name:"Bagel and cream cheese",description:'will add next time' , notes:"How we dream about our future", price:'6.99',amount:1, image:lunchimg2,category:'lunch'},
    { id:9,name:"Bagel and cream cheese",description:'will add next time' , notes:"How we dream about our future", price:'7.99',amount:1, image:lunchimg3,category:'lunch'},
    { id:10,name:"Bagel and cream cheese",description:'will add next time' , notes:"How we dream about our future", price:'6.99',amount:1, image:lunchimg4,category:'lunch'},
    { id:11,name:"Bagel and cream cheese",description:'will add next time' , notes:"How we dream about our future", price:'12.99',amount:1, image:lunchimg5,category:'lunch'},
    { id:12,name:"Bagel and cream cheese",description:'will add next time' , notes:"How we dream about our future", price:'7.99',amount:1, image:lunchimg6,category:'lunch'},
    { id:13,name:"Bagel and cream cheese",description:'will add next time' , notes:"How we dream about our future", price:'9.99',amount:1, image:dinnerimg1,category:'dinner'},
    { id:14,name:"Bagel and cream cheese",description:'will add next time' , notes:"How we dream about our future", price:'6.99',amount:1, image:dinnerimg2,category:'dinner'},
    { id:15,name:"Bagel and cream cheese",description:'will add next time' , notes:"How we dream about our future", price:'8.99',amount:1, image:dinnerimg3,category:'dinner'},
    { id:16,name:"Bagel and cream cheese",description:'will add next time' , notes:"How we dream about our future", price:'6.99',amount:1, image:dinnerimg4,category:'dinner'},
    { id:17,name:"Bagel and cream cheese",description:'will add next time' , notes:"How we dream about our future", price:'10.99',amount:1, image:dinnerimg5,category:'dinner'},
    { id:18,name:"Bagel and cream cheese",description:'will add next time' , notes:"How we dream about our future", price:'6.99',amount:1, image:dinnerimg6,category:'dinner'}
    ]
}

const menuSlice = createSlice({
    name:'menuItems',
    initialState:initialMenuItems,
    reducers:{
        showAllFoods:(state)=>state,
        showBreakfastFoods:(state)=>{
            state.menuItems = state.menuItems.filter((menu) => menu.category === 'breakfast');
        },
        showLunchFoods:(state)=>{
            state.menuItems = state.menuItems.filter((menu) => menu.category === 'lunch');
        },
        showDinnerFoods:(state)=>{
            state.menuItems = state.menuItems.filter((menu) => menu.category === 'dinner');
        },
    }
})

export const {showAllFoods, showBreakfastFoods,showLunchFoods,showDinnerFoods } = menuSlice.actions;
export default menuSlice.reducer;
