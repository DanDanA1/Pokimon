class Batalla {
    constructor(entrenador1, entrenador2) {
      this.entrenador1 = entrenador1;
      this.entrenador2 = entrenador2;
    }
  
    iniciarBatalla() {
      console.log(`¡Comienza la batalla entre ${this.entrenador1.nombre} y ${this.entrenador2.nombre}!`);
  
      let pokemon1 = this.entrenador1.pokemon[0];
      let pokemon2 = this.entrenador2.pokemon[0];
  
      while (pokemon1.vida > 0 && pokemon2.vida > 0) {
       
        let daño1 = calcularDaño(pokemon1, pokemon2);
        pokemon2.recibirAtaque(daño1);
        console.log(`${pokemon1.nombre} ataca a ${pokemon2.nombre} e inflige ${daño1} de daño.`);
  
        if (pokemon2.vida <= 0) {
          console.log(`${pokemon2.nombre} se ha debilitado. ¡${pokemon1.nombre} gana!`);
          break;
        }
  
       
        let daño2 = calcularDaño(pokemon2, pokemon1);
        pokemon1.recibirAtaque(daño2);
        console.log(`${pokemon2.nombre} ataca a ${pokemon1.nombre} e inflige ${daño2} de daño.`);
  
        if (pokemon1.vida <= 0) {
          console.log(`${pokemon1.nombre} se ha debilitado. ¡${pokemon2.nombre} gana!`);
          break;
        }
  
        // Simular defensa (opcional)
        defender(pokemon1);
        defender(pokemon2);
      }
    }
  }