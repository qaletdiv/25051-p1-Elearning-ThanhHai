const detailButtons = document.querySelectorAll(".detail-btn");

detailButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const courseCard = button.closest(".course-card");

        const courseId = courseCard.dataset.id;

        window.location.href = `course-detail.html?id=${courseId}`;

    });

});