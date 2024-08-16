function revealTospan(){
    document.querySelectorAll(".reveal")
       .forEach(function(elem){
          let Parent = document.createElement("span");
          let Child = document.createElement("span");


          Parent.classList.add("parent");
          Child.classList.add("child");

          Child.innerHTML  = elem.innerHTML;
          Parent.appendChild(Child);

          elem.innerHTML = "";
          elem.appendChild(Parent);
   })
}


function valuesetters() {
    gsap.set("#nav  a" , {y: "-100%" , opacity:0});
    gsap.set("#home span .child", {y:"100%"})
    gsap.set("#home .row img", {opacity:0 })

    document.querySelectorAll("#Visual>g").forEach(function (e) {
        let character = e.children[0].children[0]; // Access the first <g> and its first child
        let length = character.getTotalLength();
        character.style.strokeDasharray = length + 'px';
        character.style.strokeDashoffset = length + 'px';
    });
}



function loaderAnimation(){
    let t1 = gsap.timeline();

t1
.from("#loader .child span",{
    x:100,
    stagger: .2,
    duration:1.4,
    ease:Power3.easeInOut

})
.to("#loader .parent .child",{
    y:"-100%",
    duration:1,
    ease:Circ.easeInOut

})
.to("#loader",{
    height:0,
    duration:1,
    ease:Circ.easeInOut

})
.to("#green",{
    height:"100%",
    top:0,
    duration:1,
    delay:-.8,
    ease:Circ.easeInOut

})
.to("#green",{
    height:"0%",
    duration:1,
    delay:-.5,
    ease:Circ.easeInOut,
    onComplete: function(){
        animateHomepage();
    }

})
}

function animateHomepage(){
   

    let t1 = gsap.timeline();

    t1
    .to("#nav a",{
        y:0,
        opacity:1,
        stagger: .05,
        ease:Expo.easeInOut,

    })

    .to("#home .parent .child",{
        y:0,
        stagger:.1,
       duration:1.5,
        ease:Expo.easeInOut,

    })

    .to("#home .row img",{
        opacity:1,
        ease:Expo.easeInOut,
        onComplete:function(){
            animateSvg();
            
        }

    })



}

function animateSvg(){
   
    
    gsap.to("#Visual>g>g>path, #Visual>g>g>polyline", {
        strokeDashoffset: 0,
        duration: 2,
        ease: "expo.inOut", // Correct GSAP syntax
      
    });
}

function locoInitialize() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });

}


revealTospan();
valuesetters();
 loaderAnimation();
locoInitialize();