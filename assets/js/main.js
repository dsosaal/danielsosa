// Resume section tabs and tab contents
const resumeTabs = document.querySelector(".resume-tabs");
const resumePortfolioTabBtns = resumeTabs.querySelectorAll(".tab-btn");
const resumeTabContents = document.querySelectorAll(".resume-tab-content")

var resumeTabNav = function(resumeTabClick){
    resumeTabContents.forEach((resumeTabContent) => {
        resumeTabContent.style.display = "none";
        resumeTabContent.classList.remove("active");
    });

    resumePortfolioTabBtns.forEach((resumePortfolioTabBtn) => {
        resumePortfolioTabBtn.classList.remove("active");
    });

    resumeTabContents[resumeTabClick].style.display = "flex";

    setTimeout(()=>{
        resumeTabContents[resumeTabClick].classList.add("active");
    }, 100);
    


    resumePortfolioTabBtns[resumeTabClick].classList.add("active");
}

resumePortfolioTabBtns.forEach((resumePortfolioTabBtn, i) => {
    resumePortfolioTabBtn.addEventListener("click", () => {
        resumeTabNav(i);
    })
});

// Service modal open/close function
const serviceCardWithmodals = document.querySelectorAll(".service-container .card-with-modal");

serviceCardWithmodals.forEach((serviceCardWithmodal) => {
    const serviceCard = serviceCardWithmodal.querySelector(".service-card");
    const serviceBackDrop = serviceCardWithmodal.querySelector(".service-modal-backdrop");
    const modalCloseBtn = serviceCardWithmodal.querySelector(".modal-close-btn");
    const serviceModal = serviceCardWithmodal.querySelector(".service-modal");

    serviceCard.addEventListener("click", () => {
        serviceBackDrop.style.display = "flex";

        setTimeout(() => {
            serviceBackDrop.classList.add("active");
        }, 100);

        setTimeout(() => {
            serviceModal.classList.add("active");
        }, 300);
    });

    modalCloseBtn.addEventListener("click", () => {
        setTimeout(() => {
            serviceBackDrop.style.display = "none";
        }, 500);
        
        setTimeout(() => {
            serviceBackDrop.classList.remove("active");
            serviceModal.classList.remove("active");
        }, 100);
        
    });
});


// Filter portfolio cards according to portfolio tabs
document.addEventListener("DOMContentLoaded", () => {
    const portfolioTabs = document.querySelector(".portfolio-tabs");
    const portfolioTabBtns = portfolioTabs.querySelectorAll(".tab-btn");
    const cardsWithModals = document.querySelectorAll(".portfolio-container .card-with-modal");

    portfolioTabBtns.forEach((tabBtn) => {
        tabBtn.addEventListener("click", () => {
            const filter = tabBtn.getAttribute("data-filter");

            cardsWithModals.forEach((cardWithModal) => {
                if(filter === "all" || cardWithModal.classList.contains(filter)){
                    cardWithModal.classList.remove("hidden");

                    setTimeout(() => {
                        cardWithModal.style.opacity = "1";
                        cardWithModal.style.transition = ".5s ease";
                    }, 1);
                }
                else{
                    cardWithModal.classList.add("hidden");

                    setTimeout(() => {
                        cardWithModal.style.opacity = "0";
                        cardWithModal.style.transition = ".5s ease";
                    }, 1);
                }
            });
            // Add active class to the clicked tab button.
            portfolioTabBtns.forEach((tabBtn) => tabBtn.classList.remove("active"));
            tabBtn.classList.add("active");
        });
    });
});


// Open/Close Portfolio Modals
const portfolioCardsWithModals = document.querySelectorAll(".portfolio-container .card-with-modal");

portfolioCardsWithModals.forEach((portfolioCardWithModal) => {
    const portfolioCard = portfolioCardWithModal.querySelector(".portfolio-card");
    const portfolioBackdrop = portfolioCardWithModal.querySelector(".portfolio-modal-backdrop");
    const portfolioModal = portfolioCardWithModal.querySelector(".portfolio-modal");
    const modalCloseBtn = portfolioCardWithModal.querySelector(".modal-close-btn");

    portfolioCard.addEventListener("click", () => {
        portfolioBackdrop.style.display = "flex";

        setTimeout(() => {
            portfolioBackdrop.classList.add("active");
        }, 300);
        
        setTimeout(() => {
            portfolioModal.classList.add("active");
        }, 300);
    });

    modalCloseBtn.addEventListener("click", () => {
        setTimeout(() => {
            portfolioBackdrop.style.display = "none";
        }, 500);
        
        setTimeout(() => {
            portfolioBackdrop.classList.remove("active");
            portfolioModal.classList.remove("active");
        }, 100);
    });

});


// Testimonial Swiper
var swiper = new Swiper(".sue-client-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Send/Receive emails from contact form = EmailJS
(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
        publicKey: "wKqF0S3ZjXTy88FbM",
    });
})();

sueContactForm = document.getElementById("sue-contact-form");
sueContactFormAlert = document.querySelector(".contact-form-alert");

sueContactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // these IDs from the previous steps
    emailjs.sendForm('service_ej2paxq', 'template_7kmdc8i', '#sue-contact-form')
        .then(() => {
            // console.log('SUCCESS!');
            sueContactFormAlert.innerHTML = "<span>Your message sent successfully!</span> <i class='ri-checkbox-circle-fill'></i>";
            sueContactForm.reset();

            setTimeout(() => {
                sueContactFormAlert.innerHTML = "";
            }, 5000);
        }, (error) => {
            // console.log('FAILED...', error);
            sueContactFormAlert.innerHTML = "<span>Message not sent</span> <i class='ri-error-warning-fill'></i>";
            sueContactFormAlert.title = error;
        });
});


// Shrink the height of the header on scroll
// window.addEventListener("scroll", () => {
//     const sueHeader = document.querySelector(".sue-header");

//     sueHeader.classList.toggle("shrink", window.scrollY > 0);
// });

// Bottom Navigation Menu

// Each Botton navigation menu items active on page scroll.

// window.addEventListener("scroll", () =>{
//     const navMenuSections = document.querySelectorAll(".nav-menu-section");
//     const scrollY = window.pageYOffset;

//     navMenuSections.forEach((navMenuSection) => {
//         let sectionHeight = navMenuSection.offsetHeight;
//         let sectionTop = navMenuSection.offsetTop - 50;
//         let id = navMenuSection.getAttribute("id");

//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//             document.querySelector(".bottom-nav .menu li a[href*=" + id + "]").classList.add("current");
//         }else{
//             document.querySelector(".bottom-nav .menu li a[href*=" + id + "]").classList.remove("current");
//         }
//     });
// });


// JavaScript to show bottom navigation menu on home page 

// Website dark/light theme
// change theme and save current theme on click the theme button

