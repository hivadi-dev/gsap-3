gsap.set('img' , {
    yPercent : -100
})

gsap.set('p' , {
    opacity : 0
})
 gsap.to('img' , {
    yPercent : 0 ,
    delay : .5 , 
    stagger : .1 ,
    scale : 1.3 , 
    ease : 'power4.out' ,
    duration : 2 , 
    onComplete : scaleAndFadeIn
 })

 function scaleAndFadeIn(){
    gsap.to ('img' , {
        scale : 1 ,
        duration : 2
    })

    // gsap.to('p' , {
    //     opacity : 1 , 
    //     stagger : .3 , 
    //     y : 50 ,
    //     duration : 2
    // })


    gsap.fromTo('p' , {
        opacity : 0 ,
        y : -50
    } , {
        y : 20 , 
        opacity : 1 , 
        stagger : .3 , 
        duration : 2
    })
 }