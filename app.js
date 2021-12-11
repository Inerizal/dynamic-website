gsap.registerPlugin(ScrollTrigger);

const mouse = document.querySelector('.cursor');
const mouseText = mouse.querySelector('.cursor-text');
const burger = document.querySelector('.burger');
const logo = document.querySelector('#logo');

function animateSlides() {
    // Slectors
    const sliders = document.querySelectorAll('.slide');
    const nav = document.querySelector('.nav-header');

    // Loop over each slide
    sliders.forEach((slide, index, slides) => {
        const revealImg = slide.querySelector('.reveal-img');
        const img = slide.querySelector('img');
        const revealText = slide.querySelector('.reveal-text');

        // GSAP
        const slideTl = gsap.timeline({
            scrollTrigger: {
                trigger: slide,
                start: 'top 25%',
                
            },
            defaults: {duration: 1, ease: 'power2.inOut'}
        });

        slideTl.fromTo(revealImg, {x: '0%'}, {x: '100%'});
        slideTl.fromTo(img, {scale: 2}, {scale: 1}, '-=1');
        slideTl.fromTo(revealText, {x: '0%'}, {x: '100%'}, '-=0.75');
        // slideTl.fromTo(nav, {y: '-100%'}, {y: '0%'}, '-=0.5');

        // New Animation
        const pageTl = gsap.timeline({
            scrollTrigger: {
                trigger: slide,
                start: 'top top',
                pin: true,
                pinSpacing: false,
                scrub: true,
                snap: 1 / (sliders.length - 1),
                // markers: true,
                // end: '+=700',
                // duration: '100%',
                // toggleActions: 'restart none reverse none',
                
            },
        });
        let nextSlide = slides.length - 1 === index ? 'end': slides[index + 1];
        pageTl.fromTo(nextSlide, {y: '0%'}, {y: '70%'});
        pageTl.fromTo(slide, {opacity: 1, scale: 1}, {opacity: 0, scale: 0.5});
        pageTl.fromTo(nextSlide, {y: '70%'}, {y: '0%'}, '-=0.5');
    })
}

function cursor(e) {
    // let mouse = document.querySelector('.cursor');

    mouse.style.top = e.pageY + 'px';
    mouse.style.left = e.pageX + 'px';
}

function activeCursor(e) {
    const item = e.target;
    if(item.id === 'logo' || item.classList.contains('burger') || item.classList.contains('return')) {
        mouse.classList.add('nav-active');
    } else {
        mouse.classList.remove('nav-active');
    }

    if(item.classList.contains('explore')) {
        mouse.classList.add('explore-active');
        gsap.to('.title-swipe', 1, {y: '0%'});
        mouseText.innerText = 'Tap';
    } else if(item.classList.contains('title-text')) {
        mouse.classList.add('explore-active');
        gsap.to('.title-swipe', 1, {y: '0%'});
    } else {
        mouse.classList.remove('explore-active');
        gsap.to('.title-swipe', 1, {y: '100%'});
        mouseText.innerText = '';
    }
}

function navToggle(e) {
    if(!e.target.classList.contains('active')) {
        e.target.classList.add('active');
        gsap.to('.line1', 0.5, {rotate: '45', y: 5, background: 'black'});
        gsap.to('.line2', 0.5, {rotate: '-45', y: -5, background: 'black'});
        gsap.to('#logo', 1, {color: 'black'});
        gsap.to('.nav-bar', 1, {clipPath: 'circle(2500px at 100% -10%)'});
        document.body.classList.add('hide');
    } else {
        e.target.classList.remove('active');
        gsap.to('.line1', 0.5, {rotate: '0', y: 0, background: 'white'});
        gsap.to('.line2', 0.5, {rotate: '0', y: 0, background: 'white'});
        gsap.to('#logo', 1, {color: 'white'});
        gsap.to('.nav-bar', 1, {clipPath: 'circle(50px at 100% -10%)'});
        document.body.classList.remove('hide');
    }
    
}

function mountainsAnimation() {
    const slides = document.querySelectorAll('.mountains-slide');
    slides.forEach((slide, index, slides) => {
        const slideTl = gsap.timeline({
            scrollTrigger: {
                trigger: slide,
                start: 'top top',
                pin: true,
                pinSpacing: false,
                scrub: true,
                // markers: true,
                // end: '+=700',
                // duration: '100%',
                // toggleActions: 'restart none reverse none',
                
            },
            defaults: {duration: 1}
        });

        let nextSlide = slides.length - 1 === index ? 'end': slides[index + 1];
        const nextImg = nextSlide.querySelector('img');
        // const nextDesc = nextSlide.querySelector('.mountains-desc');
        slideTl.fromTo(slide, {opacity: 1}, {opacity: 0});
        slideTl.fromTo(nextSlide, {opacity: 0}, {opacity: 1}, '-=1');
        slideTl.fromTo(nextImg, {x: '50%', y: '100%'}, {x: '0%', y: '0%'});
        // slideTl.fromTo(nextDesc, {x: '-50%', y: '100%'}, {x: '0%', y: '0%'}, '-=1');
    })
}

function hikeAnimation() {
    const slides = document.querySelectorAll('.hike-slide');
    slides.forEach((slide, index, slides) => {
        const slideTl = gsap.timeline({
            scrollTrigger: {
                trigger: slide,
                start: 'top top',
                pin: true,
                pinSpacing: false,
                scrub: true,
                // markers: true,
                // end: '+=700',
                // duration: '100%',
                // toggleActions: 'restart none reverse none',
                
            },
            defaults: {duration: 1}
        });

        let nextSlide = slides.length - 1 === index ? 'end': slides[index + 1];
        const nextImg = nextSlide.querySelector('img');
        // const nextDesc = nextSlide.querySelector('.hero-desc');

        slideTl.fromTo(slide, {opacity: 1}, {opacity: 0});
        slideTl.fromTo(nextSlide, {opacity: 0}, {opacity: 1}, '-=1');
        slideTl.fromTo(nextImg, {x: '50%', y: '100%'}, {x: '0%', y: '0%'});
        // slideTl.fromTo(nextDesc, {x: '-50%', y: '100%'}, {x: '0%', y: '0%'}, '-=1');
    })
}

function detailAnimation() {
    const slides = document.querySelectorAll('.detail-slide');
    slides.forEach((slide, index, slides) => {
        const slideTl = gsap.timeline({
            scrollTrigger: {
                trigger: slide,
                start: 'top top',
                pin: true,
                pinSpacing: false,
                scrub: true,
                // markers: true,
                // end: '+=700',
                // duration: '100%',
                // toggleActions: 'restart none reverse none',
                
            },
            defaults: {duration: 1}
        });

        let nextSlide = slides.length - 1 === index ? 'end': slides[index + 1];
        const nextImg = nextSlide.querySelector('img');
        slideTl.fromTo(slide, {opacity: 1}, {opacity: 0});
        slideTl.fromTo(nextSlide, {opacity: 0}, {opacity: 1}, '-=1');
        slideTl.fromTo(nextImg, {x: '50%'}, {x: '0%'});
    })
}

// Barba page transitions
barba.init({
    views: [
        {
            namespace: 'home',
            beforeEnter() {
                ScrollTrigger.refresh(true);
                animateSlides();
                logo.href = './index.html';
            },
            beforeLeave() {
                let triggers = ScrollTrigger.getAll();
                triggers.forEach((trigger) => {
                    trigger.kill();
                });
            }
        },
        {
            namespace: 'mountains',
            beforeEnter() {
                ScrollTrigger.refresh(true);
                logo.href = '../index.html';
                mountainsAnimation();
                gsap.fromTo('.nav-header', 1, {y: '-100%'}, {y: '0%', ease: 'power2.inOut'});
            },
            beforeLeave() {
                let triggers = ScrollTrigger.getAll();
                triggers.forEach((trigger) => {
                    trigger.kill();
                });
            }
        },
        {
            namespace: 'hike',
            beforeEnter() {
                ScrollTrigger.refresh(true);
                logo.href = '../index.html';
                hikeAnimation();
                gsap.fromTo('.nav-header', 1, {y: '-100%'}, {y: '0%', ease: 'power2.inOut'});
            },
            beforeLeave() {
                let triggers = ScrollTrigger.getAll();
                triggers.forEach((trigger) => {
                    trigger.kill();
                });
            }
        },
        {
            namespace: 'fashion',
            beforeEnter() {
                ScrollTrigger.refresh(true);
                logo.href = '../index.html';
                detailAnimation();
                // gsap.fromTo('.nav-header', 1, {y: '-100%'}, {y: '0%', ease: 'power2.inOut'});
            },
            beforeLeave() {
                let triggers = ScrollTrigger.getAll();
                triggers.forEach((trigger) => {
                    trigger.kill();
                });
            }
        }
    ],
    transitions: [
        {
            leave({current, next}) {
                let done = this.async();
                // Add animation
                const tl = gsap.timeline({defaults: {ease: 'power2.inOut'}});

                tl.fromTo(current.container, 1, {opacity: 1}, {opacity: 0}); 
                tl.fromTo('.swipe', 0.5, {x: '-100%'}, {x: '0%', onComplete: done}, '-=0.9');
            },
            enter({current, next}) {
                let done = this.async();
                // Scroll to the top
                window.scrollTo(0, 0);
                // Add animation
                const tl = gsap.timeline({defaults: {ease: 'power2.inOut'}});

                tl.fromTo(next.container, 1, {opacity: 0}, {opacity: 1}); 
                tl.fromTo('.swipe', 0.5, {x: '0%'}, {x: '100%', stagger: 0.15, onComplete: done}, '-=0.9');
                tl.fromTo('.nav-header', 1, {y: '-100%'}, {y: '0%'},'-=0.5');
            }
        }
    ]
});

// Event Listeners
window.addEventListener('mousemove', cursor);
window.addEventListener('mouseover', activeCursor);
burger.addEventListener('click', navToggle);



if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}