/*Aquí van las caracteristicas de funcionamiento pokimon*/


class Pokemon {
    constructor(nombre, tipo, ataque, defensa, habilidad, evolucion) {
      this.nombre = nombre;
      this.tipo = tipo;
      this.ataque = ataque;
      this.defensa = defensa;
      this.habilidad = habilidad;
      this.evolucion = evolucion;
      this.vida = 100; // Todos los Pokémon comienzan con 100 de vida
    }
  
    recibirAtaque(daño) {
      this.vida -= daño;
      if (this.vida < 0) {
        this.vida = 0;
      }
    }
    }
    