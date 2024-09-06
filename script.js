document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    // Burger menu toggle
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Intersection Observer untuk animasi scroll
    const sections = document.querySelectorAll('.section-content');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);  // Hentikan pengamatan setelah elemen terlihat
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('homeContentDisplay').innerHTML = localStorage.getItem('homeContent') || '';
    document.getElementById('materiContentDisplay').innerHTML = localStorage.getItem('materiContent') || '';
    document.getElementById('jadwalContentDisplay').innerHTML = localStorage.getItem('jadwalContent') || '';
    document.getElementById('tugasContentDisplay').innerHTML = localStorage.getItem('tugasContent') || '';
    document.getElementById('sumberdayaContentDisplay').innerHTML = localStorage.getItem('sumberdayaContent') || '';
});

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors()); // Mengizinkan semua origin
app.use(express.json());

app.post('/api/update-content', (req, res) => {
    const data = req.body;
    res.json({ status: 'success', data: data });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
