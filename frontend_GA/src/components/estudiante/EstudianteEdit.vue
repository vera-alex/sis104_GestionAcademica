<script setup lang="ts">
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const ci = ref('')
const nombres = ref('')
const apellidos = ref('')
const fechaNacimiento = ref('')
const curso = ref('')
const usuario = ref('')
const id = router.currentRoute.value.params['id']

async function editarEstudiante() {
  await http
    .patch(`${ENDPOINT}/${id}`, {
      ci: ci.value,
      nombres: nombres.value,
      apellidos: apellidos.value,
      fechaNacimiento: fechaNacimiento.value ? new Date(fechaNacimiento.value) : null,
      usuario: usuario.value,
      curso: curso.value
    })
    .then(() => router.push('/estudiantes'))
}

async function getEstudiante() {
  await http.get(`${ENDPOINT}/${id}`).then((response) => {
    ;(ci.value = response.data.ci),
      (nombres.value = response.data.nombres),
      (apellidos.value = response.data.apellidos),
      (fechaNacimiento.value = response.data.fechaEstreno
        ? response.data.fechaNacimiento.substring(0, 10)
        : ''),
      (usuario.value = response.data.usuario),
      (curso.value = response.data.curso)
  })
}

function goBack() {
  router.go(-1)
}

onMounted(() => {
  getEstudiante()
})
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item">
          <RouterLink to="/estudiantes">Estudiantes</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Editar</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Editar Estudiante</h2>
    </div>

    <div class="row">
      <form @submit.prevent="editarEstudiante">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="ci" placeholder="CI" required />
          <label for="ci">CI</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            v-model="nombres"
            placeholder="Nombres"
            required
          />
          <label for="nombres">Nombres</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            v-model="apellidos"
            placeholder="Apellidos"
            required
          />
          <label for="apellidos">Apellidos</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="Date"
            class="form-control"
            v-model="fechaNacimiento"
            placeholder="Fecha de Nacimiento"
            required
          />
          <label for="fechaNacimiento">Fecha de Nacimiento</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            v-model="usuario"
            placeholder="Usuario"
            required
          />
          <label for="usuario">Usuario</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="curso" placeholder="Curso" required />
          <label for="curso">Curso</label>
        </div>
        <div class="text-center mt-3">
          <button type="submit" class="btn btn-primary btn-lg">
            <font-awesome-icon icon="fa-solid fa-save" /> Crear
          </button>
        </div>
      </form>
    </div>
    <div class="text-left">
      <button class="btn btn-link" @click="goBack">Volver</button>
    </div>
  </div>
</template>

<style></style>
