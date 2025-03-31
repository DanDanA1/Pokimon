function calcularDaño(atacante, defensor) {
    let daño = atacante.ataque - defensor.defensa;
    if (daño < 0) {
      daño = 0; // El daño no puede ser negativo
    }
    return daño;
  }
  
  function defender(defensor) {
    // Aquí puedes agregar lógica para habilidades defensivas o efectos especiales
    console.log(`${defensor.nombre} se está defendiendo.`);
  }