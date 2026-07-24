console.log("========== COURSE DETAIL ==========");

const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

console.log("ID:", id);
console.log("Courses:", courses);

const course = courses.find((c) => c.id === id);

console.log("Found:", course);

if (!course) {
  document.body.innerHTML = "<h1>Course Not Found</h1>";
  throw new Error("Course Not Found");
}

document.getElementById("courseTitle").textContent = course.title;
document.getElementById("courseImage").src = course.image;
document.getElementById("courseDescription").textContent = course.description;

const lessonList = document.getElementById("lessonList");

course.lessons.forEach((lesson) => {
  lessonList.innerHTML += `

<div class="lesson">

    <span>

        ${lesson.title}

    </span>

    <span>

        ${lesson.duration}

    </span>

</div>

`;
});
