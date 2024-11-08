const app = {
    data() {
        return {
            frutas: [
                { nombre: 'Manzana', cantidad: 15, precioUnitario: 5 },
                { nombre: 'Fresas', cantidad: 2, precioUnitario: 20 }
            ],
            nuevaFruta: '',
            nuevaCantidad: 0,
            nuevoPrecio: 0,
        };
    },
    methods: {
        montoFruta(index) {
            const fruta = this.frutas[index];
            return fruta.cantidad * fruta.precioUnitario;
        },
        incrementarCantidad(index) {
            this.frutas[index].cantidad++;
        },
        decrementarCantidad(index) {
            if (this.frutas[index].cantidad > 0) {
                this.frutas[index].cantidad--;
            }
        },
        agregarNuevaFruta() {
            if (this.nuevaFruta && this.nuevoPrecio > 0 && this.nuevaCantidad >= 0) {
                this.frutas.push({
                    nombre: this.nuevaFruta,
                    cantidad: this.nuevaCantidad,
                    precioUnitario: this.nuevoPrecio
                });
                this.nuevaFruta = '';
                this.nuevaCantidad = 0;
                this.nuevoPrecio = 0;
            } else {
                alert("Ingrese todos los datos correctamente.");
            }
        },
        eliminarFruta(index) {
            this.frutas.splice(index, 1);  // Elimina la fruta en el índice especificado
        }
    },
    computed: {
        totalFrutas() {
            return this.frutas.reduce((total, fruta) => total + fruta.cantidad, 0);
        },
        calcularSubtotal() {
            return this.frutas.reduce((total, fruta) => total + (fruta.cantidad * fruta.precioUnitario), 0);
        },
        calcularIVA() {
            return this.calcularSubtotal * 0.16;
        },
        calcularTotal() {
            return this.calcularSubtotal + this.calcularIVA;
        }
    }
};

Vue.createApp(app).mount('#app');
