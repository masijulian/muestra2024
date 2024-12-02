document.addEventListener("DOMContentLoaded", function () {
    let titles = document.querySelectorAll("h1, h2");
    titles.forEach(title => {
        title.classList.add("animate__animated", "animate__fadeIn");
    });

    let sections = document.querySelectorAll("section");
    window.addEventListener("scroll", function () {
        sections.forEach(section => {
            let sectionTop = section.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;

            if (sectionTop < windowHeight * 0.8) {
                section.classList.add("animate__animated", "animate__fadeInUp");
            }
        });
    });

    let buttons = document.querySelectorAll("button, .btn");
    buttons.forEach(button => {
        button.addEventListener("mouseenter", function () {
            button.classList.add("animate__animated", "animate__pulse");
        });
        button.addEventListener("animationend", function () {
            button.classList.remove("animate__pulse");
        });
    });

    const titleH1 = document.querySelector('h1');
    if (titleH1) {
        titleH1.classList.add('animate-slide-in');
    }

    document.querySelectorAll(".preview-video").forEach(video => {
        video.addEventListener("mouseenter", () => {
            video.play();
            video.loop = true;
        });

        video.addEventListener("mouseleave", () => {
            video.pause();
            video.currentTime = 0;
            video.loop = false;
        });

        video.addEventListener("click", () => {
            const modal = document.getElementById("videoModal");
            const modalVideo = document.getElementById("modalVideo");
            modal.classList.add("active");
            modalVideo.src = video.dataset.src;
            modalVideo.load();
            modalVideo.play();
        });
    });

    document.getElementById("videoModal").addEventListener("click", (e) => {
        if (e.target.id === "videoModal") {
            const modal = document.getElementById("videoModal");
            const modalVideo = document.getElementById("modalVideo");
            modal.classList.remove("active");
            modalVideo.src = "";
        }
    });

    document.body.addEventListener("keydown", (e) => {
        const modal = document.getElementById("videoModal");
        if (e.key === "Escape" && modal.classList.contains("active")) {
            modal.classList.remove("active");
            const modalVideo = document.getElementById("modalVideo");
            modalVideo.src = "";
        }
    });

    document.querySelector(".modal-overlay").addEventListener("click", () => {
        const modal = document.getElementById("videoModal");
        modal.classList.remove("active");
        const modalVideo = document.getElementById("modalVideo");
        modalVideo.src = "";
    });
});