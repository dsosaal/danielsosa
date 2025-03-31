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
