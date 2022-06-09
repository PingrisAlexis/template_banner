/* ********************************
********** Version : 2.0 **********
******************************** */
/* ***** References *****
Gsap - Getting Started : https://greensock.com/get-started
Gsap - Ease Visualizer : https://greensock.com/ease-visualizer
*/

/* ***** Function | Create Timeline ***** */
var tl;
function createTimeline(){
    // Gsap Timeline
    tl = gsap.timeline({
        repeat:1, // Number of Times the animation Repeat (0 = Play 1 time, 1 = Replay 1 time)
        repeatDelay:4, // Delay in "seconds" before the animation Loop
        onComplete: function(){
            /* ***** Timeline End ***** */
            document.getElementById("ad-container").className = "timeline-finished"; // AddClass "timeline-finished" to "#ad-container" (Hide the Replay Button)

        }
    });

    /* ***** JS Target Variables ***** */
    const contentBanner = document.querySelectorAll(".content-banner");

    /* ***** Base Gsap Timeline ***** */
    tl.to(contentBanner, {duration:0.6, autoAlpha:1, ease: "power2.out"});
    tl.addLabel("start");

    /* ***** Start Coding Here ***** */
    const logo = document.querySelectorAll(".logo-container");
    const atypiqueCan = document.querySelectorAll(".atypique-can-container");
    const exclusiveBubble = document.querySelectorAll(".exclusive-bubble-container");
    const whiteBalloon = document.querySelectorAll(".white-balloon-container");
    const redBalloon = document.querySelectorAll(".red-balloon-container");
    const ctaDiscover = document.querySelectorAll(".cta-discover-container");
    
    tl.from(redBalloon, { duration: 2.5, ease: "power1.out", y: 200 });
    tl.from(atypiqueCan, { duration: 0.6, ease: "back.out", x: -200 },'+=0.5');
    tl.from(exclusiveBubble, { duration: 0.6, ease: "back.out", x: -200 },'-=0.6');

    tl.from(ctaDiscover, { duration: 2.5, ease: "power1.out", width: 0 },'+=0.5');
    tl.from(logo, { duration: 2.5, ease: "power1.out", width:0 },'-=2.5');
    tl.from(whiteBalloon, { duration: 2.5, ease: "power1.out", y: 200 },'-=2.5');


    /* ***** End Coding Here ***** */
}