<template>
  <div class="min-h-screen bg-gray-100">
    <div
        class="relative h-[calc(100vh-10rem)] w-full bg-cover bg-center"
        style="background-image: url('https://utfs.io/f/8495c587-0676-4f78-b46e-f4ad4624d71a-m15jgy.jpg')"
    >
      <div class="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-100 to-transparent"></div>
    </div>
    <div class="container mx-auto px-4 pb-8">
      <div class="relative z-10 -mt-72 flex flex-col items-center">
        <div class="w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img
              src="https://utfs.io/f/b7e88ab8-8b9a-413a-acd9-dffa79ec9c0a-theu08.jpg"
              alt="Foto de perfil Brayan Quiroz Urrutia"
              class="object-cover w-full h-full"
          />
        </div>
        <h1 class="mt-4 text-4xl font-bold text-gray-900">Brayan Nicolas Quiroz Urrutia</h1>
        <h2 class="mt-2 text-xl text-gray-600">IT Developer</h2>
        <div class="mt-2 flex items-center text-gray-600">
          <font-awesome-icon :icon="['fas', 'location-dot']" />
          <span class="ml-2">Santiago, Chile</span>
        </div>
        <div class="mt-4 flex items-center justify-center space-x-3">
          <a href="https://github.com/brayanquirozurrutia" target="_blank" class="social-btn-wrapper">
            <v-btn class="social-btn" variant="outlined" icon>
              <font-awesome-icon :icon="['fab', 'github']" class="icon" />
              <span class="sr-only">GitHub</span>
            </v-btn>
          </a>
          <a href="https://www.linkedin.com/in/brayan-nicolas-quiroz-urrutia-19a0391a7/" target="_blank" class="social-btn-wrapper">
            <v-btn class="social-btn" variant="outlined" icon>
              <font-awesome-icon :icon="['fab', 'linkedin']" class="icon" />
              <span class="sr-only">LinkedIn</span>
            </v-btn>
          </a>
          <a href="mailto:brayanquirozurrutia@gmail.com" class="social-btn-wrapper">
            <v-btn class="social-btn" variant="outlined" icon>
              <font-awesome-icon :icon="['fas', 'envelope']" class="icon" />
              <span class="sr-only">Email</span>
            </v-btn>
          </a>
          <a href="/CV_BRAYAN_QUIROZ_URRUTIA.pdf" download class="cv-btn">
            <font-awesome-icon :icon="['fas', 'download']" class="cv-icon" /> Download CV
          </a>
        </div>
        <div class="mt-8 sm:mt-12 grid gap-6 sm:gap-8 md:grid-cols-3">
          <div class="md:col-span-2 space-y-6 sm:space-y-8">
            <v-card class="pa-4">
              <v-card-text>
                <h3 class="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                  About Me
                </h3>
                <p class="text-body-1 text-gray-600">
                  Passionate IT Developer with experience in web and mobile application development and support. Currently, I am involved in the
                  in the construction and maintenance of a website for the sale of tickets to children's events. My work covers both
                  the backend development using Django (API and GraphQL) as well as the frontend with PHP and Symfony. In addition, I am in charge of
                  detect possible bugs and improvements to ensure the optimal functioning of the site. In parallel, I am developing a
                  personal fullstack project for my professional and personal growth. This project is an online store deployed
                  on an Ubuntu server with Docker, using React with Vite and TypeScript on the frontend and Django on the backend. My work on this project
                  on this project allows me to experiment with real deployments, fix bugs, and learn about Linux, Docker,
                  Nginx, and services like Celery, RabbitMQ and OneSignal.
                </p>
              </v-card-text>
            </v-card>
            <v-card class="pa-4 m:p-6">
              <v-card-text>
                <h3 class="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                  Experience
                </h3>
                <div>
                  <div class="space-y-6">
                    <div class="flex flex-col sm:flex-row">
                      <div class="flex-shrink-0 mr-2 sm:mr-4 mb-3 sm:mb-0">
                        <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                          <span class="text-blue-600 font-semibold pr">EK</span>
                        </div>
                      </div>
                      <div>
                        <h4 class="text-lg sm:text-xl font-semibold">Full Stack Developer</h4>
                        <p class="text-gray-600">Entrekids | April 2024 - Present</p>
                        <ul class="mt-2 list-disc list-inside text-gray-600">
                          <li>Development and maintenance of a website specialized in ticket sales for children's events.</li>
                          <li>Creation of integrated solutions for event management, including tools for human resources, schedule control, and ticket cancellation modules.</li>
                          <li>Implementation of sales through WhatsApp and system optimization using Django, API, GraphQL (Backend) and PHP with Symfony (Frontend).</li>
                          <li>Provision of ongoing maintenance and enhancement of IT solutions to ensure customer satisfaction and efficiency.</li>
                        </ul>
                      </div>
                    </div>
                    <div class="flex flex-col sm:flex-row">
                      <div class="flex-shrink-0 mr-2 sm:mr-4 mb-3 sm:mb-0">
                        <div class="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                          <span class="text-green-600 font-semibold">MD</span>
                        </div>
                      </div>
                      <div>
                        <h4 class="text-lg sm:text-xl font-semibold">Backend Developer</h4>
                        <p class="text-gray-600">MeyDey | November 2023 - April 2024</p>
                        <ul class="mt-2 list-disc list-inside text-gray-600">
                          <li>Collaboration with the frontend development team in the creation of an innovative mobile application.</li>
                          <li>Backend development using Django, focusing on creating clean and efficient code to satisfy frontend requirements.</li>
                          <li>Participation in multidisciplinary teams in “2+2 cells” modality, facilitating the integration between frontend and backend developers.</li>
                          <li>Facilitation of fluid communication and rapid implementation of new functionalities, optimizing the resolution of requirements.</li>
                        </ul>
                      </div>
                    </div>
                    <div class="flex flex-col sm:flex-row">
                      <div class="flex-shrink-0 mr-2 sm:mr-4 mb-3 sm:mb-0">
                        <div class="w-12 h-12 rounded-full bg-orange-300 flex items-center justify-center">
                          <span class="text-black font-semibold">DD</span>
                        </div>
                      </div>
                      <div>
                        <h4 class="text-lg sm:text-xl font-semibold">Assistant Manager</h4>
                        <p class="text-gray-600">Dunkin Donuts | February 2022 - November 2023</p>
                        <ul class="mt-2 list-disc list-inside text-gray-600">
                          <li>Responsible for assigning tasks, guiding shifts and managing inventory by placing orders and creating weekly schedules.</li>
                          <li>Cash handling, cash balancing and quick response to unforeseen situations, ensuring effective customer service.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </div>
          <div class="space-y-6 sm:space-y-8">
            <v-card>
              <v-card-text className="p-4 sm:p-6">
                <h3 class="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Skills</h3>
                <div class="flex flex-wrap gap-2">
                  <v-chip
                      v-for="skill in skills"
                      :key="skill"
                      class="ma-1"
                      color="primary"
                  >
                    <p class="text-black font-bold">{{ skill }}</p>
                  </v-chip>
                </div>
              </v-card-text>
            </v-card>
            <v-card>
              <v-card-text>
                <h3 class="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Education</h3>
                <div>
                  <h4 class="text-lg sm:text-xl font-semibold">Bachelor of Science in Computer Science</h4>
                  <p class="text-gray-600">INACAP | 2022 - 2024</p>
                </div>
                <div class="mt-4">
                  <h4 class="text-lg sm:text-xl font-semibold">Civil Mining Engineering</h4>
                  <p class="text-gray-600">Pontifical Catholic University of Valparaíso | 2016 - 2021</p>
                </div>
              </v-card-text>
            </v-card>
            <v-card>
              <v-card-text>
                <h3 class="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Languages</h3>
                <ul class="space-y-2">
                  <li class="flex justify-between">
                    <span>Spanish</span>
                    <span class="text-gray-600">Native</span>
                  </li>
                  <li class="flex justify-between">
                    <span>English</span>
                    <span class="text-gray-600">Intermediate</span>
                  </li>
                </ul>
              </v-card-text>
            </v-card>
          </div>
        </div>
      </div>
      <!-- Mis Proyectos Section -->
      <div class="container mx-auto mt-12">
        <h3 class="text-2xl sm:text-3xl font-semibold text-center mb-8">Latest projects</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <!-- Project 1: Validación de Identidad Mobile -->
          <v-card style="transition: transform 0.3s, box-shadow 0.3s, border 0.3s; border: 1px solid transparent;"
                  onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 4px 8px rgba(0, 0, 0, 0.2)'; this.style.border='2px solid #3b82f6';"
                  onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'; this.style.border='1px solid transparent';">
            <v-card-text>
              <img
                  src="https://utfs.io/f/f25b931f-50fb-4224-8fb2-c0e61e832fda-2pu.png"
                  alt="Proyecto Validación de Identidad Mobile"
                  class="w-full object-cover rounded-lg mb-4"
              />
              <h4 class="text-lg font-semibold mb-2">Mobile Identity Validation</h4>
              <p class="text-gray-600">
                This project is a mobile application developed in Django and React Native that focuses on user
                identity validation. Through facial recognition technology (Face Recognition) and OCR (Tesseract),
                the app analyzes identity documents and compares the captured faces to ensure that the person is who
                they say they are. This verification process is key to security in digital environments.
              </p>
              <div class="pt-4">
                <v-btn color="primary" href="https://github.com/brayanquirozurrutia/jelly_mobile" target="_blank">See more on GitHub</v-btn>
              </div>
            </v-card-text>
          </v-card>

          <!-- Project 2: Tienda Online -->
          <v-card style="transition: transform 0.3s, box-shadow 0.3s, border 0.3s; border: 1px solid transparent;"
                  onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 4px 8px rgba(0, 0, 0, 0.2)'; this.style.border='2px solid #3b82f6';"
                  onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'; this.style.border='1px solid transparent';">
            <v-card-text>
              <img
                  src="https://utfs.io/f/60075dfa-9e8f-4e49-969b-b906a6e1dce0-2pt.png"
                  alt="Proyecto Tienda Online"
                  class="w-full object-cover rounded-lg mb-4"
              />
              <h4 class="text-lg font-semibold mb-2">Online Store</h4>
              <p class="text-gray-600">
                This project is a robust online store developed in Django for the backend and React TS for the
                frontend. It uses Redis for cache management, PostgreSQL as database, Celery and RabbitMQ for
                asynchronous task management, and OneSignal for notifications. The entire system is containerized
                with Docker, making it easy to deploy. In the future, a payment gateway will be added to enable
                online transactions.
              </p>
              <div class="pt-4">
                <v-btn color="primary" href="https://github.com/brayanquirozurrutia/jelly_backend" target="_blank">See more on GitHub</v-btn>
              </div>
            </v-card-text>
          </v-card>

          <!-- Project 3: Herramientas Cotidianas Mobile -->
          <v-card style="transition: transform 0.3s, box-shadow 0.3s, border 0.3s; border: 1px solid transparent;"
                  onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 4px 8px rgba(0, 0, 0, 0.2)'; this.style.border='2px solid #3b82f6';"
                  onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'; this.style.border='1px solid transparent';">
            <v-card-text>
              <img
                  src="https://utfs.io/f/4241d563-96be-4c42-98f1-b0eb03831f94-2pv.png"
                  alt="Proyecto Herramientas Cotidianas Mobile"
                  class="w-full object-cover rounded-lg mb-4"
              />
              <h4 class="text-lg font-semibold mb-2">Everyday Mobile Tools</h4>
              <p class="text-gray-600">
                This mobile app, built with React Native JS and Flask, offers practical tools for everyday use.
                It includes an ingredient analysis module that scans food labels and detects potentially harmful
                ingredients, returning a risk score. It also features a cost comparator that helps users choose
                the most cost-effective option when purchasing products in different sizes and presentations.
              </p>
              <div class="pt-4">
                <v-btn color="primary" href="https://github.com/brayanquirozurrutia/commons_utils_backend" target="_blank">See more on GitHub</v-btn>
              </div>
            </v-card-text>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const skills = [
  "Python", "SQL", "HTML", "CSS", "NoSQL", "Excel", "Bootstrap",
  "JavaScript", "Angular", "Java", "Android Studio", "Django",
  "React (TS)", "TailwindCSS", "GraphQL", "Postman", "RabbitMQ",
  "Docker", "TypeScript", "PHP", "Symfony", "Vite", "Nginx",
  "Celery", "Expo"
];
</script>

<style scoped>
.social-btn {
  border-radius: 50%;
  background-color: #f5f5f5;
  border: 2px solid #ddd;
  transition: background-color 0.3s, border-color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
}

.social-btn:hover {
  background-color: #ddd;
  border-color: #bbb;
}

.cv-btn {
  border-radius: 4px;
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
}

.cv-btn:hover {
  background-color: #0056b3;
}

.icon {
  font-size: 1.5rem;
}

.cv-icon {
  font-size: 1.5rem;
  margin-right: 8px;
}

.text-4xl {
  font-size: 2.5rem;
}

.text-2xl {
  font-size: 1.5rem;
}
</style>


