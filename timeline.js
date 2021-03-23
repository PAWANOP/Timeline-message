const timer=()=>{
  "use strict";


  let items = document.querySelectorAll('.timeline li');


    const isElementInViewport=(el)=>{
      let rect = el.getBoundingClientRect();
      return(
        rect.top >=0 &&
        rect.left >=0 &&
        rect.bottom <=(window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=(window.innerWidth || document.documentElement.clientWidth)
      );
    }

      

    const callbackFunc=()=> {
          for (let i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
              items[i].classList.add("in-view");
            }
          }
        }

  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
    }
    

timer();




// const timer=()=>{

//   'use strict';

//   // define variables
//   let items = document.querySelectorAll(".timeline li");

//   // check if an element is in viewport
//   // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
//   const isElementInViewport=(el)=> {
//     let rect = el.getBoundingClientRect();
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
//   }

//   const callbackFunc=()=> {
//     for (let i = 0; i < items.length; i++) {
//       if (isElementInViewport(items[i])) {
//         items[i].classList.add("in-view");
//       }
//     }
//   }

//   // listen for events
//   window.addEventListener("load", callbackFunc);
//   window.addEventListener("resize", callbackFunc);
//   window.addEventListener("scroll", callbackFunc);

// }


// timer();