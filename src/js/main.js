
if( document.documentElement.clientWidth >= 1200 ){
new Skroll()
    
    .add(".product-right__img",{
        delay:50,
        duration:800,
        animation:{
            start:function(e){
                e.style["transform"] = "translateY(50%)";
                e.style["opacity"] = 0;
            },
            end:function(e){
                e.style["transform"] = "translateY(0%)";
                e.style["opacity"] = 1;
            }
        },
    })
    
    .add(".product",{
        delay:50,
        duration:500,
        animation:{
            start:function(e){
                e.style["background-size"] = "150%";
                e.style["opacity"] = 0;
            },
            end:function(e){
                e.style["background-size"] = "103%";
                e.style["opacity"] = 1;
            }
        },
    })
    .add(".product-bg--oatbased",{
        delay:50,
        duration:500,
        animation:{
            start:function(e){
                e.style["background-size"] = "150%";
                e.style["opacity"] = 0;
            },
            end:function(e){
                e.style["background-size"] = "124%";
                e.style["opacity"] = 1;
            }
        },
    })
    .add(".product-bg--greek",{
        delay:50,
        duration:500,
        animation:{
            start:function(e){
                e.style["background-size"] = "150%";
                e.style["opacity"] = 0;
            },
            end:function(e){
                e.style["background-size"] = "115%";
                e.style["opacity"] = 1;
            }
        },
    })
    .add(".product-bg--less",{
        delay:50,
        duration:500,
        animation:{
            start:function(e){
                e.style["background-size"] = "150%";
                e.style["opacity"] = 0;
            },
            end:function(e){
                e.style["background-size"] = "118%";
                e.style["opacity"] = 1;
            }
        }, 
    })
    .add(".product-bg--rich",{
        delay:50,
        duration:500,
        animation:{
            start:function(e){
                e.style["background-size"] = "150%";
                e.style["opacity"] = 0;
            },
            end:function(e){
                e.style["background-size"] = "126%";
                e.style["opacity"] = 1;
            }
        },
    })
    .add(".product-wrap-inner",{
        delay:50,
        duration:1000,
        animation:{
            start:function(e){
                e.style["background-size"] = "150%";
                e.style["opacity"] = 0;
            },
            end:function(e){
                e.style["background-size"] = "100%";
                e.style["opacity"] = 1;
            }
        },
    })
    .add(".product-wrap-block__img",{
        delay:50,
        duration:1200,
        animation:{ 
            start:function(e){
                e.style["transform"] = "translateY(50%)";
                e.style["opacity"] = 0;
            },
            end:function(e){
                e.style["transform"] = "translateY(0%)";
                e.style["opacity"] = 1;
            } 
        },
    })
    .init();
}

// if( document.documentElement.clientWidth >= 1200 ){
//     new Skroll()
//         .add(".product",{
//             delay:50,
//             duration:500,
//             animation:{
//                 start:function(e){
//                     e.style["background-size"] = "180%";
//                     e.style["opacity"] = 0;
//                 },
//                 end:function(e){
//                     e.style["background-size"] = "150%";
//                     e.style["opacity"] = 1;
//                 }
//             },
//         })
//         .add(".product-bg--oatbased",{
//             delay:50,
//             duration:500,
//             animation:{
//                 start:function(e){
//                     e.style["background-size"] = "180%";
//                     e.style["opacity"] = 0;
//                 },
//                 end:function(e){
//                     e.style["background-size"] = "150%";
//                     e.style["opacity"] = 1;
//                 }
//             },
//         })
//         .add(".product-bg--greek",{
//             delay:50,
//             duration:500,
//             animation:{
//                 start:function(e){
//                     e.style["background-size"] = "180%";
//                     e.style["opacity"] = 0;
//                 },
//                 end:function(e){
//                     e.style["background-size"] = "150%";
//                     e.style["opacity"] = 1;
//                 }
//             },
//         })
//         .add(".product-bg--less",{
//             delay:50,
//             duration:500,
//             animation:{
//                 start:function(e){
//                     e.style["background-size"] = "180%";
//                     e.style["opacity"] = 0;
//                 },
//                 end:function(e){
//                     e.style["background-size"] = "150%";
//                     e.style["opacity"] = 1;
//                 }
//             }, 
//         })
//         .add(".product-bg--rich",{
//             delay:50,
//             duration:500,
//             animation:{
//                 start:function(e){
//                     e.style["background-size"] = "180%";
//                     e.style["opacity"] = 0;
//                 },
//                 end:function(e){
//                     e.style["background-size"] = "150%";
//                     e.style["opacity"] = 1;
//                 }
//             },
//         })

//     .init();
// };