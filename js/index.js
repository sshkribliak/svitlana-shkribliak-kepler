
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

let messageForm = document.getElementsByName("leave_message");
messageForm[0].addEventListener("submit", function (event) {
    event.preventDefault();
    let userName = event.target.usersName.value;
    let userEmail = event.target.usersEmail.value;
    let userMessage = event.target.usersMessage.value;

    console.log("Name:", userName);
    console.log("Email:", userEmail);
    console.log("Message:", userMessage);

    let messageSection = document.getElementById("messages");
    let messageList = messageSection.querySelector("ul");
    let newMessage = document.createElement('li');
    newMessage.innerHTML = `
    <a href="mailto:${userEmail}">${userName}</a>
    <span> ${userMessage}</span>
    `;
    let removeButton = document.createElement('button');
    removeButton.innerText = "remove";
    removeButton.setAttribute("type", "button");
    removeButton.addEventListener("click", function (event) {
        let entry = removeButton.parentNode;
        entry.remove();
    })

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageForm[0].reset();
});