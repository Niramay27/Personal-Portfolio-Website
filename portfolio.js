const delay = (delayTime) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, delayTime);
    });
};


const addItem = async (item, container, t) => {
    await delay(t);
    container.innerHTML += item;
};

const addProject = async (heading, details, link) => {
    const area = document.createElement("div");
    document.querySelector(".ul").appendChild(area);
    area.innerHTML =
        `
        <ul class="ul">
            <a target="__blank" href=${link}
            <li class="li">
                <div class="liHead">
                    ${heading}
                </div>
                <h5 class="liTxt">${details}</h5>
            </li>
            </a>
        </ul>`
};

const addCertificate = async (heading, certificate, link) => {
    const new_cert = document.createElement("div");
    document.querySelector(".certs").appendChild(new_cert);
    new_cert.innerHTML =
        `<div class="animate">
            <h3 class="cert_head">${heading}</h3>
            <embed class="certi" src="${certificate}" width="200px" type="application/pdf">
            <a target="__blank" href="${link}">
                <button class="cert_btn">Verify</button>
            </a>
        </div>`;
};


let nameArray = [
    "N", "I", "R", "A", "M", "A", "Y", " ", "M", ".", "P", "A", "T", "E", "L"
];

let passionArray = [
    "Developer -- ", "Researcher -- ", "Programmer"
];

let projectArray = [
    "P", "R", "O", "J", "E", "C", "T", "S"
];

let internArray = [
    "I", "N", "T", "E", "R", "N", "S", "H", "I", "P", "S"
];

let resumeArray = [
    "R", "E", "S", "U", "M", "E"
];
let contactMe = [
    "C", "O", "N", "T", "A", "C", "T", " ", "M", "E"
];
let certifcateArray = [
    "C", "E", "R", "T", "I", "F", "I", "C", "A", "T", "E", "S"
];
let headingArray = [
    "Hate Speech Detection", "Spam SMS Classifier", "Credit EDA", "Hostel Accomodation", "Portfolio Website", "News App", "Music Player "
];
let detailsArray = [
    "Used Decision Tree Classifier algorithm to detect Hate Speech on Twitter data", "Used Naive Bayes model to classify mails as Spam or Ham", "Efficiently used Data Exploration Skills to optimize risk assessment and factors influencing creditworthiness", "Flask application designed to allocate rooms to groups based on their uploaded CSV files containing group and hostel data.", "Creatively designed this very own portfolio website using HTML,CSS,JS", "A web news application that uses api to fetch news and displays it categorically", "A beginner project of responsive music player with limited functionalities"
];
let linkArray = [
    "https://github.com/Niramay27/Basic-ML-projects", "https://github.com/Niramay27/Basic-ML-projects", "https://github.com/Niramay27/Basic-ML-projects", "https://github.com/Niramay27/Digitalization-of-the-Hospitality-Process", "https://portfolio-y344.onrender.com/", "https://github.com/Niramay27/news_app", "https://github.com/Niramay27/music-player/tree/main"
];

let certi_name = [
    "Supervised Learning", "Advanced Algorithm", "Unsupervised Learning", "Data Science Course", "Personifwy Project ", "Personifwy Internship"
];
let certi_img = [
    "Supervised Learning.pdf", "Advanced Algorithm .pdf", "unsupervised learning.pdf", "Niramay_Jan_2024_participation_44298.pdf", "Niramay_Jan_2024_project_completion_Hate Speech.pdf", "Niramay_Mar_2024_internship_44298.pdf", "Niramay_Mar_2024_internship_44298.pdf"
];
let certi_link = [
    "https://www.coursera.org/account/accomplishments/verify/VHZLMGDZHBH5", "https://www.coursera.org/account/accomplishments/verify/HHYGWTETWD7T", "https://www.coursera.org/account/accomplishments/verify/QXUJG6MM6XUQ", "https://www.1stop.ai/verify-certificate", "https://www.1stop.ai/verify-certificate", "https://www.1stop.ai/verify-certificate"
];

(async () => {
    const container1 = document.createElement("div");
    document.querySelector(".name").appendChild(container1);
    for (const item of nameArray) {
        await addItem(item, container1, 100);
    }
    const container2 = document.createElement("div");
    document.querySelector(".passion").appendChild(container2);
    for (const item of passionArray) {
        await addItem(item, container2, 400);
    }

    const container4 = document.createElement("div");
    document.querySelector(".aboutParas").appendChild(container4);
    await delay(200);
    container4.innerHTML =
        `<div class="aboutParas">
            <div class="para animate">
                <h2 class="head animate">COLLEGE</h2>
                <p class="about_para animate">Pursuing a BS in Engineering Science at IISER Bhopal with a CGPA of 9.6
                </p>
            </div>
            <div class="para animate">
                <h2 class="head animate">INTEREST</h2>
                <p class="about_para animate">Fostered a deep interest in the mathematical and logical foundations
                    of ML & DL Algorithms</p>
            </div>
            <div class="para animate">
                <h2 class="head animate">FIELD</h2>
                <p class="about_para animate">Mathematical and Logical skills in Supervised Learning, Unsupervised Learning, Advanced Algorithms, and Reinforcement Learning. </p>
            </div>
            <div class="para animate ">
                <h2 class="head animate">SKILLS</h2>
                <p class="about_para animate">
                Possess a good grasp of Data
                    Structures, Algorithms, HTML, CSS, JavaScript,
                    Express.jsa nd other core computer science concepts.</p>
            </div>
        </div>`

    await delay(500);
    
    const container11 = document.createElement("div");
    document.querySelector(".arrow").appendChild(container11);
    container11.innerHTML=`
    <div class="arrow">
        <img width="20px" src="down-arrow-svgrepo-com.svg" alt="">
        <img width="20px"src="down-arrow-svgrepo-com.svg" alt="">
    </div>
    `
    const container6 = document.createElement("div");
    document.querySelector(".proj_head").appendChild(container6);
    for (const item of projectArray) {
        await addItem(item, container6, 200);
    }

    for (let i = 0; i < headingArray.length; i++) {
        await addProject(headingArray[i], detailsArray[i], linkArray[i]);
    }

    const container15 = document.createElement("div")
    document.querySelector(".internBody").appendChild(container15)
    container15.innerHTML=`
    <div class="internBody">
        <div class="internbody">
            <h2 class="internHead"> Personifwy</h2>
            <p class="internPara"> March '23 - May '23 (2 months) • Remote</p>
            <h4 class="internTxt">
                • Projects:
                <br>
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1. Engineered a Hate Speech Detection system using Decision Tree
                Classifier with an
                accuracy of 88%.
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. Developed a Spam SMS Classifier leveraging machine learning algorithm Naive Bayes, which reduced unsolicited message complaints.
                <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3. Conducted comprehensive credit EDA (Exploratory Data Analysis) to optimize risk assessment and factors influencing creditworthiness.
                <br>
                <br>
                • Cleaned and Analyzed the raw dataset with python libraries (NumPy, pandas,
                matplotlib, seaborne, re, skit-learn)
                <br>
                • Incorporated various in-built machine learning models to build these projects.
            </h4>
        </div>
    </div>`

    const container13 = document.createElement("div");
    document.querySelector(".title").appendChild(container13);
    for (const item of internArray) {
        await addItem(item, container13, 200);
    }

    const container12 = document.createElement("div");
    document.querySelector(".certHead").appendChild(container12);
    for (const item of certifcateArray) {
        await addItem(item, container12, 200);
    }

    for (let i = 0; i < certi_name.length; i++) {
        await addCertificate(certi_name[i], certi_img[i], certi_link[i]);
    }


    const container7 = document.createElement("div");
    document.querySelector(".resHead").appendChild(container7);
    for (const item of resumeArray) {
        await addItem(item, container7, 200);
    }
    const container8 = document.createElement("div");
    document.querySelector(".resume_txt").appendChild(container8);
    container8.innerHTML =
        `<div class="resume_txt animate">
            <h3>You can Download my resume here: </h3>
            <a href="Niramay Resume.pdf" download>
                <button class="resume_download graph_btn">Click</button>
            </a>
        </div>`
    const container9 = document.createElement("div");
    document.querySelector(".cont_head").appendChild(container9);
    for (const item of contactMe) {
        await addItem(item, container9, 200);
    }
    const container10 = document.createElement("div");
    document.querySelector(".images").appendChild(container10);
    container10.innerHTML =
        `<div class="images animate">
            <a target="__blank"href="https://mail.google.com/mail/?view=cm&fs=1&to=niramaympatel@gmail.com">
                <img class="mailImg"src="mail.svg" alt="mail">
            </a>
            <a target="__blank"href="https://www.linkedin.com/in/niramay-patel-481a08288/">
                <img class="linkdinImg"src="icons8-linkedin.svg" alt="linkdin">
            </a>
            <a target="__blank"href="https://x.com/m_niramay">
                <img class="twitterImg"src="icons8-twitter.svg" alt="twitter">
            </a>
        </div>`
})();
