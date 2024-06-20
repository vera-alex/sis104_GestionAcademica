<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <section id="category">
    <div class="container mt-5">
      <div class="d-md-flex justify-content-between align-items-center">
        <div>
          <h2 class="display-6 fw-semibold">Popular Categories</h2>
        </div>
      </div>
      <div class="row g-md-3 mt-2">
        <div class="col-md-4">
          <div class="primary rounded-3 p-4 my-3">
            <div class="d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px">
                <use href="#pencil-box" class="svg-primary" />
              </svg>
              <div class="ps-4">
                <RouterLink to="/asistencias" class="category-paragraph fw-bold text-uppercase mb-1"
                  >Asistencias</RouterLink
                >
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="tertiary rounded-3 p-4 my-3">
            <div class="d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px">
                <use href="#fitness" class="svg-tertiary" />
              </svg>
              <div class="ps-4">
                <RouterLink
                  to="/rendimientos"
                  class="category-paragraph fw-bold text-uppercase mb-1"
                  >Rendimiento</RouterLink
                >
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="gray rounded-3 p-4 my-3">
            <div class="d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px">
                <use href="#pencil-box" class="svg-gray" />
              </svg>
              <div class="ps-4">
                <p class="category-paragraph fw-bold text-uppercase mb-1">Horarios</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="teacher" class="padding-medium">
    <div class="container">
      <div class="text-center mb-5">
        <h2 class="display-6 fw-semibold">Nuestros Docentes</h2>
      </div>

      <div class="row">
        <div class="col mb-5">
          <div class="team-member position-relative card rounded-4 border-0 shadow-sm p-3">
            <div class="image-holder zoom-effect rounded-3">
              <img src="@/assets/images/teacher1.jpg" class="img-fluid rounded-3" alt="image" />
              <ul class="social-links list-unstyled position-absolute">
                <li>
                  <a href="#">
                    <svg class="facebook text-dark" width="25" height="25" aria-hidden="true">
                      <use xlink:href="#facebook" class="text-white"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg class="twitter text-dark" width="25" height="25" aria-hidden="true">
                      <use xlink:href="#twitter" class="text-white"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg class="instagram text-dark" width="25" height="25" aria-hidden="true">
                      <use xlink:href="#instagram" class="text-white"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg class="linkedin text-dark" width="25" height="25" aria-hidden="true">
                      <use xlink:href="#linkedin" class="text-white"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div class="card-body p-0">
              <div class="text-center mt-3">
                <p class="fw-bold m-0">Anila Lee</p>
                <p class="text-secondary m-0">Art Director</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col mb-5">
          <div class="team-member position-relative card rounded-4 border-0 shadow-sm p-3">
            <div class="image-holder zoom-effect rounded-3">
              <img src="@/assets/images/teacher2.jpg" class="img-fluid rounded-3" alt="image" />
              <ul class="social-links list-unstyled position-absolute">
                <li>
                  <a href="#">
                    <svg class="facebook text-dark" width="25" height="25" aria-hidden="true">
                      <use xlink:href="#facebook" class="text-white"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg class="twitter text-dark" width="25" height="25" aria-hidden="true">
                      <use xlink:href="#twitter" class="text-white"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg class="instagram text-dark" width="25" height="25" aria-hidden="true">
                      <use xlink:href="#instagram" class="text-white"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg class="linkedin text-dark" width="25" height="25" aria-hidden="true">
                      <use xlink:href="#linkedin" class="text-white"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div class="card-body p-0">
              <div class="text-center mt-3">
                <p class="fw-bold m-0">Bruce Smith</p>
                <p class="text-secondary m-0">Marketing Expert</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col mb-5">
          <div class="team-member position-relative card rounded-4 border-0 shadow-sm p-3">
            <div class="image-holder zoom-effect rounded-3">
              <img src="@/assets/images/teacher3.jpg" class="img-fluid rounded-3" alt="image" />
              <ul class="social-links list-unstyled position-absolute">
                <li>
                  <a href="#">
                    <svg class="facebook text-dark" width="25" height="25" aria-hidden="true">
                      <use xlink:href="#facebook" class="text-white"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg class="twitter text-dark" width="25" height="25" aria-hidden="true">
                      <use xlink:href="#twitter" class="text-white"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg class="instagram text-dark" width="25" height="25" aria-hidden="true">
                      <use xlink:href="#instagram" class="text-white"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg class="linkedin text-dark" width="25" height="25" aria-hidden="true">
                      <use xlink:href="#linkedin" class="text-white"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div class="card-body p-0">
              <div class="text-center mt-3">
                <p class="fw-bold m-0">Jack Nicholson</p>
                <p class="text-secondary m-0">SEO Expert</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col mb-5">
          <div class="team-member position-relative card rounded-4 border-0 shadow-sm p-3">
            <div class="image-holder zoom-effect rounded-3">
              <img src="@/assets/images/teacher4.jpg" class="img-fluid rounded-3" alt="image" />
              <ul class="social-links list-unstyled position-absolute">
                <li>
                  <a href="#">
                    <svg class="facebook text-dark" width="25" height="25" aria-hidden="true">
                      <use xlink:href="#facebook" class="text-white"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg class="twitter text-dark" width="25" height="25" aria-hidden="true">
                      <use xlink:href="#twitter" class="text-white"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg class="instagram text-dark" width="25" height="25" aria-hidden="true">
                      <use xlink:href="#instagram" class="text-white"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg class="linkedin text-dark" width="25" height="25" aria-hidden="true">
                      <use xlink:href="#linkedin" class="text-white"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div class="card-body p-0">
              <div class="text-center mt-3">
                <p class="fw-bold m-0">Calvin Ian</p>
                <p class="text-secondary m-0">Sales Director</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col mb-5">
          <div class="team-member position-relative card rounded-4 border-0 shadow-sm p-3">
            <div class="image-holder zoom-effect rounded-3">
              <img src="@/assets/images/teacher5.jpg" class="img-fluid rounded-3" alt="image" />
              <ul class="social-links list-unstyled position-absolute">
                <li>
                  <a href="#">
                    <svg class="facebook text-dark" width="25" height="25" aria-hidden="true">
                      <use xlink:href="#facebook" class="text-white"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg class="twitter text-dark" width="25" height="25" aria-hidden="true">
                      <use xlink:href="#twitter" class="text-white"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg class="instagram text-dark" width="25" height="25" aria-hidden="true">
                      <use xlink:href="#instagram" class="text-white"></use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg class="linkedin text-dark" width="25" height="25" aria-hidden="true">
                      <use xlink:href="#linkedin" class="text-white"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div class="card-body p-0">
              <div class="text-center mt-3">
                <p class="fw-bold m-0">Milye Sam</p>
                <p class="text-secondary m-0">Marketing Expert</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
