document.addEventListener('DOMContentLoaded', function() {
    const botonAgregar = document.getElementById('miboton');
    const botonMostrar = document.getElementById('mostrarResultados');
    const resultado = document.getElementById('resultado');
    const triángulos = [];
    const MAX_TRIANGULOS = 5;

    botonAgregar.addEventListener('click', function() {
       
        const l1 = parseFloat(document.getElementById('lado1').value);
        const l2 = parseFloat(document.getElementById('lado2').value);
        const l3 = parseFloat(document.getElementById('lado3').value);

        
        if (triángulos.length >= MAX_TRIANGULOS) {
            resultado.textContent = `Ya se han ingresado ${MAX_TRIANGULOS} triángulos.`;
            return;
        }

        
        triángulos.push({ l1, l2, l3 });

        
        document.getElementById('lado1').value = '';
        document.getElementById('lado2').value = '';
        document.getElementById('lado3').value = '';
    });

    botonMostrar.addEventListener('click', function() {
       
        let equilatero = 0;
        let isosceles = 0;
        let escaleno = 0;

      
        for (let i = 0; i < triángulos.length; i++) {
            const { l1, l2, l3 } = triángulos[i];

            if (l1 === l2 && l1 === l3) {
                equilatero++;
            } else if (l1 === l2 || l1 === l3 || l2 === l3) {
                isosceles++;
            } else {
                escaleno++;
            }
        }

       
        resultado.textContent = `Triángulos Equiláteros: ${equilatero}\nTriángulos Isósceles: ${isosceles}\nTriángulos Escalenos: ${escaleno}`;
    });
});