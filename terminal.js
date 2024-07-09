const delay = (delay_time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, delay_time);
    });
};

const addItem = async (item) => {
    await delay(1500);
    let div = document.createElement("div");
    div.innerHTML = item + ' <span class="blinking-dots"></span>';
    document.querySelector(".terminal_content").appendChild(div);
};

let text = [
    "Welcome",
    "Hi,I am Niramay Patel",
    "This is the landing page",
    `Type help to run the terminal `,
];

(async () => {
    for (const item of text) {
        await addItem(item);
    }
})();

document.getElementById('terminalInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const input = e.target.value;
        if (input.trim() !== '') {
            const userDiv = document.createElement("div");
            userDiv.innerHTML = `<span>$ ${input}</span>`;
            document.querySelector(".terminal_content").appendChild(userDiv);
            e.target.value = '';
            // Add any specific command handling here
            if (input.toLowerCase() === 'help') {
                addItem('Available commands: help, about, portfolio, contact');
            } else if (input.toLowerCase() === 'about') {
                addItem('I am a tech enthusiast and research addict specializing in AI, ML, robotics, and computer vision');
            } else if (input.toLowerCase() === 'portfolio') {
                addItem('Portfolio link: <a target="__blank"href="https://portfolio-y344.onrender.com//portfolio.html">Link</a>');
            } else if (input.toLowerCase() === 'contact') {
                addItem('Contact: LinkedIn - <a <a target="__blank" href="https://www.linkedin.com/in/niramay-patel-481a08288/">Link</a>');
            } else {
                addItem("Let's build something amazing together!");
            }
        }
    }
});
