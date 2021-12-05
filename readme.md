<table style="font-family: Verdana, Geneva, Tahoma, sans-serif;">
  <h1>Boton Flotante de Whatsapp</h1>
  <h2>Instrucciones</h2>
  <hr>
  <table>
    <h3>1 - Obtener enlace de Whatsapp web</h3>
    <p>
      La red Social Whatsapp nos provee un enlace para cada
      usuario de la red social.
    </p>
    <p>
      El enlace siempre es el mismo solo que deben cambiar
      dentro de la variable de enlace
       <kdb>send?phone=</kdb> seguido deberan ingresar
      su numero de telefono.
    </p>
    <code>
      https://api.whatsapp.com/send?phone=<span style="color:green">NumberPhone</span>
    </code>


  </table>

  <hr>

  <table>
    <h3>2 - Mensaje predeterminado</h3>
    <p>
      Tambien podremos añadir un mensaje predeterminado a Whatsapp web
      Simplemente añadiendo un parametro opcional de
       <kdb>text</kdb> Donde agregaremos el texto que deseemos.
      Lo importante es que no se pueden poner espacios en un enlace asi que debemos
      reemplazar los espacios con <kbd>%20</kbd>
    </p>
    <code>
      https://api.whatsapp.com/send?phone=<span style="color:green">NumberPhone</span>&text<span style="color:green">%20Soy%20un%20mensaje<span>
    </code>

  <hr>

  <table>
    <h3>3 - Documentos del repositorio</h3>
    <p>
      Este repostitorio solo cuenta don dos archivos <kdb>index.html</kdb> y <kdb>style.css</kdb>
      Pero usted puede copiar fragmentos del codigo en algun proyecto ya existente.
    </p>
    <p>
      Las recomendaciones es que usted pegue el siguiente fragmento encima de todo dentro de la etiqueta body y copiar el contenido del archivo de estilos en el lugar indicado de su codigo.
    </p>
    <h4>index.html</h4>
  </table>
</table>




```javascript
      <!--Caja de WhatsappBox-->
      <div class="whatsapp-box">
          <a href="https://api.whatsapp.com/send?phone=+541170139816&text=Hola%20Me%20Gusto%20tu%20repositorio" class="whatsapp-enlace" target="_blank">
            <!--Svg del Icono de Whatsapp , provisto por bootstrap icons-->
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
            </svg>
          </a>
      </div>


  ```


<hr>
