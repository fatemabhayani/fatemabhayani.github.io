---
title: "Home"
layout: default
---

<section class="hero" id="home">
  <span class="kicker">Toronto, Canada</span>
  <h1>AI‑driven educator & researcher</h1>
  <div class="tagline">Applied AI/ML in education & finance · fairness & explainability · human‑AI collaboration</div>
  <div class="meta">
    <a class="cta" id="email-link" href="#" onclick="revealEmail('fatema.alibhayani','gmail.com');return false;">
      <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M4 4h16v16H4z"/><path d="M22 6l-10 7L2 6"/>
      </svg>
      <span>Reveal email</span>
    </a>
    <a href="https://www.linkedin.com/in/fatemabhayani/" class="cta" style="background:#0b1220" target="_blank" rel="noopener">
      <svg class="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0zM8 8h4.7v2.2h.1c.7-1.3 2.3-2.7 4.8-2.7 5.1 0 6 3.4 6 7.8V24h-5v-6.8c0-1.6 0-3.6-2.2-3.6-2.2 0-2.6 1.7-2.6 3.5V24H8z"/></svg>
      <span>LinkedIn</span>
    </a>
  </div>
</section>

<section class="section" id="research">
  <h2>Research Interests</h2>
  <div class="badges">
    <span class="badge">Adaptive learning systems</span>
    <span class="badge">AI‑powered assessment</span>
    <span class="badge">Intelligent tutoring</span>
    <span class="badge">Equity & fairness in edtech</span>
    <span class="badge">Algorithmic trading & risk modeling</span>
    <span class="badge">Fraud detection · explainability (finance)</span>
    <span class="badge">Trustworthy & uncertainty‑aware AI</span>
    <span class="badge">Human‑AI decision support</span>
    <span class="badge">Large‑scale data mining</span>
    <span class="badge">Fairness & explainability in high‑stakes domains</span>
    <span class="badge">AI for social good (health, climate, policy)</span>
  </div>
</section>

<section class="section" id="about">
  <h2>About</h2>
  <div class="grid">
    <div class="card">
      <h3>Short Bio</h3>
      <p>Fatema Bhayani is an AI and education innovator focused on generative AI, adaptive curriculum design, and data‑driven learning. She leads product vision and pedagogy at SynaptIQ, building personalized learning systems, and currently directs AI‑Powered Learning &amp; Innovation at one of Canada’s leading private schools, guiding the integration of GenAI across 60+ courses worldwide. Previously, she worked as a Data Scientist at Theme Consultancy on predictive analytics and personalization, and served as a teaching assistant and undergraduate researcher at the University of Toronto. Her interests span trustworthy AI, fairness, and applied ML in education and finance. She is the recipient of the NSERC USRA research award.</p>
    </div>
    <div class="card">
      <h3>Longer Bio</h3>
      <p>Fatema Bhayani designs and deploys AI‑powered systems that improve learning outcomes and educator workflows. At <strong>SynaptIQ</strong>, she is building a personalized learning platform and GenAI‑first curriculum models aligned with Canadian standards, with an emphasis on mastery learning and scalable feedback. As <strong>Director of AI‑Powered Learning &amp; Innovation</strong> at <strong>Canada’s leading private school</strong>, she has led the roll‑out of teacher–AI workflows across 60+ international courses, developing adaptive rubrics and differentiated feedback frameworks to support global adoption. Her <strong>applied data science</strong> background includes building predictive models for user behavior and personalization at <strong>Theme Consultancy</strong>, shipping dashboards and pipelines for stakeholders. She has served as a <strong>UofT Teaching Assistant</strong> (intro CS, NLP, statistics) and as an <strong>undergraduate researcher</strong> on graph algorithms and social network analysis (Twitter), supported by the <strong>NSERC USRA</strong>; earlier work explored NLP classification of educational content on Wikipedia. Her current interests include trustworthy and uncertainty‑aware AI, rubric‑grounded assessment, and human‑AI collaboration in high‑stakes contexts such as education and finance. She holds an <strong>HBSc in Data Science</strong> from the University of Toronto (Dean’s List; multiple scholarships).</p>
    </div>
  </div>
</section>

<section class="section" id="teaching">
  <h2>Teaching</h2>
  <ul class="list">
    <li><strong>University of Toronto — Teaching Assistant</strong>: CSC148 (Intro to CS), STA130 (Stats &amp; Data Science), CSC401 (NLP) — labs, grading, office hours.</li>
    <li><strong>Mentorship</strong>: Open to supervising/mentoring student projects in applied ML/edtech — use the contact button below.</li>
  </ul>
</section>

<section class="section" id="awards">
  <h2>Honors &amp; Awards</h2>
  <ul class="list">
    <li><strong>Dean’s List (2017, 2018, 2019)</strong></li>
    <li><strong>NSERC USRA (Research Award)</strong></li>
    <li>New College Student Council In‑Course Scholarship</li>
    <li>Hosinec Family Scholarship</li>
    <li>Samuel Beatty In‑Course Scholarship</li>
    <li>New College Council In‑Course Scholarship</li>
    <li>New College Principal’s Scholarship</li>
    <li>Al &amp; Eleanor May Award in Economics</li>
    <li>University of Toronto Scholars Award</li>
  </ul>
</section>

<section class="section" id="blog">
  <h2>Blog</h2>
  <p class="small">Markdown posts powered by Jekyll. Initial placeholders below — edit or remove anytime.</p>
  <div class="grid">
  {% for post in site.posts limit:4 %}
    <div class="card">
      <h3><a href="{{ post.url | relative_url }}" style="text-decoration:none">{{ post.title }}</a></h3>
      <p class="small">{{ post.date | date: "%B %d, %Y" }} &middot; {{ post.excerpt | strip_html | truncate: 140 }}</p>
    </div>
  {% endfor %}
  </div>
</section>

<section class="section" id="contact">
  <h2>Contact</h2>
  <p>For collaboration, supervision, or opportunities, reach out via email.</p>
  <a class="cta" id="email-link-bottom" href="#" onclick="revealEmail('fatema.alibhayani','gmail.com');return false;">
    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4 4h16v16H4z"/><path d="M22 6l-10 7L2 6"/>
    </svg>
    <span>Reveal email</span>
  </a>
</section>