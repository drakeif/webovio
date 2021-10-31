const btn = document.getElementById('btn');

btn.addEventListener('click', (e) => {
    e.target.classList.toggle('active');
})