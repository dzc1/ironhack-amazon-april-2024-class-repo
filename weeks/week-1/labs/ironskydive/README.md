![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# Ejercicio guiado - IronSkydive 🎨 - estilo (CSS)

<br/>

## Introducción

A estas alturas, te has familiarizado con las Hojas de Estilo en Cascada (CSS), y sabes cómo

- orientar elementos usando etiquetas, clases o ids,
- trabajar con las propiedades de la fuente y el texto,
- añadir colores al texto y al fondo.

Recuerda abrir el **CodePen** que creaste al principio del ejercicio para hacer las diferentes iteraciones del mismo.

Vamos allá.

<br/>

## IDs

En primer lugar, vas a añadir cuatro ids, uno por cada `<section>`que hayas definido. De arriba a abajo, los ids deben ser

- `información general`
- `estructura`
- `equipo`
- `horario`

Esto nos va a ayudar a identificar las diferentes secciones. Esto también creó algo llamado [enlaces internos](http://www.yourhtmlsource.com/text/internallinks.html). ¿Qué sucede ahora si se hace clic en los enlaces`<nav>`en la parte superior de la página? ¡Se desplaza automáticamente hacia abajo a la sección! :white:

<br/>

## Configuración general para toda la página

Bien, empecemos a usar la pestaña CSS dentro de tu proyecto de CodePen. Empezaremos configurando toda la página para que utilice la siguiente regla (copie el fragmento al principio de la pestaña CSS):

```css
html,
body {
  margin: 0;
  padding: 0;
}
```

Esto va a eliminar el `margin` y el `padding` de todos los elementos, o en lenguaje sencillo, los pondrá a `0`. ¿Por qué hacemos esto? Estamos haciendo esto para restablecer algunos estilos que su navegador aplica automáticamente a los elementos, conocidos como _estilos por defecto del navegador_.

<br/>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_603c70d5d3664d3cd0d7829c6b0367cb.png)

<br/>

:thought_balloon: No te preocupes por lo que son las propiedades `margin` y `padding` ahora mismo, las discutiremos en un momento.

<br/>

## Fuente y texto

### font-family

Para todo el sitio web de IronSkydive, vamos a utilizar una fuente llamada `Roboto`. Puedes encontrarla en `https://fonts.google.com/`, el repositorio de Google que alberga un gran número de fuentes. Normalmente tienes que pasar por un proceso para incrustar una de estas fuentes en tu sitio, pero nosotros lo hemos simplificado para ti.

Al principio de la pestaña CSS de tu CodePen, copia la siguiente línea:

```css
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:700|Roboto:100,300,700');
```

Todavía no pasa nada. Sólo añade una referencia a dos fuentes diferentes:

- `Roboto`, con pesos de 100, 300 y 700.
- `Roboto Condensed`, con un peso de 700.

Usted va a utilizar ambos en su sitio web. Así que vamos a cambiar la fuente para todo el documento. Todo el documento debe tener el texto formateado de la siguiente manera:

- fuente: `Roboto`.
- tamaño: `10px`.
- altura de línea: `3.5em`.
- peso: `300`.

Recuerda: podemos apuntar a los elementos sobre los que queremos aplicar algunos estilos usando la clase o el id o el _nombre de la etiqueta_.Puedes usar la etiqueta `body` y añadirle estas respectivas propiedades CSS. Una vez definida la fuente para el documento, vamos a cambiar el comportamiento de los encabezados.

Si utilizas los encabezados del 1 al 5, utiliza un _multiselector_ que los seleccionará todos. Dentro de este selector, establece la fuente como `Roboto Condensed`. Modificaremos el tamaño de los encabezados en otro selector ya que cada uno de ellos tendrá un tamaño diferente.

```css
/* CSS multiselector example */

h1,
h2,
h3,
h4,
h5,
h6 {
  /*  define font-family here  */
}
```

El resultado debería ser algo así:

<br/>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_8772412e132f34f5246213a371f16ea5.png)

<br/>

### Propiedades del texto

Ahora mismo todas las fuentes tienen el mismo tamaño, vamos a cambiarlo. En primer lugar, vamos a estilizar los encabezados incluyendo las siguientes propiedades:

| Encabezado | Propiedades                                                  |
| ---------- | ------------------------------------------------------------ |
| `<h1>`     | Tamaño: `9em` <br/> Alinear: `center` <br/> Transformar: `uppercase` |
| `<h2>`     | Tamaño: `5em` <br/> Alinear: `center` <br/> Transformar: `uppercase` |
| `<h3>`     | Tamaño: `4.2em` <br/> Alinear: `center` <br/> [Altura de la línea](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height): `1em` |
| `<h4>`     | Tamaño: `1.5em` <br/> [Espacio entre letras](https://developer.mozilla.org/en/docs/Web/CSS/letter-spacing): `0.4px` <br/> [Altura de línea](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height): `1em` |
| `<h5>`     | Tamaño `1.2em` <br/> [Altura de línea](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height): `1em` |

Una vez aplicados estos estilos a las diferentes cabeceras que tenemos, `<h1>` y `<h2>` necesitan más espacio entre ellas. Vamos a añadir más espacio estableciendo la propiedad de altura de línea `<h2>` de`line-height ` a `4em`.

Ya has especificado todos los estilos de texto que necesitas tener en tu sitio web.

<br/>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_b0f5f1c39886cbe09c75630ca7706c2a.png)

<br/>

Genial, ahora vamos a añadir algunos colores a nuestro sitio web.

<br/>

## Colores

<br/>

Anteriormente, usted utilizó las propiedades de texto CSS para cambiar la apariencia del sitio web, añadiendo una fuente y tamaños personalizados, dependiendo de la etiqueta. ¡Ahora es el momento de darle un poco de color!

Cuando estás desarrollando un sitio web, es una buena práctica tener en cuenta una tabla con los diferentes colores que vas a utilizar. En este caso, la tabla es:

| Color       | RGB            | Resultado                                                    |
| ----------- | -------------- | ------------------------------------------------------------ |
| Azul        | `67, 163, 230` | <div style="background:rgb(67, 163, 230);height:20px;margin:0 auto;width:20px"></div> |
| Azul oscuro | `25, 33, 41`   | <div style="background:rgb(25, 33, 41);height:20px;margin:0 auto;width:20px"></div> |
| Texto       | `0, 0, 0`      | <div style="background:rgb(0, 0, 0);height:20px;margin:0 auto;width:20px"></div> |

Esta tabla le ayudará a comunicarse con su equipo de diseño UX/UI. Cuando te digan que apliques el `dark blue` como color de fondo, sabrás inmediatamente de qué color se trata.

Vamos a describir uno a uno los cambios que tienes que aplicar sobre las diferentes secciones que definimos en la primera iteración de este ejercicio. Recuerda el diseño que hemos creado:

<br/>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_8f778c8cd703db596d5bb22dae089716.jpg)

<br/>

Abre CodePen en tu navegador, y ¡comencemos!

<br/>

### Nav

<br/>

El objetivo final de la barra `de` navegación es el siguiente:

<br/>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_065124c74d928a12e32e446b759968e3.png)

<br/>

Empecemos por añadir el color. Añade el `dark blue` como color de fondo.

Es una buena práctica usar selectores de clase en lugar de usar selectores de etiquetas HTML para definir estilos. ¿Qué pasa si aplicas un estilo a la etiqueta `nav` y en el futuro la cambias a `header`? Perderías todos los estilos, y los cambiarías uno a uno en el CSS.

Crea un selector en tu ficha CSS llamado `.nav-bar`, y asigna el estilo descrito anteriormente. Luego, asigna la clase a la etiqueta `nav` en tu HTML.

<br/>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_320885335d288348997362c44aa6f6b0.png)

<br/>

Ya funciona... más o menos. Tenemos que establecer el color de los enlaces en blanco y si intentas establecer la propiedad `color: white` dentro de la clase `.nav-bar`, no funcionará porque las palabras/enlaces están envueltas dentro de una etiqueta `a`.

Podemos ir en la dirección de la creación de una nueva clase y adjuntar la clase a cada elemento `li` dentro de`<nav>`, o podemos ir **DRY** (Don't Repeat Yourself) y evitar la creación de una clase más, pero en lugar de eso, la referencia de los elementos que queremos orientar a través de la clase existente `.nav-bar`.

```css
.nav-bar a {
  /*  styles to be added here    */
}
```

<!-- Let's create another class, called `nav-bar-item`, and -->

Cambia el `color` a _blanco_, el `text-decoration` a _none_ y el `font-size` a `2em` para obtener el resultado deseado.

<br/>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_e03b2f8983da0df77b6e88f973cfc0c5.png)

<br/>

En las siguientes iteraciones, vas a completar el menú. Estás listo para pasar a la siguiente sección.

<br/>

### Encabezado

<br/>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_e80b0ee85c8f2fb8126befe68b152ab2.png)

<br/>

No tengas miedo. Es más fácil de lo que parece. En primer lugar, tienes que establecer la imagen de [fondo](https://developer.mozilla.org/en/docs/Web/CSS/background-image?v=control). Las propiedades de la imagen de fondo son

- **url:** `https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/ironhack-skydive-background.jpg.`
- **posición:** `0 0`.
- **repetir**: `no-repeat`
- **tamaño**: `cover`.

Recuerda que debes crear una clase, en este caso `header`, y asignarla a la etiqueta `header` en tu HTML para usar este estilo. Ahora, sólo hay que establecer la altura de la `header` a `650px`.

El siguiente paso es cambiar el color de `h2` a blanco, y luego añadirle una sombra de [`texto`](https://developer.mozilla.org/en/docs/Web/CSS/text-shadow). La propiedad `text-shadow` debe tener como valor `#020819 8px -20px 9px`.

Para terminar esta sección, cambie el tamaño de la fuente de la cita. Póngalo a `2.5em`. Crea una clase de `quote` para hacer eso, y añade la clase a la etiqueta `aside` en el HTML.

<br/>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_c03f57b39ea0d76161156d6e58d91307.png)

<br/>

### Sección 1

En una de las iteraciones anteriores, añadiste un _id_ `general-information` a esta sección. Nuestro objetivo final para esta sección es:

<br/>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_505f90aabf6c0d4e03b4216c07c615f8.png)

<br/>

Crear un selector de clase `dark-background`, que aplique las siguientes propiedades

- color de fondo: dark blue (mira la tabla al principio de esta iteración).
- color: blanco.

Una vez creada la clase en tu CSS, añádela a la sección. Después de aplicar la clase, puedes ver que el texto en el````es diminuto, y no está centrado. Vamos a solucionar este problema.

Primero, a cada párrafo dentro de la sección `general-information`, añade una clase de `text`.

<!-- Then create a multiple selector, that selects all the elements with a `.text` class inside the `#general-information` element. -->

Este selector debe tener las siguientes propiedades CSS:

- Tamaño de la fuente: `2em`.
- Peso de la fuente: `100`.
- Alineación del texto: `centro`.

Mucho mejor. Terminemos esta sección añadiendo algunos estilos a los enlaces. Los enlaces se verán como botones, y todos los enlaces de esta sección tendrán la misma apariencia. Esto significa que debes crear una clase que aplique las propiedades CSS necesarias a un enlace para que se parezca a un botón.

<br/>

:::info

:bulb: **¿Por qué no usar un botón?** Consulta [esta respuesta muy concisa de StackOverflow](https://stackoverflow.com/a/25350722/4624718) para conocer una buena regla general
:::

<br/>

Vamos a crear una clase `link-btn` con las siguientes propiedades:

- color de fondo: azul (mira la tabla al principio de esta iteración).
- color: blanco.
- font-family: `Roboto Condensed`.
- tamaño de la fuente: `2em`.
- [Espacio entre letras](https://developer.mozilla.org/en/docs/Web/CSS/letter-spacing): `0.5px`.
- alineación del texto: `center`.
- text-decoration: `none`.

Añade la clase a los tres enlaces que tienes en la sección.

<br/>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_7847968ca22bceb75dac295214859d36.png)

<br/>

Hmm... Parece que necesitamos una manera de reordenar nuestros elementos y ponerlos en ciertas posiciones. Este será el objetivo de una de las próximas iteraciones.

Pasemos a la siguiente sección.

### Sección 2

En la segunda sección, hemos añadido un id de `structure`. En esta sección, sólo hay que configurar las propiedades de tamaño de fuente y alineación.

<!-- You will also remove the `img` width property, and set it in the CSS. -->

Crea una clase `service-box` en el CSS, con las siguientes propiedades:

- Tamaño de la fuente: `1.7em`.
- Alineación del texto: `center`.

Asigna esta clase a cada `article` dentro de la sección de `structure`.

Ahora, crea nuevos selectores múltiples para todas las clases `img`, dentro de la clase `service-box`.

:+1: Spoiler: Similar a lo que ya hiciste con los enlaces en la navbar, aquí tendremos lo siguiente:

```css
.service-box img {
  /*  styles to be added  */
}
```

Añadir una propiedad dentro para establecer el ancho de estas imágenes a `125px`.

<br/>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_85b85fdc98c951967b3554ee821cbfaa.png)

<br/>

### Sección 3

El objetivo más importante al escribir CSS de calidad es crear clases que podamos reutilizar. En esta sección, volvemos a tener el azul oscuro como color de fondo. Anteriormente ha creado una clase de fondo oscuro y ahora añade esta clase a la sección del equipo.

Ahora, tienes que crear dos clases diferentes - una para el texto de la sección, y otra para los nombres de los miembros del equipo. La primera clase, `section-text`, tendrá un tamaño de fuente de `1.9em`, y el texto deberá estar alineado al `centro`.

Por otro lado, la clase `member-name` tendrá un tamaño de fuente de `1,`5em, con un peso de fuente de `700`. Añade la primera clase a la `p` en el HTML, y la segunda a todas las etiquetas `h4`.

Para evitar que las propiedades sobrescriban otras clases, crea un selector múltiple para establecer estas clases específicamente dentro del elemento id del equipo:

```css
#team .section-text {
}

#team .member-name {
}
```

Además, vamos a ocuparnos de las imágenes de esta sección. Como podemos ver son súper grandes. Usemos selectores múltiples para apuntar a las etiquetas `img` dentro de `#team` y establezcamos el:

- width a 250px y
- height a 180px.

:+1: Spoiler:

```css
#team img {
  /* styles to be added here */
}
```

<br/>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_dbe16d63517310a82a988f9f13df4867.png)

<br/>

### Sección 4

_Aquí no hay nada que hacer... ¡todavía!_

### Pie de página

De nuevo, tenemos un fondo oscuro y un texto blanco. Añade la clase de ` dark-background` a la etiqueta de `footer ` en el HTML. Crea una clase de `footer` y añádela como segunda clase en la etiqueta `<footer>`. Usa esta clase para centrar todo el texto dentro de este elemento y para establecer el tamaño de la fuente a `1.9em`.

:+1: Spoiler: Para añadir una segunda clase, tienes que hacer lo siguiente:

```html
<!-- ... -->

<footer class="dark-background footer">
  <!-- ... -->
</footer>
```

Ahora, crea una nueva clase - `address`, y asígnala a la etiqueta HTML `address`. En esta clase, definir:

- estilo de fuente: `normal`.
- tamaño de la fuente: `0.8em`.

Ya casi hemos terminado. De la misma manera que hemos seleccionado todos los enlaces dentro de la barra de navegación (utilizando un enfoque de selección múltiple), aquí vamos a seleccionar todos los enlaces dentro del pie de página y sus estilos:

- color: azul (mira la tabla al principio de esta iteración).
- text-decoration: none.

Asigna esta clase a cada elemento dentro de la lista que tienes en el pie de página.

:+1: Spoiler: La forma de hacerlo es la siguiente:

```css
.footer a {
  /* styles to be added here */
}
```

Y uno, lo último para esta iteración es quitar los puntos de la lista que está mostrando los enlaces de las redes sociales. Usted puede apuntar a la etiqueta `ul` dentro del pie de página y establecer la propiedad `list-style` a _ninguno_. ¡Así que aquí está!

<br/>

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_791457cbe452066c3123de22f4182eb8.png)

<br/><br/>

:heart: **¡Feliz codificación!**