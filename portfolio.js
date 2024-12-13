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

let workArray = [
    "C","U","R","R","E","N","T"," ","W","O","R","K"];

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
    "Credit EDA", "Bollywood Face Match","Basic ML Projects","Portfolio Website", "News App", "Music Player","Hostel Accomodation"
];
let detailsArray = [
    "Efficiently used Data Exploration and Model development skills to analyse the credit data.","A transfer learning project utilizing ResNet50 to match an uploaded face image with the most likely Bollywood celebrity.","Designed a Hate Speech Detector and Spam SMS Classifier using Machine Learning algorithms" , "Creatively designed this very own portfolio website using HTML,CSS,JS", "A web news application that uses api to fetch news and displays it categorically", "A beginner project of responsive music player with limited functionalities","Flask application designed to allocate rooms to groups based on their uploaded CSV files containing group and hostel data."
];
let linkArray = [
    "https://github.com/Niramay27/Credit_EDA","https://github.com/Niramay27/Bollywood_face_similarity","https://github.com/Niramay27/Basic-ML-projects","https://github.com/Niramay27/Personal-Portfolio-Website", "https://github.com/Niramay27/news_app", "https://github.com/Niramay27/music-player/tree/main","https://github.com/Niramay27/Digitalization-of-the-Hospitality-Process"
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
        await addItem(item, container2, 200);
    }

    const container4 = document.createElement("div");
    document.querySelector(".aboutParas").appendChild(container4);
    await delay(150);
    container4.innerHTML =
        `<div class="aboutParas">
            <div class="para animate">
                <h2 class="head animate">COLLEGE</h2>
                <p class="about_para animate">Pursuing a BS in Engineering Science at IISER Bhopal with a CGPA of 9.6
                </p>
            </div>
            <div class="para animate">
                <h2 class="head animate">INTEREST</h2>
                <p class="about_para animate">Fostered a deep interest in Data Science, Machine Learning and Deep Learning models, Computer Vision and Robotics </p>
            </div>
            <div class="para animate">
                <h2 class="head animate">FIELD</h2>
                <p class="about_para animate"> Artificial Intelligence with focus in Data Science (Data Analysis, Predictive Models), DL architecture and models, Computer Vision </p>
            </div>
            <div class="para animate ">
                <h2 class="head animate">SKILLS</h2>
                <p class="about_para animate">
                Numpy, Pandas, Matplotlib, Sklearn, Pytorch, C/C++, Data
                    Structures, Algorithms, JavaScript,
                    Express.js and other core computer science concepts.</p>
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
    const container16 = document.createElement("div");
    document.querySelector(".current_work").appendChild(container16);
    for (const item of workArray) {
        await addItem(item, container16, 150);
    }

    const container17 = document.createElement("div")
    document.querySelector(".workBody").appendChild(container17)
    container17.innerHTML=`
    <div class="workBody">
        <div class="workbody">
            <h2 class="workHead"> MOON LABS, IISER Bhopal</h2>
            <p class="workPara"> December '24 - Present • On-Site</p>
            <h4 class="workText">
                Problem to solve:
                <br>
                Optimizing the hyperparameters for camera and IMU configurations in OpenVINS. This involves determining the optimal number of sensors, their placement, and operating frequencies to improve system performance. Additionally, converting the OpenVINS codebase to Python, making it more modular and enabling easy integration of different algorithms. 
                <br>
                <br>
                Currently, I am learning Computer Vision and Robotics that will be used in the project.
                <br>
                <br>
                For details visit: <a class="link" target="__blank"href="https://docs.openvins.com/"> OpenVINS</a>
            </h4>
        </div>
    </div>`

    const container6 = document.createElement("div");
    document.querySelector(".proj_head").appendChild(container6);
    for (const item of projectArray) {
        await addItem(item, container6, 150);
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
            <p class="internPara"> March '24 - May '24 (2 months) • Remote</p>
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
        await addItem(item, container13, 150);
    }

    const container12 = document.createElement("div");
    document.querySelector(".certHead").appendChild(container12);
    for (const item of certifcateArray) {
        await addItem(item, container12, 150);
    }

    for (let i = 0; i < certi_name.length; i++) {
        await addCertificate(certi_name[i], certi_img[i], certi_link[i]);
    }


    const container7 = document.createElement("div");
    document.querySelector(".resHead").appendChild(container7);
    for (const item of resumeArray) {
        await addItem(item, container7, 150);
    }
    const container8 = document.createElement("div");
    document.querySelector(".resume_txt").appendChild(container8);
    container8.innerHTML =
        `<div class="resume_txt animate">
            <h3>You can view my resume here: </h3>
            <a href="Niramay Resume.pdf" target="_blank">
                <button class="resume_download graph_btn">Click</button>
            </a>
        </div>`
    const container9 = document.createElement("div");
    document.querySelector(".cont_head").appendChild(container9);
    for (const item of contactMe) {
        await addItem(item, container9, 150);
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
