// Inicializar AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true
});



// Animación para el título principal
document.addEventListener('DOMContentLoaded', () => {
    const mainTitle = document.querySelector('.banner h1');
    mainTitle.style.opacity = '0';
    mainTitle.style.transform = 'translateY(-50px)';
    
    setTimeout(() => {
        mainTitle.style.transition = 'all 1s ease';
        mainTitle.style.opacity = '1';
        mainTitle.style.transform = 'translateY(0)';
    }, 500);
});

// Efecto hover para las columnas
document.querySelectorAll('.col-md-4').forEach(col => {
    col.addEventListener('mouseenter', () => {
        col.style.transition = 'transform 0.3s ease';
        col.style.transform = 'translateY(-10px)';
    });
    
    col.addEventListener('mouseleave', () => {
        col.style.transform = 'translateY(0)';
    });
});