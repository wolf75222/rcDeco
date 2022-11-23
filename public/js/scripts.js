window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');  

    for( var i = 0; i < reveals.length; i++ ) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if  ( revealtop < windowheight - revealpoint ) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }


    }
}

// write a send mail function
function sendMail(contactForm) {
    emailjs.send("gmail", "template_1", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}

