const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the("#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });





    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}

locomotiveAnimation()


gsap.to("#nav11 svg", {
    transform: "translateY(-100%)",
    scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: true
    }
})
gsap.to("#navv #link", {
    transform: "translateY(-100%)",
    opacity: 0,
    scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: true
    }
})

function loadingAnimation() {
    gsap.from("#main h1", {
        y: 100,
        opacity: 0,
        delay: 0.5,
        duration: 0.9,
        stagger: 0.2
    })
    gsap.from("#main #video", {
        scale: 0.9,
        opacity: 0,
        delay: 1.3,
        duration: 0.3,
    })
}
loadingAnimation()



function page3() {

    document.addEventListener("mousemove", function (dets) {
        gsap.to("#cursor", {
            left: dets.x,
            top: dets.y
        })
    })

    document.querySelector("#child1").addEventListener("mouseenter", function () {
        gsap.to("#cursor", {
            transform: 'translate(-50%,-50%) scale(1)'
        })
    })
    document.querySelector("#child1").addEventListener("mouseleave", function () {
        gsap.to("#cursor", {
            transform: 'translate(-50%,-50%) scale(0)'
        })
    })
    document.querySelector("#child2").addEventListener("mouseenter", function () {
        gsap.to("#cursor", {
            transform: 'translate(-50%,-50%) scale(1)'
        })
    })
    document.querySelector("#child2").addEventListener("mouseleave", function () {
        gsap.to("#cursor", {
            transform: 'translate(-50%,-50%) scale(0)'
        })
    })
}
page3()

function mouseenter(){
    let hover = document.querySelector("#firr")
let content = document.querySelector(".connt")
let first = document.querySelector(".firsttt")
let firstt = document.querySelector(".firstt")
hover.addEventListener("mouseenter", function () {
    content.style.height = "230px"
    first.style.opacity = "1"
    firstt.style.opacity = "1"
    hover.style.cursor = "pointer"
})
hover.addEventListener("mouseleave", function () {
    content.style.height = "0"
    first.style.opacity = "0"
    firstt.style.opacity = "0"
})

let hoverr = document.querySelector(".firse")
let contentt = document.querySelector(".sont")
let firsttt = document.querySelector(".forr")
let firr = document.querySelector(".forrr")
hoverr.addEventListener("mouseenter", function () {
    contentt.style.height = "210px"
    firsttt.style.opacity = "1"
    firr.style.opacity = "1"
    hoverr.style.cursor = "pointer"
})
hoverr.addEventListener("mouseleave", function () {
    contentt.style.height = "0"
    firsttt.style.opacity = "0"
    firr.style.opacity = "0"
})


let hove = document.querySelector(".again")
let conten = document.querySelector(".sonti")
let firee = document.querySelector(".samir")
let fr = document.querySelector(".samm")
hove.addEventListener("mouseenter", function () {
    conten.style.height = "210px"
    firee.style.opacity = "1"
    fr.style.opacity = "1"
    hove.style.cursor = "pointer"
})
hove.addEventListener("mouseleave", function () {
    conten.style.height = "0"
    firee.style.opacity = "0"
    fr.style.opacity = "0"
})
}
mouseenter()