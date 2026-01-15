const jobData = {
  "AI & Machine Learning Engineer": {
    intro:
      "We are looking for an AI & Machine Learning Engineer to design, develop, and deploy intelligent systems that drive business automation and innovation.",
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

