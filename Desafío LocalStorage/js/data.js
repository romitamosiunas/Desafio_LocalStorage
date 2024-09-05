document.addEventListener('DOMContentLoaded', function() {
    const storedData = localStorage.getItem('storedData');
    document.getElementById('data').textContent = storedData ? storedData : 'No hay datos almacenados.';
});
