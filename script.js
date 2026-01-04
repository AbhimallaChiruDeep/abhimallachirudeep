/* ================================================================
   USER DATA CONFIGURATION
   Update this section when you learn new skills or get a new job.
================================================================
*/
const userData = {
    details: {
        name: "Abhimalla Chiru Deep",
        role: "Data Analytics | Artificial Intelligence | Machine Learning | Software Development",
        phone: "+91 8374671447",
        email: "chirudeep0606@gmail.com", // <--- UPDATE THIS
        linkedin: "https://www.linkedin.com/in/abhimalla-chiru-deep-b76545161/", // <--- UPDATE THIS
        github: "https://github.com/AbhimallaChiruDeep",

        about: "I am seeking a challenging and learning-oriented position where I can leverage my strengths in data analysis and software development to extract meaningful insights and build efficient, scalable solutions. Currently expanding capabilities in software development with hands-on experience in ML Data Operations. A quick learner adaptable to new technologies."
    },
    skills: [
        "Python", "SQL", "Tableau", "Java (Beginner)", "Excel",
        "Machine Learning", "Object Detection (YOLO)", "TensorFlow", "OpenCV",
        "Data Analysis", "Time Series Forecasting", "Pandas & NumPy",
        "Flask & Streamlit", "Automation (Zapier, n8n)", "Generative AI Awareness"
    ],
    experience: [
        {
            role: "Associate, ML Data Operations",
            company: "Amazon (Remote)",
            date: "June 2025 - Present",
            desc: [
                "Analyzed and audited large volumes of short video/image data to verify object placement and accuracy.",
                "Applied data labeling and quality validation for AI/ML automation systems.",
                "Maintained high productivity standards in a 24x7 operational environment."
            ]
        },
        {
            role: "Data Science Intern",
            company: "Prodian Infotech Private Limited",
            date: "Oct 2024 - April 2025",
            desc: [
                "Researched Object Detection using OpenCV, TensorFlow, and Ultralytics.",
                "Developed a custom YOLO model for video object tracking using Roboflow.",
                "Explored automation tools like Make.com and n8n to optimize workflows."
            ]
        },
        {
            role: "Data Science Intern",
            company: "AI VARIANT",
            date: "April 2024 - Sept 2024",
            desc: [
                "Conducted EDA and preprocessed data using Standard Scaling.",
                "Built predictive models (Gradient Boosting, XGBoost, SARIMA) for regression and forecasting.",
                "Deployed models using Flask and Streamlit for real-time analysis."
            ]
        },
        {
            role: "US IT Recruiter",
            company: "Fixity Technologies Pvt Ltd",
            date: "Oct 2021 - March 2023",
            desc: [
                "Handled full-cycle IT recruitment for U.S. roles (W2, C2C, H1B).",
                "Recognized as 'Marvel of the Quarter' for performance."
            ]
        }
    ],
    projects: [
        {
            title: "Gold Price Prediction",
            tech: "ARIMA, SARIMA, Time Series",
            desc: "Developed a predictive model to forecast gold prices for the next 30 days. Conducted decomposition to analyze trends and seasonality."
        },
        {
            title: "Energy Production Prediction",
            tech: "Regression, XGBoost, Streamlit",
            desc: "Built a regression model to predict energy production efficiency. Deployed via Streamlit for real-time predictions."
        },
        {
            title: "Object Detection in Videos",
            tech: "YOLO, OpenCV, Roboflow",
            desc: "Implemented a system to track and identify objects in video frames. Trained a custom model using Roboflow."
        }
    ],
    education: [
        {
            degree: "B.Tech in Mechanical Engineering",
            school: "Gokaraju Rangaraju Institute of Engineering & Technology",
            year: "2017 - 2021"
        },
        {
            degree: "Data Science Certification",
            school: "ExcelR Institute",
            year: "Completed"
        }
    ]
};

/* ================================================================
   RENDER CONTENT TO HTML
   This logic takes the data above and puts it into the website.
================================================================
*/

// 1. Initialize Contact Info
document.getElementById('phone-display').innerText = userData.details.phone;
document.getElementById('phone-link').href = "tel:" + userData.details.phone;
document.getElementById('email-display').innerText = userData.details.email;
document.getElementById('email-link').href = "mailto:" + userData.details.email;
document.getElementById('linkedin-link').href = userData.details.linkedin;
document.getElementById('github-link').href = userData.details.github;

// 2. Typewriter Effect for Hero
const typeWriterText = userData.details.role;
const typeWriterElement = document.getElementById('typing-text');
let i = 0;
function typeWriter() {
    if (i < typeWriterText.length) {
        typeWriterElement.innerHTML += typeWriterText.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}
window.onload = typeWriter;

// 3. Render About
document.getElementById('about-content').innerHTML = `<p>${userData.details.about}</p>`;

// 4. Render Skills
const skillsContainer = document.getElementById('skills-container');
userData.skills.forEach(skill => {
    const span = document.createElement('span');
    span.className = 'skill-tag';
    span.innerText = skill;
    skillsContainer.appendChild(span);
});

// 5. Render Experience
const expContainer = document.getElementById('experience-container');
userData.experience.forEach(job => {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    
    // Create list items for description
    let listHTML = '';
    job.desc.forEach(point => listHTML += `<li>${point}</li>`);

    item.innerHTML = `
        <h3 class="job-role">${job.role}</h3>
        <h4 class="job-company">${job.company}</h4>
        <span class="job-date">${job.date}</span>
        <ul class="job-desc">${listHTML}</ul>
    `;
    expContainer.appendChild(item);
});

// 6. Render Projects
const projContainer = document.getElementById('projects-container');
userData.projects.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <h3 class="project-title">${proj.title}</h3>
        <span class="project-tech">[ ${proj.tech} ]</span>
        <p class="project-desc">${proj.desc}</p>
    `;
    projContainer.appendChild(card);
});

// 7. Render Education
const eduContainer = document.getElementById('education-container');
userData.education.forEach(edu => {
    const div = document.createElement('div');
    div.style.marginBottom = "1rem";
    div.innerHTML = `
        <h3 style="color:var(--text-primary)">${edu.degree}</h3>
        <p style="color:var(--accent-cyan)">${edu.school}</p>
        <span style="color:#888; font-size:0.9rem">${edu.year}</span>
    `;
    eduContainer.appendChild(div);
});


/* ================================================================
   NEURAL NETWORK BACKGROUND ANIMATION (CANVAS)
   Creates the brain/network connecting lines effect.
================================================================
*/
const canvas = document.getElementById('neuralCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray;

// Handle Resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});

// Particle Class
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.directionX = (Math.random() * 0.4) - 0.2; // Slow movement
        this.directionY = (Math.random() * 0.4) - 0.2;
        this.size = Math.random() * 2 + 1;
        this.color = '#00f3ff';
    }

    // Method to draw individual particle
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    // Check particle position, move particle, draw particle
    update() {
        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
        if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;

        this.x += this.directionX;
        this.y += this.directionY;

        this.draw();
    }
}

// Create particle array
function init() {
    particlesArray = [];
    let numberOfParticles = (canvas.height * canvas.width) / 9000; // Density
    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
    }
}

// Connect particles with lines
function connect() {
    let opacityValue = 1;
    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
            let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) + 
                           ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
            
            if (distance < (canvas.width/7) * (canvas.height/7)) {
                opacityValue = 1 - (distance / 20000);
                ctx.strokeStyle = 'rgba(0, 243, 255,' + opacityValue + ')';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
    }
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
    }
    connect();
}

init();
animate();