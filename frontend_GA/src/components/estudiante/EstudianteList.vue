<script setup lang="ts">
import type { Estudiante } from '@/models/estudiante'
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
var estudiantes = ref<Estudiante[]>([])

async function getEstudiantes() {
  estudiantes.value = await http.get(ENDPOINT).then((response) => response.data)
}

function toEdit(id: number) {
  router.push(`/estudiantes/editar/${id}`)
}

async function toDelete(id: number) {
  var r = confirm('¿Está seguro que se desea eliminar el Estudiante?')
  if (r == true) {
    await http.delete(`${ENDPOINT}/${id}`).then(() => getEstudiantes())
  }
}

function formatoFecha(fecha: string | number | Date) {
  return new Date(fecha).toLocaleDateString(undefined, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })
}

onMounted(() => {
  getEstudiantes()
})
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">Estudiantes</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Lista de Estudiantes</h2>
      <div class="col-12">
        <RouterLink to="/estudiantes/crear"
          ><font-awesome-icon icon="fa-solid fa-plus" /> Crear Nuevo</RouterLink
        >
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">N°</th>
            <th scope="col">CI</th>
            <th scope="col">Nombres</th>
            <th scope="col">Apellidos</th>
            <th scope="col">Fecha de Nacimiento</th>
            <th scope="col">Curso</th>
            <th scope="col">Usuario</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(estudiante, index) in estudiantes.values()" :key="estudiante.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ estudiante.ci }}</td>
            <td>{{ estudiante.nombres }}</td>
            <td>{{ estudiante.apellidos }}</td>
            <td>{{ formatoFecha(estudiante.fechaNacimiento) }}</td>
            <td>{{ estudiante.curso.grado }}</td>
            <td>{{ estudiante.usuario.usuario }}</td>
            <td>
              <button class="btn btn-link" @click="toEdit(estudiante.id)">
                <font-awesome-icon icon="fa-solid fa-edit" />
              </button>
              <button class="btn btn-link" @click="toDelete(estudiante.id)">
                <font-awesome-icon icon="fa-solid fa-trash" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
