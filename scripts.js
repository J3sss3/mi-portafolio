document.addEventListener('DOMContentLoaded', () => {
    const proyectos = document.querySelectorAll('.proyecto');

    const onScroll = () => {
        proyectos.forEach(proyecto => {
            if (isInViewport(proyecto)) {
                proyecto.classList.add('visible');
            }
        });
    };

    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
    };

    window.addEventListener('scroll', onScroll);
    onScroll();  // Para aplicar las animaciones al cargar la página
});
