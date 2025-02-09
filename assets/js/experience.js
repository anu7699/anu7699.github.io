AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Graduate Research Assistant",
    cardImage: "assets/images/experience-page/uiuc.jpeg",
    place: "University of Illinois, Urbana-Champaign",
    time: "(Sep, 2024 - Present)",
    desp: "<li>Collaborating with National Center of Super-computing Applications (NCSA) on the AI-FARMS project.</li><li>Leveraging YoloV8 + LSTM to perform real-time activity level detection of pigs using live-feed from the farm.</li><li>Part of the ongoing research on coordinate based behavior prediction of pre-wean pigs using computer vision and machine learning techniques.</li>",
  },
  {
    title: "Software Engineering Intern",
    cardImage: "assets/images/experience-page/confluent.jpeg",
    place: "Confluent",
    time: "(May, 2024 - Aug, 2024)",
    desp: "<li>Worked with the Experience & Interface Team, primarily using Python, SQL, Google BigQuery and Superset.</li><li>Partnered with cross-functional teams to develop an extensive alerting system for UX metrics.</li><li>Extended Apache Superset to develop a smart and robust alerting framework around user-experience metrics, capable of detecting anomalous trends using statistical and machine learning techniques.</li>",
  },
  {
    title: "Quantitative Strategist",
    cardImage: "assets/images/experience-page/gs.png",
    place: "Goldman Sachs",
    time: "(Jul, 2021 - Dec, 2023)",
    desp: "<li>Worked with the Systematic Volatility Trading Team (Global Markets) primarily in Java, Python and Slang.</li><li>Developed an algorithm to compute stock volatility values outside market hours and a Java service for real-time pricing, reducing Vol-Arb losses by ~52%.</li><li>Developed a Kafka-based service for real-time volatility fit-quality data, projecting annual savings of ~12 million USD.</li>",
  },
  {
    title: "Senior Software Engineer",
    cardImage: "assets/images/experience-page/samsung.jpeg",
    place: "Samsung Semiconductors",
    time: "(Aug, 2020 - Jul, 2021)",
    desp: "<li>Worked with Advanced Sensor Algorithms Development and Research Team, primarily in C++ and Python.</li><li>Developed an end-to-end pipeline for 3D scene reconstruction from scratch, generating 3D surface models from PointClouds and RGB images.</li><li>Enhanced performance using OpenMP multithreading and OpenCL GPGPU programming.</li>",
  },
];


const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "GirlScript Summer Of Code 2020",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
  {
    title: "StudentCode-in 2020",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "PClub Summer Of Code 2020",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  },
  {
    title: "Hakin-Codes",
    cardImage: "assets/images/experience-page/4.jpg",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "NASA Space Apps Challenge 2024 (Chicago)",
    subtitle: "Participant",
    image: "assets/images/experience-page/nasa.png",
    desp: "<li>Designed an AIC(Akaike Information Criterion) based algorithm to analyze real data from the Apollo missions and the Mars InSight Lander to identify seismic quakes within the noise.</li>",
    href: "https://drive.google.com/file/d/1pAAZOgassDsn7JpqBzLdBOQa1vmABdQ9/view?usp=sharing",
  },
  {
    title: "GS Accelerate Hackathon, India Engineering Expo 2022",
    subtitle: "First Runner Up",
    image: "assets/images/experience-page/gs.png",
    desp: "<li>Analyzed the trade data of Secondary Loans trading and identified major factors contributing to increased trade settlement time.</li><li>Developed a model to predict the settlement time of a given trade, accurately upto 5 days.</li>",
    href: "https://www.goldmansachs.com/",
  },
  {
    title: "Smart India Hackathon 2019",
    subtitle: "First Runner Up, National Finalist",
    image: "assets/images/experience-page/sih.jpg",
    desp: "<li>Developed an automated system for extracting and analyzing CCTV camera footage to extract crowd density and flow, detect unauthorized persons and monitor crowd behavior.</li>",
    href: "https://www.sih.gov.in/sih2019",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400">
        <div class="card card1">
          <img src="${image}" class="featured-image"/>
          <article class="card-body">
            <header>
              <div class="title">
                <h3>${title}</h3>
              </div>
              <p class="meta">
                <span class="pre-heading">${subtitle}</span>
              </p>
              <ol>
                ${desp}
              </ol>
              <a href="${href}" class="blog-slider__button">Read More</a>
            </header>
          </article>
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
