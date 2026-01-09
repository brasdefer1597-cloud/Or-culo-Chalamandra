export const validarAccesoMagistral = () => {
    // Verificamos un token o bandera en el almacenamiento local
    const accesoAutorizado = localStorage.getItem('chalamandra_premium_access');

    // Bypass check for localhost to allow verification/development without payment flow every time
    // In production, this check is strict.
    // const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    // if (isLocalhost) return;

    if (!accesoAutorizado || accesoAutorizado !== 'true') {
        console.warn("Acceso denegado: Usuario no ha pasado por el puente de pago.");
        window.location.href = '/demo.html'; // Redirección al gancho
    }
};

export const activarAccesoPremium = () => {
    localStorage.setItem('chalamandra_premium_access', 'true');
    // Limpiar rastro de bienvenida para que el modal aparezca como "Bienvenida Magistral"
    localStorage.removeItem('chalamandra_welcome_seen');
    window.location.href = '/index.html'; // Salto a la experiencia completa
};
