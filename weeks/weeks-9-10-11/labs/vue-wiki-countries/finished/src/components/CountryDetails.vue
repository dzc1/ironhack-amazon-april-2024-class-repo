<template>
  <div>
    <div class="d-flex justify-content-center">
      <img
        :src="`https://flagcdn.com/w320/${infoPais.alpha2Code.toLowerCase()}.png`"
        alt=""
        class="mb-4"
      />
    </div>
    <h2>{{ infoPais.name.common }}</h2>
    <ul class="list-group list-group-flush">
      <li
        class="list-group-item d-flex justify-content-between align-items-center mb-4"
      >
        <p class="fw-bold">Capital</p>
        <p>{{ infoPais.capital[0] }}</p>
      </li>
      <li
        class="list-group-item d-flex justify-content-between align-items-center mb-4"
      >
        <p class="fw-bold">Area</p>
        <p>{{ infoPais.area }}km<sup>2</sup></p>
      </li>
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <p class="fw-bold">Borders:</p>
        <p v-if="infoPais.borders.length === 0">
          Disculpa, este pais es una isla.
        </p>
        <RouterLink
          v-else
          v-for="(frontera, index) in infoPais.borders"
          :key="index"
          :to="`/list/${frontera}`"
        >
          {{ frontera }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { useRoute } from "vue-router";

// definimos var reacrtiva para usar con vue :)
let infoPais = ref(null);

// var para poder usar la ruta por parte del metodo de una amnera facil
let route = useRoute();

// func que sencarga de hacer un fetch al api y comparando el alpha3Code que recibimos por parte del url y compara para hacer un display correcto del detalle del pais.
let recibirAlphaTresCode = async () => {
  let codigoAlphaTres = route.params.alpha3Code;
  //console.log(codigoAlphaTres);

  // las llamadas a la api
  let respuesta = await fetch(
    `https://ih-countries-api.herokuapp.com/countries/${codigoAlphaTres}`
  );
  console.log(respuesta);
  // aca limpiamos la info del json
  let respuestaLimpia = await respuesta.json();
  //console.log(respuestaLimpia);

  //apuntamos a var dreactiva y guardamos info
  infoPais.value = respuestaLimpia;

  // retornamos destructuradamengte apara poder en el fututro retornar mas de 1 cosa
  return { infoPais };
};
recibirAlphaTresCode();

onMounted(() => recibirAlphaTresCode());

// func computada
let codigoPais = computed(() => route.params.alpha3Code);
console.log(codigoPais);

// watchers,
// es comom un vigilante, ssta pendiente de algun cambio o monitorea tu compoonente. watcher sigue siendo un metodo nativo de vue.
// 1 regla -siendo uin metodo recibe dentro de los() un func anonima.
// 2 regla - antes de la func anonima, tu tienes que especificarle al metodo watch() que monitorear en teoria
watch(codigoPais, () => {
  //console.log(nuevoCodigoAlpha3);
  recibirAlphaTresCode();
});
</script>
