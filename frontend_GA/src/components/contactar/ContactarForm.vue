<script setup lang="ts"></script>
<template>
  <div class="contact-form-container">
    <h2>Comunicate con nuestros Docentes</h2>
    <form>
      <div class="form-group">
        <label for="nombre">Para:</label>
        <input type="email" id="email" required />
      </div>

      <div class="form-group">
        <label for="nombre">De:</label>
        <input type="text" id="nombre" required />
      </div>

      <div class="form-group">
        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" required />
      </div>

      <div class="form-group">
        <label for="asunto">Asunto:</label>
        <input type="text" id="asunto" required />
      </div>

      <div class="form-group">
        <label for="mensaje">Mensaje:</label>
        <textarea id="mensaje" required></textarea>
      </div>

      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<style scoped>
.contact-form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #ff0000;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #b30000;
}
</style>
