 <title>My School Portfolio</title>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
  <style>
    * {
      margin: 0; padding: 0;
      box-sizing: border-box;
      font-family: 'Montserrat', sans-serif;
    }

 body {
 background: linear-gradient(-45deg, #4A90E2, #50E3C2, #7ED6DF, #2F80ED);
  background-size: 400% 400%;
  animation: gradientAnimation 15s ease infinite;
  color: white;
  font-family: 'Montserrat', sans-serif;
  line-height: 1.6;
  scroll-behavior: smooth;
  text-shadow:none;
}
nav ul li a {
 color: #222;
  font-weight: 600;
  transition: color 0.3s;
}

nav ul li a:hover {
  color: #ffd700; 
}

   
    nav {
      background-color: #333;
      padding: 15px 0;
      position: sticky;
      top: 0;
      z-index: 1000;
    }
    nav ul {
      display: flex;
      list-style: none;
      justify-content: center;
      gap: 30px;
    }
    nav ul li a {
      color: white;
      text-decoration: none;
      font-weight: 600;
      transition: color 0.3s;
    }
    nav ul li a:hover {
      color: #4A90E2;
    }

    header {
      background-color: #4A90E2;
      color: white;
      padding: 60px 20px;
      text-align: center;
    }

    section {
  color: black;  
  padding: 40px 20px;
  max-width: 900px;
  margin: 40px auto;
  background-color: #fff; /* ruajmë background të bardhë */
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}


    h2 {
      margin-bottom: 20px;
      color: #4A90E2;
      border-bottom: 2px solid #4A90E2;
      display: inline-block;
      padding-bottom: 5px;
    }

    .project, .education, .skill {
      background-color: #fff;
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 20px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }

    
    #about > div {
      display: flex;
      align-items: center;
      gap: 20px;
      flex-wrap: wrap;
    }
    #about img {
      width: 200px;
      border-radius: 12px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }
    #about p {
      max-width: 600px;
      font-size: 1.1rem;
    }

    
    #skills {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
    }
    .skill {
      flex: 1 1 150px;
      background-color: #fff;
      border-radius: 8px;
      padding: 15px;
      text-align: center;
      font-weight: 600;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }

    footer {
      background-color: #333;
      color: white;
      text-align: center;
      padding: 20px;
      margin-top: 40px;
    }

    a {
      color: #4A90E2;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }

   
    @media (max-width: 600px) {
      #about > div {
        flex-direction: column;
        align-items: center;
      }
      #about p {
        max-width: 100%;
      }
      nav ul {
        flex-direction: column;
        gap: 10px;
      }
      #skills {
        flex-direction: column;
      }
    }
  </style>
</head>
<body>

  <nav>
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#education">Education</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <header>
    <h1>Hello, I'm Bleon!</h1>
    <p>Welcome to my school portfolio</p>
  </header>

  <section id="about">
    <h2>About Me</h2>
    <div>
   <a href='https://postimg.cc/qN6sQBs0' target='_blank'><img src='https://i.postimg.cc/qN6sQBs0/bleon.jpg' border='0' alt='bleon'/></a>
      <p>
        I'm Bleon Krasniqi, a student passionate about technology, web development, and personal growth.
        This portfolio showcases my journey through school, my projects, and the skills I’ve developed.
        I believe in learning by doing, and I'm always looking for new challenges!
      </p>
    </div>
  </section>

  <section id="projects">
    <h2>My Projects</h2>
    <div class="project">
      <h3>Project 1: Simple Web Page</h3>
      <p>I built a simple responsive web page using HTML and CSS.</p>
    </div>
    <div class="project">
      <h3>Project 2: JavaScript Calculator</h3>
      <p>A basic calculator made with HTML, CSS, and JavaScript.</p>
    </div>
  </section>

 
<section id="education">
  <h2>Education</h2>

  <div class="education">
    <h3>
      <a href="#" id="openModalUBT" style="color: #4A90E2; text-decoration: none; cursor: pointer;">
        UBT – Sistemet Informative
      </a>
    </h3>
    <p>2022 - Present</p>
  </div>

  <div class="education">
    <h3>
      <a href="#" id="openModalHighSchool" style="color: #4A90E2; text-decoration: none; cursor: pointer;">
        Shkolla e Mesme – Telekomunikacion
      </a>
    </h3>
    <p>2018 - 2022</p>
  </div>
</section>
<div id="modalUBT" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background: rgba(0,0,0,0.6); justify-content:center; align-items:center; z-index: 2000;">
  <div style="background:white; color:#333; max-width:700px; width:90%; padding:30px; border-radius:10px; position:relative; max-height:80vh; overflow-y:auto;">
    <button id="closeModalUBT" style="position:absolute; top:15px; right:15px; background:#4A90E2; color:white; border:none; padding:8px 12px; border-radius:5px; cursor:pointer;">Close ✕</button>
    <h2>UBT – Sistemet Informative</h2>
    <p>Gjatë studimeve kam përfituar njohuri në:</p>
    <ul>
      <li>Programim në Java, Python, JavaScript</li>
      <li>Bazat e të dhënave (SQL, MongoDB)</li>
      <li>Rrjete kompjuterike dhe sisteme operative</li>
      <li>Analizë e sistemeve dhe zhvillim projektesh</li>
      <li>Siguri informatike dhe teknologji moderne</li>
    </ul>
  </div>
</div>

<div id="modalHighSchool" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background: rgba(0,0,0,0.6); justify-content:center; align-items:center; z-index: 2000;">
  <div style="background:white; color:#333; max-width:700px; width:90%; padding:30px; border-radius:10px; position:relative; max-height:80vh; overflow-y:auto;">
    <button id="closeModalHighSchool" style="position:absolute; top:15px; right:15px; background:#4A90E2; color:white; border:none; padding:8px 12px; border-radius:5px; cursor:pointer;">Close ✕</button>
    <h2>Shkolla e Mesme – Telekomunikacion</h2>
    <p>Gjatë kësaj periudhe jam fokusuar në:</p>
    <ul>
      <li>Elektronikë dhe sinjale analoge/dixhitale</li>
      <li>Rrjete dhe fibra optike</li>
      <li>Sistemet GSM/UMTS dhe komunikimi mobile</li>
      <li>Laborator teknik dhe pajisje të komunikimit</li>
      <li>Trajnime shtesë për pajisje moderne të telekomit</li>
    </ul>
  </div>
</div>


 <section id="skills">
  <h2>Skills</h2>
  <a href="#" id="openSkillHtml" class="skill-link">HTML & CSS</a>
  <a href="#" id="openSkillJs" class="skill-link">JavaScript</a>
  <a href="#" id="openSkillResponsive" class="skill-link">Responsive Design</a>
  <a href="#" id="openSkillGit" class="skill-link">Basic Git & GitHub</a>
</section>

<div id="modalHtml" style="display:none; position: fixed; top:0; left:0; width:100%; height:100%; background: rgba(0,0,0,0.6); justify-content: center; align-items: center; z-index: 2000;">
  <div style="background: white; color: #333; max-width: 600px; width: 90%; padding: 30px; border-radius: 10px; position: relative; max-height: 80vh; overflow-y: auto;">
    <button id="closeModalHtml" style="position: absolute; top: 15px; right: 15px; background: #4A90E2; color: white; border: none; padding: 8px 12px; border-radius: 5px; cursor: pointer; font-size: 16px;">Close ✕</button>
    <h3>HTML & CSS</h3>
    <ul>
      <li>Semantic HTML5</li>
      <li>CSS Flexbox & Grid</li>
      <li>Responsive Layouts</li>
      <li>Tailwind CSS</li>
      <li>Animations & Transitions</li>
    </ul>
  </div>
</div>

<div id="modalJs" style="display:none; position: fixed; top:0; left:0; width:100%; height:100%; background: rgba(0,0,0,0.6); justify-content: center; align-items: center; z-index: 2000;">
  <div style="background: white; color: #333; max-width: 600px; width: 90%; padding: 30px; border-radius: 10px; position: relative; max-height: 80vh; overflow-y: auto;">
    <button id="closeModalJs" style="position: absolute; top: 15px; right: 15px; background: #4A90E2; color: white; border: none; padding: 8px 12px; border-radius: 5px; cursor: pointer; font-size: 16px;">Close ✕</button>
    <h3>JavaScript</h3>
    <ul>
      <li>DOM Manipulation</li>
      <li>ES6+ Syntax</li>
      <li>Async/Await, Fetch API</li>
      <li>Event Handling</li>
      <li>LocalStorage</li>
    </ul>
  </div>
</div>

<div id="modalResponsive" style="display:none; position: fixed; top:0; left:0; width:100%; height:100%; background: rgba(0,0,0,0.6); justify-content: center; align-items: center; z-index: 2000;">
  <div style="background: white; color: #333; max-width: 600px; width: 90%; padding: 30px; border-radius: 10px; position: relative; max-height: 80vh; overflow-y: auto;">
    <button id="closeModalResponsive" style="position: absolute; top: 15px; right: 15px; background: #4A90E2; color: white; border: none; padding: 8px 12px; border-radius: 5px; cursor: pointer; font-size: 16px;">Close ✕</button>
    <h3>Responsive Design</h3>
    <ul>
      <li>Media Queries</li>
      <li>Mobile-first Design</li>
      <li>Flexible layouts</li>
      <li>Viewport Units</li>
      <li>Grid/Flex Adaptation</li>
    </ul>
  </div>
</div>

<div id="modalGit" style="display:none; position: fixed; top:0; left:0; width:100%; height:100%; background: rgba(0,0,0,0.6); justify-content: center; align-items: center; z-index: 2000;">
  <div style="background: white; color: #333; max-width: 600px; width: 90%; padding: 30px; border-radius: 10px; position: relative; max-height: 80vh; overflow-y: auto;">
    <button id="closeModalGit" style="position: absolute; top: 15px; right: 15px; background: #4A90E2; color: white; border: none; padding: 8px 12px; border-radius: 5px; cursor: pointer; font-size: 16px;">Close ✕</button>
    <h3>Basic Git & GitHub</h3>
    <ul>
      <li>Git init, add, commit</li>
      <li>Push / Pull / Merge</li>
      <li>Branching</li>
      <li>Resolving Conflicts</li>
      <li>GitHub Pages Deployment</li>
    </ul>
  </div>
</div>

<style>
  .skill-link {
    color: #4A90E2;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    padding: 10px 15px;
    border-radius: 6px;
    margin: 5px 10px 15px 0;
  }

  .skill-link:hover {
    color: #2f66cc;
    text-decoration: underline;
  }
</style>

<section id="contact">
  <h2>Contact</h2>
  <p>You can reach me via email: <a href="mailto:Krasniqibleon75@gmail.com">Krasniqibleon75@gmail.com</a></p>

  <form id="contact-form" style="max-width: 600px; margin-top: 20px;">
    <label for="name">Name:</label><br />
    <input type="text" name="user_name" required placeholder="Your Name" style="width: 100%; padding: 8px; margin-bottom: 10px;" />

    <label for="email">Email:</label><br />
    <input type="email" name="user_email" required placeholder="Your Email" style="width: 100%; padding: 8px; margin-bottom: 10px;" />

    <label for="message">Message:</label><br />
    <textarea name="message" required placeholder="Your Message" rows="5" style="width: 100%; padding: 8px; margin-bottom: 10px;"></textarea>

    <button type="submit" style="background-color: #4A90E2; color: white; border: none; padding: 12px 20px; border-radius: 4px; cursor: pointer;">
      Send Message
    </button>
  </form>

  <div id="status-message" style="margin-top:10px; font-weight: 600;"></div>
</section>



  <div id="status-message" style="margin-top:10px; font-weight: 600;"></div>
</section>

<script src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>
<script>
  emailjs.init("tkOt9CRcwAN5IWqCn");

  const form = document.getElementById('contact-form');
  const statusMsg = document.getElementById('status-message');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_91t1a19', 'template_lmtt19s', this)
      .then(() => {
        statusMsg.style.color = 'green';
        statusMsg.textContent = 'Message sent successfully!';
        form.reset();
      }, (error) => {
        statusMsg.style.color = 'red';
        statusMsg.textConten


  <footer>
    &copy; 2025 Bleon Krasniqi. All rights reserved.
  </footer>

  </body><script src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>
<script>
  // EmailJS Setup
  (function() {
    emailjs.init("tkOt9CRcwAN5IWqCn");

    const form = document.getElementById("contact-form");
    const statusMsg = document.getElementById("status-message");

    form.addEventListener("submit", function(event) {
      event.preventDefault();
      emailjs.sendForm("service_91t1a19", "template_lmtt19s", this)
        .then(function() {
          statusMsg.textContent = "Mesazhi u dërgua me sukses!";
          statusMsg.style.color = "green";
          form.reset();
        }, function(error) {
          statusMsg.textContent = "Dështoi dërgimi. Kontrollo lidhjen ose të dhënat.";
          statusMsg.style.color = "red";
        });
    });
  })();

  // Modalet për Skills
  const modals = [
    { btn: 'openSkillHtml', modal: 'modalHtml', close: 'closeModalHtml' },
    { btn: 'openSkillJs', modal: 'modalJs', close: 'closeModalJs' },
    { btn: 'openSkillResponsive', modal: 'modalResponsive', close: 'closeModalResponsive' },
    { btn: 'openSkillGit', modal: 'modalGit', close: 'closeModalGit' },
  ];

  modals.forEach(({ btn, modal, close }) => {
    const openBtn = document.getElementById(btn);
    const modalEl = document.getElementById(modal);
    const closeBtn = document.getElementById(close);

    if (openBtn && modalEl && closeBtn) {
      openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modalEl.style.display = 'flex';
      });

      closeBtn.addEventListener('click', () => {
        modalEl.style.display = 'none';
      });

      window.addEventListener('click', (e) => {
        if (e.target === modalEl) {
          modalEl.style.display = 'none';
        }
      });
    }
  });

  // Modalet për Education
  const openModalUBT = document.getElementById('openModalUBT');
  const modalUBT = document.getElementById('modalUBT');
  const closeModalUBT = document.getElementById('closeModalUBT');

  if (openModalUBT && modalUBT && closeModalUBT) {
    openModalUBT.addEventListener('click', e => {
      e.preventDefault();
      modalUBT.style.display = 'flex';
    });
    closeModalUBT.addEventListener('click', () => {
      modalUBT.style.display = 'none';
    });
    window.addEventListener('click', e => {
      if (e.target === modalUBT) {
        modalUBT.style.display = 'none';
      }
    });
  }

  const openModalHighSchool = document.getElementById('openModalHighSchool');
  const modalHighSchool = document.getElementById('modalHighSchool');
  const closeModalHighSchool = document.getElementById('closeModalHighSchool');

  if (openModalHighSchool && modalHighSchool && closeModalHighSchool) {
    openModalHighSchool.addEventListener('click', e => {
      e.preventDefault();
      modalHighSchool.style.display = 'flex';
    });
    closeModalHighSchool.addEventListener('click', () => {
      modalHighSchool.style.display = 'none';
    });
    window.addEventListener('click', e => {
      if (e.target === modalHighSchool) {
        modalHighSchool.style.display = 'none';
      }
    });
  }
</script>