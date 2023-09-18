(this["webpackJsonpe-commerce-shopping-cart"]=this["webpackJsonpe-commerce-shopping-cart"]||[]).push([[0],{1554:function(e,t,s){},1558:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s.n(a),i=s(17),r=s.n(i),n=(s(54),s(6)),l=s(15),o=(s(55),s(16)),j=s(1560),h=s(1561),d=s(1562),p=s(45),b=s(1565),O=s(1566),x=s(19),m=s(13),g=s.n(m),u=s(7),y=function(e,t){switch(t.type){case"ADD_TO_CART":return Object(u.a)(Object(u.a)({},e),{},{cart:[].concat(Object(x.a)(e.cart),[Object(u.a)(Object(u.a)({},t.payload),{},{qty:1})])});case"REMOVE_FROM_CART":return Object(u.a)(Object(u.a)({},e),{},{cart:e.cart.filter((function(e){return e.id!==t.payload.id}))});case"CHANGE_CART_QTY":return Object(u.a)(Object(u.a)({},e),{},{cart:e.cart.filter((function(e){return e.id===t.payload.id?e.qty=t.payload.qty:e.qty}))});default:return e}},f=function(e,t){switch(t.type){case"SORT_BY_PRICE":return Object(u.a)(Object(u.a)({},e),{},{sort:t.payload});case"FILTER_BY_STOCK":return Object(u.a)(Object(u.a)({},e),{},{byStock:!e.byStock});case"FILTER_BY_DELIVERY":return Object(u.a)(Object(u.a)({},e),{},{byFastDelivery:!e.byFastDelivery});case"FILTER_BY_RATING":return Object(u.a)(Object(u.a)({},e),{},{byRating:t.payload});case"FILTER_BY_SEARCH":return Object(u.a)(Object(u.a)({},e),{},{searchQuery:t.payload});case"CLEAR_FILTERS":return{byStock:!1,byFastDelivery:!1,byRating:0,searchQuery:""};default:return e}},C=s(1),v=Object(a.createContext)();g.a.seed(99);var N=function(e){var t=e.children,s=Object(x.a)(Array(20)).map((function(){return{id:g.a.datatype.uuid(),name:g.a.commerce.productName(),price:g.a.commerce.price(),image:g.a.random.image(),inStock:g.a.random.arrayElement([0,3,5,6,7]),fastDelivery:g.a.datatype.boolean(),ratings:g.a.random.arrayElement([1,2,3,4,5])}})),c=Object(a.useReducer)(y,{products:s,cart:[]}),i=Object(o.a)(c,2),r=i[0],n=i[1],l=Object(a.useReducer)(f,{byStock:!1,byFastDelivery:!1,byRating:0,searchQuery:""}),j=Object(o.a)(l,2),h=j[0],d=j[1];return Object(C.jsx)(v.Provider,{value:{state:r,dispatch:n,productState:h,productDispatch:d},children:t})},S=function(){return Object(a.useContext)(v)},w=s(18),F=function(e){var t=e.rating,s=e.onClick,a=e.style;return Object(C.jsx)(C.Fragment,{children:Object(x.a)(Array(5)).map((function(e,c){return Object(C.jsx)("span",{onClick:function(){return s(c)},style:a,children:t>c?Object(C.jsx)(w.a,{fontSize:"15px"}):Object(C.jsx)(w.b,{fontSize:"15px"})},c)}))})},R=function(){var e=S(),t=e.state.cart,s=(e.dispatch,Object(a.useState)()),c=Object(o.a)(s,2),i=(c[0],c[1]);Object(a.useEffect)((function(){i(t.reduce((function(e,t){return e+Number(t.price)*t.qty}),0))}),[t]);return Object(C.jsxs)("div",{children:[Object(C.jsx)("h1",{className:"main-title",children:"Wait ! Your Order In Progress."}),Object(C.jsx)("br",{}),Object(C.jsx)("p",{className:"sub-title",children:"Lorem ipsum dolor sit amet, consectetur adipiscing "}),Object(C.jsx)(j.a,{className:"mt-35",children:[{url:"Group 1484578147.png",name:"Step 1 : Cart Review"},{url:"Group 1484578147.png",name:"Step 2 : Checkout"},{url:"Group 1484578146.png",name:"Step 3 : Special Offer"},{url:"Group 1484578146 (1).png",name:"Step 4 : Confirmation"}].map((function(e,t){return Object(C.jsxs)("div",{style:{display:"flex",margin:"auto"},children:[Object(C.jsx)(h.a,{src:"./assets/images/"+e.url,width:40,height:40}),Object(C.jsx)("p",{className:"step-font",children:e.name})]})}))}),Object(C.jsx)(d.a,{children:Object(C.jsxs)(j.a,{className:"mt-35",children:[Object(C.jsxs)(p.a,{sm:6,xs:12,xl:6,children:[Object(C.jsx)(h.a,{src:"./assets/images/image 4.png",width:"100%",height:"auto"}),Object(C.jsxs)("div",{className:"mt-35",children:[Object(C.jsxs)("div",{className:"comment-header",children:[Object(C.jsx)(h.a,{src:"./assets/images/Rectangle 1127.png",width:48,height:48}),Object(C.jsxs)("div",{style:{paddingLeft:"10px"},children:[Object(C.jsx)(F,{rating:5,style:{color:"#FFC000"}}),Object(C.jsxs)("div",{style:{display:"flex",marginTop:"7px"},children:[Object(C.jsx)("h6",{style:{fontFamily:"Manrope",fontWeight:700,fontSize:"14px",lineHeight:"14px",color:"#333333"},children:"Ken T."}),Object(C.jsx)(h.a,{src:"./assets/images/verify 1.png",width:16,height:16}),Object(C.jsx)("p",{style:{fontFamily:"Manrope",fontWeight:400,fontSize:"12px",lineHeight:"12px",color:"#5BB59A",marginTop:"2px"},children:"\xa0Verified Customer"})]})]})]}),Object(C.jsx)("h6",{style:{fontFamily:"Manrope",fontWeight:400,fontSize:"16px",lineHeight:"24px"},children:"\u201cAs soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.\u201d"})]})]}),Object(C.jsxs)(p.a,{sm:6,xs:12,xl:6,children:[Object(C.jsxs)("h3",{className:"content-body-title",children:[Object(C.jsx)("span",{className:"span-letter",children:"ONE TIME ONLY"}),"\xa0\xa0special price for 6 extra Clarifion for only",Object(C.jsx)("span",{className:"span-letter",children:"$14 each"})," ($84.00 total!)"]}),Object(C.jsxs)(j.a,{className:"mt-10",children:[Object(C.jsx)(p.a,{sm:4,children:Object(C.jsx)(h.a,{src:"./assets/images/Group 1484578135.png",width:"100%",height:"auto"})}),Object(C.jsxs)(p.a,{sm:8,children:[Object(C.jsxs)("div",{className:"des-title",children:[Object(C.jsx)("h6",{className:"clarifion",children:"Clarifion Air Ionizer"}),Object(C.jsxs)("h6",{className:"clarifion-right",children:[Object(C.jsx)("span",{className:"line-through",children:"$180"}),Object(C.jsx)("span",{className:"fixed-cost",children:"\xa0$85"})]})]}),Object(C.jsx)("div",{className:"des-star",children:Object(C.jsx)(F,{rating:5,style:{color:"#FFC000"}})}),Object(C.jsxs)("div",{className:"clarifion des-star mt-10",style:{display:"flex"},children:[Object(C.jsx)(h.a,{src:"./assets/images/Ellipse 95.png",width:8.53,height:8.53,style:{padding:"7px 7px"}}),Object(C.jsx)("h6",{children:"12 left in Stock"})]}),Object(C.jsx)("h6",{className:"clarifion des-star mt-10",children:Object(C.jsx)("h6",{children:"Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple."})})]})]}),Object(C.jsxs)(b.a,{children:[Object(C.jsxs)(b.a.Item,{className:"list-item",children:[Object(C.jsx)(h.a,{src:"./assets/images/tick-circle (1).png",width:22,height:22}),"\xa0Negative Ion Technology may",Object(C.jsx)("span",{className:"list-item-emphasiz",children:"help with allergens"})]}),Object(C.jsxs)(b.a.Item,{className:"list-item",children:[Object(C.jsx)(h.a,{src:"./assets/images/tick-circle (1).png",width:22,height:22}),"\xa0Designed for ",Object(C.jsx)("span",{className:"list-item-emphasiz",children:"air rejuvenation"})]}),Object(C.jsxs)(b.a.Item,{className:"list-item",children:[Object(C.jsx)(h.a,{src:"./assets/images/tick-circle (1).png",width:22,height:22}),"\xa0",Object(C.jsx)("span",{className:"list-item-emphasiz",children:"Perfect for every room"}),"in all types of places."]})]}),Object(C.jsxs)("h6",{className:"percent-letter",children:[Object(C.jsx)(h.a,{src:"./assets/images/Group 1000004656.png",width:32,height:32}),"\xa0\xa0Save",Object(C.jsx)("span",{style:{color:"#2C7EF8"},children:"53%"}),"and get",Object(C.jsx)("span",{style:{color:"#2C7EF8"},children:"64 extra Clarifision"}),"for only",Object(C.jsx)("span",{style:{color:"#2C7EF8"},children:"$14 Each"}),"."]}),Object(C.jsx)(O.a,{className:"mt-30",variant:"primary",size:"lg",style:{backgroundColor:"#59AE43",borderRadius:"50px",borderStyle:"none",padding:"16px, 64px, 16px, 64px",width:"100%",height:"59px",fontFamily:"Manrope",fontWeight:"700",fontSize:"20px"},children:"YES\xa0-\xa0CLAIM MY DISACCOUNT"}),Object(C.jsxs)(b.a,{className:"shipping mt-30",horizontal:!0,children:[Object(C.jsx)(b.a.Item,{className:"shipping-letter",children:"Free shipping"}),Object(C.jsxs)(b.a.Item,{className:"shipping-letter",children:[Object(C.jsx)(h.a,{src:"./assets/images/lock (7) 1.png",width:12,height:12}),"\xa0Secure 256-bit SSL encryption."]}),Object(C.jsxs)(b.a.Item,{className:"shipping-letter",children:[Object(C.jsx)(h.a,{src:"./assets/images/visa.png",width:24,height:12}),Object(C.jsx)(h.a,{src:"./assets/images/shop pay.png",width:24,height:12}),Object(C.jsx)(h.a,{src:"./assets/images/paypal.png",width:24,height:12}),Object(C.jsx)(h.a,{src:"./assets/images/Group 6.png",width:24,height:12}),Object(C.jsx)(h.a,{src:"./assets/images/gpay.png",width:24,height:12}),Object(C.jsx)(h.a,{src:"./assets/images/apple pay.png",width:24,height:12}),Object(C.jsx)(h.a,{src:"./assets/images/amex.png",width:24,height:12})]})]}),Object(C.jsx)("h4",{className:"warning-letter",children:"no thanks, i don't know want this."}),Object(C.jsxs)(j.a,{style:{marginBottom:"100px"},children:[Object(C.jsx)(p.a,{sm:3,children:Object(C.jsx)(h.a,{className:"mt-30",src:"./assets/images/image 6.png",width:88,height:88})}),Object(C.jsx)(p.a,{sm:9,children:Object(C.jsxs)("h6",{className:"certification-letter mt-30",children:["If you are not completely thrilled with your Clarifion - We have a",Object(C.jsx)("span",{style:{fontWeight:"700"},children:"30 day satisfaction guarantee"}),". Please refer to our return policy at the bottom of the page for more details. Happy Shopping!"]})})]})]})]})})]})},k=s(1563),I=function(){var e=S();e.state.cart,e.dispatch,e.productDispatch;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(k.a,{style:{height:50,backgroundColor:"#252F3D"}}),Object(C.jsx)(k.a,{style:{height:96,backgroundColor:"#FFFFFF"},children:Object(C.jsxs)(d.a,{children:[Object(C.jsx)(k.a.Brand,{children:Object(C.jsx)(h.a,{src:"./assets/images/logo.png",width:192,height:36})}),Object(C.jsxs)(k.a.Brand,{children:[Object(C.jsx)(h.a,{src:"./assets/images/Frame 1484578055.png",width:88,height:32}),Object(C.jsx)(h.a,{src:"./assets/images/norton-antivirus-logo 1.png",width:82,height:32,style:{marginLeft:"10px"}})]})]})})]})},E=function(){var e=S();e.state.cart,e.dispatch,e.productDispatch;return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(k.a,{style:{height:88,backgroundColor:"#252F3D"},children:Object(C.jsxs)(d.a,{children:[Object(C.jsx)(k.a.Brand,{children:Object(C.jsx)(l.b,{to:"/",style:{fontSize:"12px",fontFamily:"Manrope",fontWeight:"500",lineHeight:"12px",color:"white"},children:"Copyright (c) 2023 | Clarifionsupport@clarifion.com"})}),Object(C.jsx)(k.a.Brand,{children:Object(C.jsx)(l.b,{to:"/",style:{fontSize:"12px",fontFamily:"Manrope",fontWeight:"500",lineHeight:"12px",color:"white"},children:"Secure 256-bit SSL encryption."})})]})})})},T=s(1564),_=function(){var e=S(),t=e.productState,s=t.byStock,a=t.byFastDelivery,c=t.sort,i=t.byRating,r=e.productDispatch;return console.log(s,a,c,i),Object(C.jsxs)("div",{className:"filters",children:[Object(C.jsx)("span",{className:"title",children:"Filter Products"}),Object(C.jsx)("span",{children:Object(C.jsx)(T.a.Check,{inline:!0,label:"Ascending",name:"group1",type:"radio",id:"inline-1",onChange:function(){return r({type:"SORT_BY_PRICE",payload:"lowToHigh"})},checked:"lowToHigh"===c})}),Object(C.jsx)("span",{children:Object(C.jsx)(T.a.Check,{inline:!0,label:"Descending",name:"group1",type:"radio",id:"inline-2",onChange:function(){return r({type:"SORT_BY_PRICE",payload:"highToLow"})},checked:"highToLow"===c})}),Object(C.jsx)("span",{children:Object(C.jsx)(T.a.Check,{inline:!0,label:"Include Out of Stock",name:"group1",type:"checkbox",id:"inline-3",onChange:function(){return r({type:"FILTER_BY_STOCK"})},checked:s})}),Object(C.jsx)("span",{children:Object(C.jsx)(T.a.Check,{inline:!0,label:"Fast Delivery Only",name:"group1",type:"checkbox",id:"inline-4",onChange:function(){return r({type:"FILTER_BY_DELIVERY"})},checked:a})}),Object(C.jsxs)("span",{children:[Object(C.jsx)("label",{style:{paddingRight:10},children:"Rating: "}),Object(C.jsx)(F,{rating:i,onClick:function(e){return r({type:"FILTER_BY_RATING",payload:e+1})},style:{cursor:"pointer"}})]}),Object(C.jsx)(O.a,{variant:"light",onClick:function(){return r({type:"CLEAR_FILTERS"})},children:"Clear Filters"}),Object(C.jsx)("span",{className:"createdBy",children:"Created by Javier Gongora \xa92022"})]})},L=function(e){e.prod;var t=S();t.state.cart,t.dispatch;return Object(C.jsx)("div",{className:"products",children:Object(C.jsx)("h1",{children:"Wait ! your order in progress."})})},D=(s(1554),function(){var e=S(),t=e.state.products,s=e.productState,a=s.sort,c=s.byStock,i=s.byFastDelivery,r=s.byRating,n=s.searchQuery;return Object(C.jsxs)("div",{className:"home",children:[Object(C.jsx)(_,{}),Object(C.jsx)("div",{className:"productContainer",children:function(){var e=t;return a&&(e=e.sort((function(e,t){return"lowToHigh"===a?e.price-t.price:t.price-e.price}))),c||(e=e.filter((function(e){return e.inStock}))),i&&(e=e.filter((function(e){return e.fastDelivery}))),r&&(e=e.filter((function(e){return e.ratings>=r}))),n&&(e=e.filter((function(e){return e.name.toLowerCase().includes(n)}))),e}().map((function(e){return Object(C.jsx)(L,{prod:e},e.id)}))})]})});s(1555),s(1556);var A=function(){return Object(C.jsxs)(l.a,{children:[Object(C.jsx)(I,{}),Object(C.jsxs)("div",{children:[Object(C.jsx)(n.a,{path:"/",exact:!0,children:Object(C.jsx)(D,{})}),Object(C.jsx)(n.a,{path:"/cart",exact:!0,children:Object(C.jsx)(R,{})})]}),Object(C.jsx)(E,{})]})};s(1557);r.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(N,{children:Object(C.jsx)(A,{})})}),document.getElementById("root"))},54:function(e,t,s){},55:function(e,t,s){}},[[1558,1,2]]]);
//# sourceMappingURL=main.61e3e318.chunk.js.map