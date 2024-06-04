<script setup>
/* Existen dos formas de cargar componentes asíncronos, vamos a verlas a continuación
El import del defineAsyncComponent es siempre obligatorio*/
import { defineAsyncComponent } from "vue";

const AsyncComp1 = defineAsyncComponent(() => {
  return new Promise((resolve, reject) => {
    // ...aquí el componente que queremos obtener del servidor
    resolve(import("./async/MyComponent1.vue"));
  });
  //Podríamos añadir un reject("mensaje") en caso de que el componente de algún fallo.
});
// ... usa este componente como si fuese un componente normal más.

const AsyncComp2 = defineAsyncComponent(() =>
  import("./async/MyComponent2.vue")
);

/*¿Cuándo querremos usar los async components? 
Generalmente cuando importamos un componente desde una base de datos o queremos aplicar un lazy-load.
De esta forma la página es rápida y funcional hasta que sea necesario el componente. En ese momento la función defineAsyncComponent nos cargará el componente. 

¿Puedo mandarle datos a un componente asíncrono?
Sí, tal y como lo harías a un componente normal. La función defineAsyncComponent ya lo gestiona por notros. */

/*Por último, podemos cargar componentes alternativos. Si nos falla la carga al importar un componente, podemos llamar, en su lugar, a un componente al que llamaremos "error" o "errorComponent".*/
const AsyncCompWithError = defineAsyncComponent({
  // usamos el parámetro loader: para indicar cuál es el componente que queremos cargar.
  loader: () => import("./async/LoaderComp.vue"),

  // Mientras no hemos cargado, podremos usar un componente alternativo.
  loadingComponent: () => import("./async/LoadComponent.vue"),
  // Delay que introducimos de forma forzada para que de tiempo al otro componente a cargar. Si lo ponemos en 20 segundos le dará al otro componente 20 segundos para cargar, en caso de que no lo consiga, se mostrará este.
  //Default: 200ms.
  delay: 200,

  // Si la carga falla, usaremos este componente
  errorComponent: () => import("./async/ErrorComponent.vue"),
  // Este componente también se carga en caso de exceso de tiempo de carga, vamos a poner un timer de 3s. Default: Infinity.
  timeout: 3000,
});
</script>

<template>
  <div class="async-box">
    <br />
    <h1>I'm an async component</h1>
    <AsyncComp1></AsyncComp1>
    <AsyncComp2
      name="Soy un ejemplo de prop a un componente asíncrono"
    ></AsyncComp2>
    <AsyncCompWithError />
  </div>
</template>

<style>
.async-box {
  background-color: aqua;
}
</style>
