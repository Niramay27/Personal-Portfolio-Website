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
    "Think -- ", "Code -- ", "Run -- ", "Repeat"
];

let pubArray = [
    "P", "U", "B", "L", "I", "C", "A", "T", "I", "O", "N", "S"];

let workArray = [
    "C", "U", "R", "R", "E", "N", "T", " ", "W", "O", "R", "K"];

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
    "Credit EDA", "Bollywood Face Match", "Visual Odometry","Basic ML Projects","Portfolio Website", "News App", "Music Player","Hostel Accomodation"
];
let detailsArray = [
    "Efficiently used Data Exploration and Model development skills to analyse the credit data.","A transfer learning project utilizing ResNet50 to match an uploaded face image with the most likely Bollywood celebrity.","Estimated the camera’s motion from a sequence of images, successfully reconstructed the vehicle’s trajectory and evaluated the accuracy using ground truth data.","Designed a Hate Speech Detector and Spam SMS Classifier using Machine Learning algorithms" , "Creatively designed this very own portfolio website using HTML,CSS,JS", "A web news application that uses api to fetch news and displays it categorically", "A beginner project of responsive music player with limited functionalities","Flask application designed to allocate rooms to groups based on their uploaded CSV files containing group and hostel data."
];
let linkArray = [
    "https://github.com/Niramay27/Credit_EDA","https://github.com/Niramay27/Bollywood_face_similarity","https://github.com/Niramay27/Visual_Odometry_on_KITTI","https://github.com/Niramay27/Basic-ML-projects","https://github.com/Niramay27/Personal-Portfolio-Website", "https://github.com/Niramay27/news_app", "https://github.com/Niramay27/music-player/tree/main","https://github.com/Niramay27/Digitalization-of-the-Hospitality-Process"
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
                <p class="about_para animate">BS in Computer Science at Indian Institute of Science Education and Research, Bhopal with a CPI of 9.33/10
                </p>
            </div>
            <div class="para animate">
                <h2 class="head animate">INTEREST</h2>
                <p class="about_para animate">Bias & Fairness in AI, Deep Learning Based Speech Systems, Reinforcement Learning </p>
            </div>
            <div class="para animate">
                <h2 class="head animate">Research</h2>
                <p class="about_para animate"> Robustness analysis in deep learning models. Structured noise–based parameterization methods for Speech models </p>
            </div>
            <div class="para animate ">
                <h2 class="head animate">SKILLS</h2>
                <p class="about_para animate">
                PyTorch, Hugging Face, scikit-learn, model fine-tuning, regularization, loss design, CNNs, Transformers, Linux, Git</p>
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

    const container19 = document.createElement("div");
    document.querySelector(".pub").appendChild(container19);
    for (const item of pubArray) {
        await addItem(item, container19, 150);
    }

    const container20 = document.createElement("div")
    document.querySelector(".pub_body").appendChild(container20)
    container20.innerHTML=`
        <h2 class="pubHead">Regulating Internal Evidence Flows for Robust Learning Under Spurious Correlations </h2>
        <h4 class="pubText">
        Accepted at ICLR 2026
        <h2 class="pubHead"> Robustness to Skin Type Using Fused Upweighting </h2>
        <h4 class="pubText">
        Submitted to MICCAI 2026
        <h2 class="pubHead"> Hyperparameter Strategies for Noise-Robust Speech-to-Text </h2>
        <h4 class="pubText">
        Submitted to ACL ARR 2026
        </h4>`

    container20.style.marginBottom = "4vh";
    
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
            <h2 class="workHead">IIT Roorkee </h2>
            <p class="workPara"> Jan '25 - Present • Remote</p>
            <h4 class="workText">
            ◦ Improved robustness of speech-to-text models under real-world noise using a controllable procedural noise simulator and PSD-based spectral analysis.
            <br>
            ◦ Conducted large-scale robustness experiments with real and synthetic noise across clean and noisy acoustic conditions.
            <br>
            ◦ Proposed a structured hyperparameter tuning and evaluation framework to quantify stability and robustness across environments.
            </h4>
        </div>
    </div>`

    container17.style.marginBottom = "4vh";

    const container18 = document.createElement("div")
    document.querySelector(".workBody").appendChild(container18)
    container18.innerHTML=`
    <div class="workBody">
        <div class="workbody">
            <h2 class="workHead"> VisDom Lab, IISER Bhopal </h2>
            <p class="workPara"> March '25 - Present • On Site</p>
            <h4 class="workText">
            ◦ Conducted research on fairness in deep learning, including bias ranking–based debiasing, fairness analysis of the Descript Audio Codec (DAC), and fairness-aware coreset selection.
            <br>
            ◦ Proposed Evidence-Gated Suppression (EGS), a regularizer that suppresses class-conditional neuron evidence to improve worst-group robustness without group labels.
            <br>
            ◦ Developed a hardness- and group-aware reweighting framework to improve fairness and robustness in dermatology image classification across Fitzpatrick skin types.
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

    /* ===== Internships Carousel ===== */

    // 1) Data for each internship (edit/add freely)
    const internshipsData = [
    {
    org: "IBM Research × IIT Roorkee",
    dates: "Aug '25 – Present • Remote",
    bullets: [
        "1. Advanced speech-centric LLMs for multilingual and low-resource settings.",
        "2. Investigated retrieval-augmented and knowledge-integrated methods to enhance robustness and translation quality.",
        "3. Explored architectural trade-offs between efficiency and scalability in speech LLM pipelines.",
        "",
        "• Strengthened expertise in speech processing, multilingual NLP, and large-scale model training.",
        "• Acquired skills in Hugging Face Transformers, PyTorch Lightning, and distributed training workflows."
    ]
    },
    {
        org: "VisDom Lab, IISER Bhopal",
        dates: "Mar '25 – Present • On Site",
        bullets: [
            "1. Analyzed fairness in deep learning with a focus on SEBRA under label noise.",
            "2. Studied bias propagation in ParlerTTS and applied coreset selection for fairness-aware training.",
            "3. Authored a first-author research paper on regularization strategies for robust generalization under distribution shifts.",
            "",
            "• Gained expertise in bias/fairness evaluation frameworks and fairness-driven optimization.",
            "• Built strong skills in PyTorch, data-centric AI, and empirical ML research practices."
        ]
    },
    {
        org: "IIT Roorkee",
        dates: "Jan '25 – Jul '25 • Remote",
        bullets: [
            "1. Researched robustness of speech-to-text models under real-world noisy acoustic conditions.",
            "2. Designed and implemented a structured hyperparameter tuning framework to evaluate noise robustness.",
            "3. Proposed a novel evaluation protocol for measuring stability across diverse environments.",
            "",
            "• Strengthened skills in speech recognition, signal processing, and experimental design.",
            "• Acquired proficiency in Kaldi/ESPnet, model fine-tuning, and acoustic feature engineering."
        ]
    },
    {
        org: "Personifwy",
        dates: "March '24 - May '24 (2 months) • Remote",
        bullets: [
        "Projects:",
        "1. Engineered a Hate Speech Detection system using Decision Tree with 88% accuracy.",
        "2. Developed a Spam SMS Classifier with Naive Bayes; reduced unsolicited message complaints.",
        "3. Conducted comprehensive credit EDA to optimize risk assessment and understand creditworthiness.",
        "",
        "• Cleaned & analyzed datasets using NumPy, pandas, matplotlib, seaborn, re, scikit-learn.",
        "• Leveraged multiple in-built ML models to build these projects."
        ]
    },
    {
        org: "MOON Lab, IISER Bhopal",
        dates: "Dec '24 - Jan '25 • On Site",
        bullets: [
        "1. Explored core concepts in Computer Vision, with a focus on OpenVINS, MSKCF, and SLAM algorithms.",
        "2. Studied the mathematical foundations of sensor fusion, emphasizing probabilistic estimation methods.",
        "3. Implemented Visual Odometry on the KITTI dataset, validating theoretical understanding through practice.",
        "",
        "• Developed proficiency in computer vision libraries and tools such as OpenCV, NumPy, and Matplotlib.",
        "• Strengthened skills in algorithmic thinking and applied linear algebra for perception and robotics tasks."
        ]
    }

    // add more entries here as needed…
    ];

    // 2) Build the carousel shell in the DOM
    const internSection = document.querySelector(".internBody");
    const wrap = document.createElement("div");
    wrap.className = "internship-wrap";
    wrap.innerHTML = `
    <button class="intern-nav intern-prev" aria-label="Previous internship">‹</button>
    <div id="internCard" class="intern-card"></div>
    <button class="intern-nav intern-next" aria-label="Next internship">›</button>
    `;
    internSection.appendChild(wrap);

    // 3) Render function
    let internIndex = 0;
    const internCard = document.getElementById("internCard");
    function renderInternship(i) {
    const it = internshipsData[i];
    const bulletsHTML = it.bullets
        .map(line => (line.trim() === "" ? "<br>" : `&nbsp;&nbsp;&nbsp;&nbsp;${line}`))
        .join("<br>");

    internCard.innerHTML = `
        <div class="internbody">
        <h2 class="internHead">${it.org}</h2>
        <p class="internPara">${it.dates}</p>
        <h4 class="internTxt">${bulletsHTML}</h4>
        </div>
    `;
    }
    renderInternship(internIndex);

    // 4) Navigation (loops)
    const prevBtnIntern = wrap.querySelector(".intern-prev");
    const nextBtnIntern = wrap.querySelector(".intern-next");
    prevBtnIntern.addEventListener("click", () => {
    internIndex = (internIndex - 1 + internshipsData.length) % internshipsData.length;
    renderInternship(internIndex);
    });
    nextBtnIntern.addEventListener("click", () => {
    internIndex = (internIndex + 1) % internshipsData.length;
    renderInternship(internIndex);
    });

    // 5) Optional: keyboard + swipe
    window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") prevBtnIntern.click();
    if (e.key === "ArrowRight") nextBtnIntern.click();
    });
    let touchStartXIntern = null;
    internCard.addEventListener("touchstart", (e) => touchStartXIntern = e.changedTouches[0].clientX, {passive:true});
    internCard.addEventListener("touchend", (e) => {
    if (touchStartXIntern == null) return;
    const dx = e.changedTouches[0].clientX - touchStartXIntern;
    if (Math.abs(dx) > 50) (dx > 0 ? prevBtnIntern : nextBtnIntern).click();
    touchStartXIntern = null;
    }, {passive:true});
    /* ===== End Internships Carousel ===== */

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
            <a href="Resume.pdf" target="_blank">
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
            <a target="__blank"href="https://x.com/m_niramay">
                <img class="twitterImg"src="icons8-twitter.svg" alt="twitter">
            </a>
        </div>`
})();
