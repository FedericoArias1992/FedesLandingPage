import React from 'react';

const Tarea = () => {
  return (
    <div>
        <h1 className="text-xl text-color_secondary_2_0">Ejercicio #1</h1>
        <p> ● Crea un botón color azul siguiendo estos consejos, recuerda que las tonalidades predefinidas van del 100 al 900.
            ● Crea un botón que se adapte según el tamaño de dispositivo.
            ● Cuando sea de tamaño pequeño, este botón debe abarcar el ancho de la pantalla y cuando sea un poco más grande debe tener un tamaño predeterminado.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Botón Azul y responsive
        </button>
        <h1 className="text-xl text-color_secondary_1_2">Ejercicio #2</h1>
        <p>● Crea lo que se conoce como group button de 3 buttons o más. Esto lo logras utilizando lo aprendido en display o flexbox, así como margin y padding.</p>
        <div className='flex'>
            <button class="bg-blue-700 hover:bg-teal_medio text-white font-bold py-2 px-4 rounded-l">
                Botón 1
            </button>
            <button class="bg-teal_medio hover:bg-blue-700 text-white font-bold py-2 px-4">
                Botón 2
            </button>
            <button class="bg-color_secondary_1_0 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r">
                Botón 3
            </button>
        </div>
        <h1 className="text-xl text-color_primary_2">
           Tarea #3 
        </h1>
        <p>Cuando pases el cursor encima de uno de los botones deberá cambiar el fondo a un color más oscuro, de tal manera que resalte con el texto. Y al estar en estado normal, el fondo deberá ser claro y el texto, color oscuro</p>
        <div class="flex">
            <button class="bg-color_secondary_1_0 hover:bg-color_secondary_1_2 text-gray-800 hover:text-white font-bold py-2 px-4 rounded-l">
                Botón 1
            </button>
            <button class="bg-color_secondary_2_1 hover:bg-color_secondary_2_2 text-gray-800 hover:text-white font-bold py-2 px-4">
                Botón 2
            </button>
            <button class="bg-blue-300 hover:bg-blue-700 text-gray-800 hover:text-white font-bold py-2 px-4 rounded-r">
                Botón 3
            </button>
        </div>
       <h1 className="text-xl">Tarea #4: Extraer componentes usando @apply</h1>
        <p>
        Utilizando la directiva @apply, crea un componente de “alert” con sus variaciones para que se comporte distinto según la clase que le acompañe.
        </p>
        <ol>
            <li>Hay que crear:</li>
            <li> ● alert (default) - Utiliza un color neutro</li>
            <li>● alert (danger) - Utiliza un color rojo</li>
            <li>● alert (warning) - Utiliza un color amarillo o naranja</li>
            <li>● alert (info) - Utiliza un color azul</li>
        </ol>
        <h2 className="text-l text-color_secondary_1_1">Respuestas</h2>
        <div className='alert'> Este mensaje es una alerta default.</div>
        <div className='alert alert-danger'> 	Este mensaje es una alerta danger.</div>
        <div className='alert alert-warning'>Este mensaje es una alerta warning.</div>
        <div className='alert alert-info'>	Este mensaje es una alerta info.</div>
    </div>
  );
};

export default Tarea;