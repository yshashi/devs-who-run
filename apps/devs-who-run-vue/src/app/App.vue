<script setup lang="ts">
</script>

<template>
  <header>
    <h1>Code by Day, Run by Passion</h1>
    <p>Join the community for developers who love to run!</p>
    <div class="cta">
      <a href="https://discord.gg/gjPdvKjFx3">Join the Community</a>
      <a href="#learn-more">Learn More</a>
    </div>
  </header>

  <section id="about" class="about">
    <h2>What is Devs Who Run?</h2>
    <p>Devs Who Run is a community of tech enthusiasts who balance coding with the thrill of running. Whether you're a marathoner, sprinter, or casual jogger, you’re welcome here!</p>
  </section>

  <section id="features" class="features">
    <h2>Why Join Devs Who Run?</h2>
    <div class="cards">
      <div class="card">
        <h3>Community</h3>
        <p>Connect with like-minded developers and runners.</p>
      </div>
      <div class="card">
        <h3>Resources</h3>
        <p>Get tips on improving both your code and your stride.</p>
      </div>
      <div class="card">
        <h3>Challenges</h3>
        <p>Participate in coding sprints and running challenges.</p>
      </div>
      <div class="card">
        <h3>Events</h3>
        <p>Meetups, marathons, and hackathons that keep you moving.</p>
      </div>
    </div>
  </section>

  <section id="testimonials" class="testimonials">

  </section>

  <section id="cta" class="cta">

  </section>

  <footer>
    <p>© 2024 Devs Who Run. All rights reserved.</p>
    <p>
      Made with passion for running by <a href="https://bsky.app/profile/santoshyadavdev.bsky.social">Santosh Yadav</a>
    </p>
  </footer>

</template>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.6;
}
header {
  text-align: center;
  padding: 2rem 1rem;
  background: #f5f5f5;
}
header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}
header p {
  font-size: 1.2rem;
  color: #555;
}
header .cta {
  margin-top: 1rem;
}
header .cta a {
  padding: 0.8rem 1.5rem;
  margin: 0.5rem;
  text-decoration: none;
  color: white;
  background: #007BFF;
  border-radius: 5px;
}
section {
  padding: 2rem 1rem;
}
.about,
.features,
.testimonials {
  text-align: center;
}
.features .cards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}
.features .card {
  width: 250px;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: 8px;
}
footer {
  text-align: center;
  padding: 1rem;
  background: #333;
  color: white;
}
footer a {
  color: #007BFF;
  text-decoration: none;
}
</style>
