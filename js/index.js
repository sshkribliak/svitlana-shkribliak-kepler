let today = new Date();
let thisYear = today.getFullYear();


let footerElement = document.createElement('footer');
document.body.appendChild(footerElement);

const footer = document.querySelector('footer');

let copyright = document.createElement('p');
copyright.innerHTML = `&copy; Svitlana Shkribliak ${thisYear}`;
copyright.classList.add('copyright');
footer.appendChild(copyright);

let skills = ["HTML", "CSS", "JavaScript", "GitHub"];
let skillsSection = document.getElementById('skills');
let skillsList = skillsSection.querySelector('ul');

skills.forEach((item) => {
    let skill = document.createElement('li');
    skill.innerText = item;
    skillsList.appendChild(skill);
})