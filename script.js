const jobData = {
  "AI Engineer": {
    intro:
      "We are looking for an AI Engineer to design, develop, and deploy intelligent systems that drive business automation and innovation.",
    responsibilities: [
      "Design and implement machine learning models and AI solutions",
      "Work with large datasets to build predictive models",
      "Collaborate with product and engineering teams",
      "Optimize and maintain ML pipelines in production",
      "Research and apply new AI techniques"
    ],
    skills: [
      "Strong knowledge of Python and ML libraries (TensorFlow, PyTorch, Scikit-learn)",
      "Experience with data preprocessing and model evaluation",
      "Understanding of algorithms, statistics, and data structures",
      "Experience with cloud platforms is a plus",
      "Strong problem-solving skills"
    ]
  },

  "Full Stack Developer": {
  intro:
    "As a Full Stack Developer, you will work on both frontend and backend systems to build scalable, high-performance web applications.",
  responsibilities: [
    "Develop responsive frontend interfaces using modern frameworks",
    "Build and maintain backend APIs and services",
    "Integrate databases and third-party services",
    "Ensure application performance, security, and scalability",
    "Collaborate with designers, QA, and product teams"
  ],
  skills: [
    "Strong knowledge of HTML, CSS, JavaScript",
    "Experience with React / Angular / Vue",
    "Backend experience with Node.js / Python / Java",
    "Database knowledge (SQL / NoSQL)",
    "Version control using Git"
  ]
},

"Automation Testing Engineer": {
  intro:
    "We are looking for an Automation Testing Engineer to ensure software quality through automated testing frameworks and tools.",
  responsibilities: [
    "Design and develop automated test scripts",
    "Execute test cases and analyze results",
    "Identify, document, and track bugs",
    "Collaborate with developers to improve quality",
    "Maintain test automation frameworks"
  ],
  skills: [
    "Experience with Selenium / Cypress / Playwright",
    "Knowledge of Java / Python for automation",
    "Understanding of SDLC and STLC",
    "Experience with CI/CD pipelines",
    "Strong analytical skills"
  ]
},

"Data Scientist": {
  intro:
    "As a Data Scientist, you will apply advanced analytics, machine learning, and statistical techniques to solve complex business problems.",
  responsibilities: [
    "Analyze structured and unstructured data",
    "Build predictive and classification models",
    "Develop data-driven insights for stakeholders",
    "Collaborate with engineering and product teams",
    "Communicate findings using visualizations"
  ],
  skills: [
    "Strong Python / R programming skills",
    "Experience with machine learning algorithms",
    "Knowledge of statistics and probability",
    "Experience with data visualization tools",
    "Familiarity with big data tools is a plus"
  ]
},






  "Python Developer": {
    intro:
      "As a Python Developer, you will build scalable backend systems, APIs, and automation tools for data-driven applications.",
    responsibilities: [
      "Develop backend services and REST APIs using Python",
      "Integrate databases and third-party APIs",
      "Write clean, maintainable, and efficient code",
      "Debug and optimize application performance",
      "Collaborate with frontend and data teams"
    ],
    skills: [
      "Strong proficiency in Python",
      "Experience with Flask or Django",
      "Knowledge of SQL / NoSQL databases",
      "Understanding of RESTful APIs",
      "Basic understanding of cloud deployment"
    ]
  },

  "Data Analyst": {
    intro:
      "We are seeking a Data Analyst to transform raw data into actionable insights that support business decision-making.",
    responsibilities: [
      "Analyze large datasets to identify trends and patterns",
      "Create dashboards and reports for stakeholders",
      "Work closely with business teams to understand requirements",
      "Ensure data accuracy and consistency",
      "Present insights in a clear and concise manner"
    ],
    skills: [
      "Strong SQL and Excel skills",
      "Experience with Python or R",
      "Knowledge of Power BI / Tableau",
      "Strong analytical and problem-solving skills",
      "Good communication skills"
    ]
  },

"Data Engineer": {
  intro:
    "As a Data Engineer, you will design, build, and maintain scalable data pipelines and infrastructure that enable reliable data-driven insights across the organization.",
  responsibilities: [
    "Design and develop scalable ETL/ELT data pipelines",
    "Ingest, process, and transform large volumes of structured and unstructured data",
    "Build and maintain data warehouses and data lakes",
    "Ensure data quality, reliability, and performance",
    "Collaborate with data scientists and analysts to support analytics use cases"
  ],
  skills: [
    "Strong proficiency in Python, SQL, and data processing frameworks",
    "Experience with ETL tools and workflow orchestration",
    "Knowledge of data warehouses and big data technologies",
    "Experience with cloud platforms (AWS, Azure, or GCP)",
    "Understanding of data modeling and database optimization"
  ]
},



"Java Developer": {
  intro:
    "As a Java Developer, you will design and develop robust backend systems and enterprise-level applications.",
  responsibilities: [
    "Develop backend services using Java",
    "Design and maintain RESTful APIs",
    "Work with databases and ORM frameworks",
    "Optimize application performance",
    "Participate in code reviews and testing"
  ],
  skills: [
    "Strong proficiency in Java",
    "Experience with Spring / Spring Boot",
    "Knowledge of SQL databases",
    "Understanding of microservices architecture",
    "Experience with Git and CI/CD tools"
  ]
}


};

/* OPEN FULL SCREEN */
function openModal(jobTitle){
  document.getElementById("jobScreen").style.display = "flex";
  document.getElementById("jobTitle").innerText = jobTitle;
  document.getElementById("jobIntro").innerText = jobData[jobTitle].intro;

  const resList = document.getElementById("jobResponsibilities");
  resList.innerHTML = "";
  jobData[jobTitle].responsibilities.forEach(item => {
    resList.innerHTML += `<li>${item}</li>`;
  });

  const skillList = document.getElementById("jobSkills");
  skillList.innerHTML = "";
  jobData[jobTitle].skills.forEach(item => {
    skillList.innerHTML += `<li>${item}</li>`;
  });

  document.getElementById("jobThankYou").style.display = "none";
  document.getElementById("jobForm").style.display = "block";
}

/* CLOSE */
function closeJob(){
  document.getElementById("jobScreen").style.display = "none";
}

/* SUBMIT */
// document.getElementById("jobForm").addEventListener("submit", function(e){
//   e.preventDefault();
//   document.getElementById("jobForm").style.display = "none";
//   document.getElementById("jobThankYou").style.display = "block";
// });

document.getElementById("jobForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const fileInput = document.getElementById("resume");
  const file = fileInput.files[0];

  if (!file) {
    alert("Please upload your resume");
    return;
  }

  const formData = new FormData();
  formData.append("resume", file);
  formData.append(
    "job_title",
    document.getElementById("jobTitle").innerText
  );
  formData.append("source", "analytx4t.com careers");

  fetch("https://n8n.srv982383.hstgr.cloud/webhook/resume-data-parser", {
    method: "POST",
    body: formData
  })
    .then(response => {
      if (!response.ok) throw new Error("Webhook error");
      return response.text();
    })
    .then(() => {
      document.getElementById("jobForm").style.display = "none";
      document.getElementById("successBox").style.display = "block";
    })
    .catch(err => {
      alert("Resume upload failed");
      console.error(err);
    });
});

