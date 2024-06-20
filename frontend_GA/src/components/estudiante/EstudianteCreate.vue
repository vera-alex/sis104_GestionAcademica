<script setup lang="ts">
import { ref } from 'vue'
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
const usuario = ref<number>(1)
const curso = ref<number>(1)

async function crearEstudiante() {
  await http
    .post(ENDPOINT, {
      ci: ci.value,
      nombres: nombres.value,
      apellidos: apellidos.value,
      fechaNacimiento: fechaNacimiento.value ? new Date(fechaNacimiento.value) : null,
      usuario: usuario.value,
      curso: curso.value
    })
    .then(() => router.push('/estudiantes'))
}

function goBack() {
  router.go(-1)
}
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item">
          <RouterLink to="/estudiantes">Estudiantes</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Crear</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Crear Nuevo Estudiante</h2>
    </div>

    <div class="row">
      <form @submit.prevent="crearEstudiante">
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

<style scoped></style>
