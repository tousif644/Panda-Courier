const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})



/*SCROLL HOME*/
sr.reveal('.card-title', {})
sr.reveal('.card-body', {delay: 200})
sr.reveal('.card-img-top', {origin:'right', delay: 400})

/*SCROLL ABOUT*/
sr.reveal('.tracking-text', {delay: 500})
sr.reveal('.input-group-text', {delay: 300})
sr.reveal('.buy-now-button', {delay: 400})
sr.reveal('h1', {delay: 500})
sr.reveal('h2', {delay: 600, interval: 200})

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills_name', {distance: '20px', delay: 50, interval: 100})
sr.reveal('.skills_img', {delay: 400})
sr.reveal('#myItem1' , {distance:"40px" , delay:300 , interval:50})
sr.reveal('#myItem2' , {distance:"50px" , delay:500, interval:60})
sr.reveal('#myItem3' , {distance:"60px" , delay:700 , interval:70})
sr.reveal('#myItem4' , {distance:"70px" , delay:900 , interval:80})
sr.reveal('#myItem5' , {distance:"90px" , delay:1000 , interval:90})

/*SCROLL PORTFOLIO*/
sr.reveal('.portfolio_img', {interval: 200})

/*SCROLL CONTACT*/
sr.reveal('.contact_subtitle', {})
sr.reveal('.contact_text', {interval: 200})
sr.reveal('.contact_input', {delay: 400})
sr.reveal('.contact_button', { delay: 600 })

