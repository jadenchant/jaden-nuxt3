<template>
  <title>Resume</title>
  <div
    class="relative z-10 text-sm md:text-lg lg:mx-4 lg:flex lg:flex-col lg:items-center md:mt-6 lg:mt-8"
  >
    <div class="lg:w-[900px]">
      <div class="md:mx-4 lg:mx-6">
        <h2 class="text-xl md:text-3xl underline mb-2 md:mb-4">Education</h2>

        <div class="flex justify-between md:text-2xl">
          <h3>St. Olaf College, Northfield, Minnesota</h3>
          <h3>August 2020 - May 2024</h3>
        </div>
        <div class="md:ml-4">
          <div class="flex justify-between">
            <h4>Bachelor of Arts: Computer Science, Mathematics</h4>
            <h4>GPA: 3.7 | Cum Laude</h4>
          </div>
          <h4>Concentration: Statistics and Data Science</h4>
          <h4>Athletics: Four Years of NCAA DIII Swimming</h4>
        </div>
        <DetailsToggle button-text="Courses">
          <div class="ml-4 mb-4">
            <h4 class="mb-2 md:mb-4">
              Relevant Computer Science Courses:
              <NuxtLink
                to="https://github.com/jadenchant/stolaf-pos-form"
                target="_blank"
                >Senior Capstone</NuxtLink
              >, Analysis of Algorithms, Foundations of AI, Programming
              Languages, Mobile Computing Apps, Software Design, Hardware
              Design, Ethics in CS
            </h4>
            <h4 class="mb-2 md:mb-4">
              Relevant Mathematics Courses: Multivariable Calculus, Differential
              Equations I, Real Analysis I, Abstract Algebra I, Complex
              Analysis, Linear Algebra
            </h4>
            <h4 class="mb-2 md:mb-4">
              Relevant Statistics and Data Science Courses:
              <NuxtLink to="https://jadenchant.github.io/pages/projects/lstm/">
                Algorithms for Decision Making</NuxtLink
              >,
              <NuxtLink to="https://jadenchant.github.io/" target="_blank">
                Data Science II </NuxtLink
              >, Data Visualization,
              <NuxtLink
                to="https://jadenchant.github.io/pages/projects/nfl_fantasy_pt/"
                target="_blank"
              >
                Statistics II</NuxtLink
              >, Statistics I
            </h4>
            <h4>
              Other Fun Courses:
              <NuxtLink to="film" class="py-4"
                >Film Noir / Intro to Film</NuxtLink
              >,
              <NuxtLink to="costume" class="py-4"
                >Costume and Character Design</NuxtLink
              >, Psychopathology
            </h4>
          </div>
        </DetailsToggle>

        <h2 class="text-xl md:text-3xl underline mb-2 md:mb-4">
          Certifications
        </h2>
        <div class="flex flex-row md:flex-col">
          <div class="w-full mb-6 flex flex-col md:flex-row">
            <NuxtLink
              to="https://cp.certmetrics.com/amazon/en/public/verify/credential/67522d4f316243159813896aaeee86ff"
              target="_blank"
            >
              <NuxtImg
                src="images/aws-certified-cloud-practitioner.png"
                alt="AWS Certified Cloud Practitioner"
                sizes="sm:120px md:120px lg:120px"
                format="webp"
                preload
            /></NuxtLink>
            <div class="w-full flex flex-col justify-center ml-2 lg:ml-4">
              <div
                class="hidden md:flex justify-between text-base md:text-2xl lg:mb-1"
              >
                <h3>
                  <NuxtLink
                    to="https://cp.certmetrics.com/amazon/en/public/verify/credential/67522d4f316243159813896aaeee86ff"
                    target="_blank"
                    >AWS Certified Cloud Practitioner</NuxtLink
                  >
                </h3>
                <h3>December 2024 - Current</h3>
              </div>
              <div class="hidden md:flex justify-between">
                <h4>
                  ID:
                  <NuxtLink
                    to="https://cp.certmetrics.com/amazon/en/public/verify/credential/67522d4f316243159813896aaeee86ff"
                    target="_blank"
                    >67522d4f316243159813896aaeee86ff</NuxtLink
                  >
                </h4>
                <h4>
                  Issued by:
                  <NuxtLink to="https://aws.amazon.com/" target="_blank"
                    >Amazon Web Services</NuxtLink
                  >
                </h4>
              </div>
            </div>
          </div>
          <div class="w-full mb-6 flex flex-col md:flex-row">
            <NuxtLink
              to="https://ecards.heart.org/api/relay/v1/ecard/getfullpdf?eCardUId=0E83D721-647C-48C3-9F2E-AB8564ABBC99&langId=1"
              target="_blank"
            >
              <Icon name="my-icons:aha" mode="svg" size="120px" />
            </NuxtLink>
            <div class="w-full flex flex-col justify-center ml-2 lg:ml-4">
              <div
                class="hidden md:flex justify-between text-base md:text-2xl lg:mb-1"
              >
                <h3>
                  <NuxtLink
                    to="https://ecards.heart.org/api/relay/v1/ecard/getfullpdf?eCardUId=0E83D721-647C-48C3-9F2E-AB8564ABBC99&langId=1"
                    target="_blank"
                    >Basic Life Support (BLS)</NuxtLink
                  >
                </h3>
                <h3>Febuary 2025 - Current</h3>
              </div>
              <div class="hidden md:flex justify-between">
                <h4>
                  ID:
                  <NuxtLink
                    to="https://ecards.heart.org/api/relay/v1/ecard/getfullpdf?eCardUId=0E83D721-647C-48C3-9F2E-AB8564ABBC99&langId=1"
                    target="_blank"
                    >255417683412</NuxtLink
                  >
                </h4>
                <h4>
                  Issued by:
                  <NuxtLink to="https://www.heart.org/en" target="_blank"
                    >American Heart Associaion</NuxtLink
                  >
                </h4>
              </div>
            </div>
          </div>
        </div>

        <h2 class="text-xl md:text-3xl underline mb-2 md:mb-4">Internships</h2>
        <div class="mb-2 md:mb-4">
          <div class="flex justify-between text-base md:text-2xl">
            <h3>
              <NuxtLink to="https://www.target.com/finds" target="_blank"
                >Target</NuxtLink
              >
            </h3>
            <h3>June - August 2023</h3>
          </div>
          <div class="flex justify-between md:ml-4">
            <h4>Software Engineering Intern</h4>
            <h4>Minneapolis, MN</h4>
          </div>
          <DetailsToggle class="md:ml-4">
            <ul class="list-disc ml-4">
              <li>
                Developed production-ready
                <NuxtLink to="https://react.dev/" target="_blank"
                  ><span class="font-bold underline">React.js</span></NuxtLink
                >
                components for a new internal moderation tool using
                <NuxtLink to="https://www.typescriptlang.org/" target="_blank"
                  ><span class="font-bold underline">Typescript</span></NuxtLink
                >, enhancing user generated content management and moderation
              </li>
              <li>
                Engineered and implemented
                <span class="font-bold underline">unit tests</span>
                improving code quality and maintainability
              </li>
              <li>
                Collaborated in an Agile environment with daily standups and
                sprint planning for efficient feature delivery
              </li>
              <li>
                Presented project achievements to senior leadership and
                stakeholders
              </li>
            </ul>
          </DetailsToggle>
        </div>
        <div class="mb-2 md:mb-4">
          <div class="flex justify-between text-base md:text-2xl">
            <h3>
              <NuxtLink
                to="https://www.usbank.com/wealth-management.html"
                target="_blank"
                >US Bank</NuxtLink
              >
            </h3>
            <h3>June - August 2022</h3>
          </div>
          <div class="flex justify-between md:ml-4">
            <h4>Software Development Intern</h4>
            <h4>Richfield, MN</h4>
          </div>
          <DetailsToggle class="md:ml-4">
            <ul class="list-disc ml-4">
              <li>
                Implemented real-time data reporting systems to monitor ETL
                processes and optimize operational decision-making
              </li>
              <li>
                Built and optimized <span class="font-bold underline">SQL</span>
                efficiency and resolve metadata inconsistencies
              </li>
              <li>
                Developed and implemented comprehensive test cases for file
                extraction processes, improving reliability
              </li>
              <li>
                Participated in Agile workflow methodologies including sprint
                planning, backlog refinement, and retrospectives
              </li>
            </ul>
          </DetailsToggle>
        </div>
        <div class="mb-2 md:mb-4">
          <div class="flex justify-between text-base md:text-2xl">
            <h3>
              <NuxtLink
                to="https://www.fundraisingatm.com/index.php"
                target="_blank"
                >FundraisingATM</NuxtLink
              >
            </h3>
            <h3>May - November 2021</h3>
          </div>
          <div class="flex justify-between md:ml-4">
            <h4>Lead Frontend Developer</h4>
            <h4>Bloomington, MN</h4>
          </div>
          <DetailsToggle class="md:ml-4">
            <ul class="list-disc ml-4">
              <li>
                Spearheaded the transition from Bootstrap to vanilla
                <span class="font-bold underline">HTML</span> and
                <span class="font-bold underline">CSS</span>, utilizing CSS Grid
                and Flex to significantly enhance page loading speeds
              </li>
              <li>
                Led a team of 7 frontend interns, orchestrating virtual meetings
                and coordinating project workflows to optimize development
                processes
              </li>
              <li>
                Facilitated ongoing communication with intern developers and the
                founder, ensuring alignment on project goals
              </li>
            </ul>
          </DetailsToggle>
        </div>

        <h2 class="text-xl md:text-3xl underline mb-2 md:mb-4">
          Other Experiences
        </h2>
        <div class="mb-2 md:mb-4">
          <div class="flex justify-between text-base md:text-2xl">
            <h3>
              <NuxtLink
                to="https://www.allinahealth.org/abbott-northwestern-hospital"
                target="_blank"
                >Allina Health</NuxtLink
              >
            </h3>
            <h3>September 2024 - Current</h3>
          </div>
          <div class="flex justify-between md:ml-4">
            <h4>Lab Assistant</h4>
            <h4>Minneapolis, MN</h4>
          </div>
          <DetailsToggle class="md:ml-4">
            <ul class="list-disc ml-4">
              <li>
                Operate complex laboratory systems,
                <NuxtLink to="https://www.epic.com/software/" target="_blank">
                  Epic Software (Hyperspace / Beaker)
                </NuxtLink>
                by handling data entry and tracking
              </li>
              <li>
                Apply technical troubleshooting skills to laboratory equipment
                workflows
              </li>
              <li>
                Utilize analytical methods to process research specimens,
                ensuring data integrity and precision in experimental outcomes
              </li>
            </ul>
          </DetailsToggle>
        </div>
        <div class="mb-2 md:mb-4">
          <div class="flex justify-between text-base md:text-2xl">
            <h3>
              <NuxtLink to="https://wp.stolaf.edu/disco/" target="_blank"
                >St. Olaf College</NuxtLink
              >
            </h3>
            <h3>September 2021 - May 2024</h3>
          </div>
          <div class="flex justify-between md:ml-4">
            <h4>Digital Scholarship Center Manager</h4>
            <h4>Northfield, MN</h4>
          </div>
          <DetailsToggle class="md:ml-4">
            <ul class="list-disc ml-4">
              <li>
                Directed 3D print and design operations at the Digital
                Scholarship Center, elevating the center’s creative output
              </li>
              <li>
                Maintained and troubleshooted 3D printers to ensure consistent,
                high-quality operation and minimal downtime
              </li>
              <li>
                Educated and mentored students on 3D printing techniques and
                design creation using
                <NuxtLink to="https://www.tinkercad.com/" target="_blank"
                  >TinkerCad</NuxtLink
                >
                development and innovation
              </li>
              <li>
                Provided expert guidance on digital and creative projects,
                utilizing
                <NuxtLink
                  to="https://www.adobe.com/products/catalog.html"
                  target="_blank"
                  >Adobe Creative Suite</NuxtLink
                >
                and
                <NuxtLink
                  to="https://www.esri.com/en-us/arcgis/products/arcgis-desktop/overview"
                  target="_blank"
                  >ArcGIS</NuxtLink
                >
                to support student project success
              </li>
            </ul>
          </DetailsToggle>
        </div>

        <h2 class="text-xl md:text-3xl underline mb-2 md:mb-4">Skills</h2>
        <div>
          <h4 class="mb-2 md:mb-4">
            Programming Languages:
            <NuxtLink to="https://www.typescriptlang.org/" target="_blank"
              >JavaScript/Typescript</NuxtLink
            >,
            <NuxtLink to="https://www.r-project.org/" target="_blank"
              >R</NuxtLink
            >,
            <NuxtLink to="https://www.python.org/" target="_blank"
              >Python</NuxtLink
            >,
            <NuxtLink to="https://isocpp.org/" target="_blank">C++</NuxtLink>,
            <NuxtLink to="https://en.wikipedia.org/wiki/SQL" target="_blank"
              >SQL</NuxtLink
            >,
            <NuxtLink
              to="https://developer.mozilla.org/en-US/docs/Web/HTML"
              target="_blank"
              >HTML5</NuxtLink
            >,
            <NuxtLink
              to="https://developer.mozilla.org/en-US/docs/Web/CSS"
              target="_blank"
              >CSS</NuxtLink
            >
          </h4>
          <h4 class="mb-2 md:mb-4">
            Frameworks:
            <NuxtLink to="https://react.dev/" target="_blank">React.js</NuxtLink
            >,
            <NuxtLink to="https://nuxt.com/" target="_blank"
              >Nuxt.js/Vue.js</NuxtLink
            >,
            <NuxtLink to="https://tailwindcss.com/" target="_blank"
              >Tailwind CSS</NuxtLink
            >
          </h4>
          <h4 class="mb-2 md:mb-4">
            Tools:
            <NuxtLink to="https://git-scm.com/" target="_blank">Git</NuxtLink>,
            <NuxtLink to="https://github.com/" target="_blank">GitHub</NuxtLink
            >,
            <NuxtLink to="https://aws.amazon.com/" target="_blank">AWS</NuxtLink
            >,
            <NuxtLink to="https://cloud.google.com/?hl=en" target="_blank"
              >Google Cloud Platform</NuxtLink
            >,
            <NuxtLink to="https://www.mongodb.com/" target="_blank"
              >MongoDB</NuxtLink
            >,
            <NuxtLink to="https://www.tableau.com/" target="_blank"
              >Tableau</NuxtLink
            >
          </h4>
          <h4>
            Topics: RESTful APIs, CI/CD, Machine Learning, Data Scraping, Unit
            Testing
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: "Resume",
});

useSeoMeta({
  title: "Resume",
  ogTitle: "Jaden Chant Resume",
  author: "Jaden Chant",
  description: "Jaden Chant's Resume",
  ogDescription: "Jaden Chant's Resume",
});
</script>

<style>
li {
  margin-bottom: 0.5rem;
}
</style>
