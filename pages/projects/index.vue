<template>
  <title>Projects</title>
  <div
    class="grid md:grid-cols-2 xl:grid-cols-3 gap-8 justify-center lg:ml-4 md:mt-6 lg:mt-8"
  >
    <ProjectCard
      title="St. Olaf Program of Study"
      desc="A website that allows for students to plan their major classes. It also allows for faculty to review student choices."
      img="images/stolaf-pos-form.png"
      alt="St. Olaf Program of Study Computer Science MaP"
      link="https://jadenchant.github.io/stolaf-pos-form/"
    />
    <ProjectCard
      title="Jaden's Website"
      desc="This website created using Nuxt3.js, MongoDB, Tailwind, Health Auto Export, Tres.js, and D3.js."
      img="images/jaden-web.png"
      alt="Jaden Chant's Website"
      link="https://github.com/jadenchant/jaden-nuxt3"
    />
    <ProjectCard
      title="Elevator.zone"
      desc="Elevator experience created using Three.js and Svelte"
      img="images/elevator.png"
      alt="Hotel Lobby Elevator Experience"
      link="https://elevator.zone"
    />
    <ProjectCard
      title="IMDB Review Sentiment Prediction"
      desc="Long Short Term Memory Machine Learning model used to predict sentiment from IMDB movie reviews."
      img="images/lstm-epoch.png"
      alt="IMDB Review Sentiment Prediction LSTM Epoch Graph"
      link="https://jadenchant.github.io/pages/projects/lstm/"
    />
    <ProjectCard
      title="NFL Fantasy Football Statistics"
      desc="NFL Fantasy Football Linear Regression Prediction Model used to predict fantasy points for players."
      img="images/nfl-stats.png"
      alt="NFL Fantasy Football Statistics Linear Regression Model Next Season Predictions"
      link="https://jadenchant.github.io/pages/projects/nfl_fantasy_pt/"
    />
    <ProjectCard
      title="Toggle SVG Animation"
      desc="Toggle SVG Animation using Vue.js/Nuxt.js and TailwindCSS"
      img="images/toggle.png"
      alt="Toggle"
      link="/projects/toggle"
      internal
    />
    <ProjectCard
      title="MLB Statistics"
      desc="Shiny app for MLB Most Valuable Player, Rookie of the Year, and Cy Young award statistics."
      img="images/mlb-stats.png"
      alt="MLB Statistics Shiny App Dashboard"
      link="https://jadenchant.github.io/pages/projects/mlb/"
    />
    <ProjectCard
      title="Tableu Data Visualizations"
      desc="Tableu Data Visualizations for Data Viz Class"
      img="images/dataviz.png"
      alt="2020 Fatal Collisions by states"
      link="https://public.tableau.com/app/profile/jadenchant/vizzes"
    />
    <ProjectCard
      title="Project 2025 Text Analysis"
      desc="Collecting text data from the Project 2025 PDF using Python and doing analysis with R packages."
      img="images/project2025.png"
      alt="Sentiment analysis from Project 2025"
      link="https://jadenchant.github.io/pages/projects/project_2025/"
    />
    <ProjectCard
      title="Data Science Mini Projects"
      desc="DS projects like maps and text analysis using R and many R packages including tidyverse and ggplot."
      img="images/miniproject-usmap.png"
      alt="Data Science Mini Project US Map"
      link="https://jadenchant.github.io/pages/maps/us_states.html"
    />
    <ProjectCard
      title="FactCheck.org's SciCheck Article Text Analysis"
      desc="Collecting text data from FactCheck.org using rvest."
      link="https://jadenchant.github.io/pages/projects/scicheck/"
    />
    <ProjectCard
      title="3D Flower Models"
      desc="Simple 3D models of flowers created with Tinkercad."
      img="images/flowers.png"
      alt="3D Flower Models"
      link="/projects/flowers"
      internal
    />
    <ProjectCard
      title="Reverse Word Search Games"
      desc="Reverse word search games in multiple languages that can be played in terminal."
      img="images/reverse-word-search.png"
      alt="Reverse Word Search Game"
      link="https://github.com/jadenchant/reverse-word-search"
    />
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  title: "Projects",
});

useSeoMeta({
  title: "Projects",
  ogTitle: "Jaden Chant Projects",
  author: "Jaden Chant",
  description: "Jaden Chant's Web and Class Projects",
  ogDescription: "Jaden Chant's Web and Class Projects",
  ogImage: "https://jadenchant.com/_ipx/w_1500/images/jaden_nyc.png",
});
</script>
