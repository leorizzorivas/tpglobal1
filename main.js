window.onload = function() {
    const servicios = [
        {
            nombre: "Sesiones de Coaching",
            descripcion: "Las sesiones de coaching están diseñadas para ayudar a los individuos a alcanzar sus metas personales y profesionales a través de un acompañamiento personalizado."
        },
        {
            nombre: "Sesiones de Estimulación Cognitiva",
            descripcion: "Estas sesiones buscan mejorar las funciones cognitivas a través de actividades que estimulan la memoria, la atención y el razonamiento."
        },
        {
            nombre: "Sesiones de Estimulación Física",
            descripcion: "Ofrecemos sesiones de estimulación física que promueven la actividad física y el bienestar general a través de ejercicios adaptados a cada persona."
        }
    ];
    const contenedor = document.createElement('div');
    contenedor.className = 'servicios-lista';
    
    const titulo = document.createElement('h2');
    titulo.textContent = 'Nuestros Servicios';
    contenedor.appendChild(titulo);
    
    const lista = document.createElement('ul');
    servicios.forEach(servicio => {
        const item = document.createElement('li');
        item.textContent = servicio.nombre;
        item.onclick = function() {
            alert(servicio.descripcion); // Cambia esto por un modal si lo deseas
        };
        lista.appendChild(item);
    });
    
    contenedor.appendChild(lista);
    document.body.appendChild(contenedor);
};

