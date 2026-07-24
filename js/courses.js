const courseGrid = document.getElementById("courseGrid");

courses.forEach(course=>{

    courseGrid.innerHTML += `

        <article
            class="course-card"
            data-id="${course.id}"
        >

            <img
                src="${course.image}"
                alt="${course.title}"
            >

            <div class="course-info">

                <h3>${course.title}</h3>

                <p class="course-category">

                    ${course.category}

                </p>

                <div class="progress-bar">

                    <div
                        class="progress-fill"
                        style="width:${course.progress}%"
                    >

                    </div>

                </div>

                <span>

                    ${course.progress}% Completed

                </span>

                <button
                    class="detail-btn"
                    data-id="${course.id}"
                >

                    View Detail

                </button>

            </div>

        </article>

    `;

});

document.addEventListener("click",(e)=>{

    if(e.target.classList.contains("detail-btn")){

        const id = e.target.dataset.id;

        window.location.href =
        `course-detail.html?id=${id}`;

    }

});