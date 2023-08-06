function loco(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

loco();

function rectangle(){
  document.querySelector("#part1-part1").addEventListener("mouseenter",function(){
    document.querySelector("#recangle").style.scale = 1.5
    document.querySelector("#recangle").style.fill= `white`
    document.querySelector("#circle").style.scale = .5
    document.querySelector("#triangle").style.scale = 0.5
    document.querySelector("#div1 .h1-tag").style.opacity = 0
  })
  document.querySelector("#part1-part1").addEventListener("mouseleave",function(){
    document.querySelector("#recangle").style.scale = 1
    document.querySelector("#recangle").style.fill= `#A5A1FF`
    document.querySelector("#circle").style.scale = 1
    document.querySelector("#triangle").style.scale = 1
    document.querySelector("#div1 .h1-tag").style.opacity = 1
  })
}
rectangle();
function circle(){
  document.querySelector("#part1-part2").addEventListener("mouseenter",function(){
    document.querySelector("#recangle").style.scale = 0.5
    document.querySelector("#circle").style.fill= `#FFAEDC`
    document.querySelector("#circle").style.scale = 1.5
    document.querySelector("#triangle").style.scale = 0.5
    document.querySelector("#div1 .h1-tag").style.opacity = 0
  })
  document.querySelector("#part1-part2").addEventListener("mouseleave",function(){
    document.querySelector("#recangle").style.scale = 1
    document.querySelector("#circle").style.fill= `#A5A1FF`
    document.querySelector("#circle").style.scale = 1
    document.querySelector("#triangle").style.scale = 1
    document.querySelector("#div1 .h1-tag").style.opacity = 1
  })
}
circle();
function triangle(){
  document.querySelector("#div2-part2").addEventListener("mouseenter",function(){
    document.querySelector("#recangle").style.scale = 0.5
    document.querySelector("#triangle svg path").style.fill= `#FFF480`
    document.querySelector("#circle").style.scale = 0.5
    document.querySelector("#triangle").style.scale = 1.5
    document.querySelector("#div1 .h1-tag").style.opacity = 0
  })
  document.querySelector("#div2-part2").addEventListener("mouseleave",function(){
    document.querySelector("#recangle").style.scale = 1
    document.querySelector("#triangle svg path").style.fill= `#A5A1FF`
    document.querySelector("#circle").style.scale = 1
    document.querySelector("#triangle").style.scale = 1
    document.querySelector("#div1 .h1-tag").style.opacity = 1
  })
}
triangle();

document.querySelector("#div1").addEventListener("mouseenter", ()=>{
  document.querySelector("#div1 #triangle svg path" ).style.fill = "#FFF480"
  document.querySelector("#div1 .h1-tag").style.opacity = 0

})
document.querySelector("#div1").addEventListener("mouseleave", ()=>{
  document.querySelector("#div1 #triangle svg path" ).style.fill = "#A5A1FF"
  document.querySelector("#div1 .h1-tag").style.opacity = 1

})


gsap.to("#page2-svgpart svg",{
  rotate:`1000deg`,
  scrollTrigger:{
    trigger:"#page2",
    scroller:"#main",
    markers:true,
    scrub:2
  }
})
gsap.to(".page3-div1-p1",{
  left:0,
  // duration:1.5,
  stagger:0.3,
  // ease: Power4.easeOut,
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
    start:"top 90%",
    end:"top -150%",
    // markers:true,
    scrub:4,
  }
  
})
gsap.to(".page3-div1-p2",{
  right:0,
  stagger:0.3,
  // ease: Power4.easeOut,
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
    start:"top 90%",
    end:"top -150%",
    // markers:true,
    scrub:4
  }
})
gsap.to(".anim7",{
  x:`100%`,
  scrollTrigger:{
    trigger:"#page5",
    scroller:"#main",
    // markers:true,
    start:"top 10%",
    end:"top -100%",
    scrub:2
  }
})
gsap.to(".anim8",{
  x:`-140%`,
  scrollTrigger:{
    trigger:"#page5",
    scroller:"#main",
    // markers:true,
    start:"top 10%",
    end:"top -100%",
    scrub:2
  }
})

  

