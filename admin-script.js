document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('updateForm');
    const fotoKelas = document.getElementById('fotoKelas');
    const fotoPreview = document.getElementById('fotoPreview');

    // Load existing data
    document.getElementById('homeContent').value = localStorage.getItem('homeContent') || '';
    document.getElementById('materiContent').value = localStorage.getItem('materiContent') || '';
    document.getElementById('jadwalContent').value = localStorage.getItem('jadwalContent') || '';
    document.getElementById('tugasContent').value = localStorage.getItem('tugasContent') || '';
    document.getElementById('sumberdayaContent').value = localStorage.getItem('sumberdayaContent') || '';

    // Preview gambar saat diunggah
    fotoKelas.addEventListener('change', () => {
        const file = fotoKelas.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const img = document.createElement('img');
                img.src = reader.result;
                img.alt = 'Foto Kelas';
                fotoPreview.innerHTML = ''; // Hapus foto lama jika ada
                fotoPreview.appendChild(img);
            }
            reader.readAsDataURL(file);
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Save text data
        localStorage.setItem('homeContent', document.getElementById('homeContent').value);
        localStorage.setItem('materiContent', document.getElementById('materiContent').value);
        localStorage.setItem('jadwalContent', document.getElementById('jadwalContent').value);
        localStorage.setItem('tugasContent', document.getElementById('tugasContent').value);
        localStorage.setItem('sumberdayaContent', document.getElementById('sumberdayaContent').value);

        // Save image data
        const fotoFile = fotoKelas.files[0];
        if (fotoFile) {
            const reader = new FileReader();
            reader.onload = () => {
                localStorage.setItem('fotoKelas', reader.result);
            }
            reader.readAsDataURL(fotoFile);
        }

        alert('Konten telah diperbarui!');
    });

    // Load and display existing photo
    if (localStorage.getItem('fotoKelas')) {
        const img = document.createElement('img');
        img.src = localStorage.getItem('fotoKelas');
        img.alt = 'Foto Kelas';
        fotoPreview.innerHTML = ''; // Hapus foto lama jika ada
        fotoPreview.appendChild(img);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('updateForm');
    const fotoKelas = document.getElementById('fotoKelas');
    const fotoPreview = document.getElementById('fotoPreview');

    // Preview gambar saat diunggah
    fotoKelas.addEventListener('change', () => {
        const file = fotoKelas.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const img = document.createElement('img');
                img.src = reader.result;
                img.alt = 'Foto Kelas';
                fotoPreview.innerHTML = ''; // Hapus foto lama jika ada
                fotoPreview.appendChild(img);
            }
            reader.readAsDataURL(file);
        }
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Ambil data dari form
        const data = {
            homeContent: document.getElementById('homeContent').value,
            materiContent: document.getElementById('materiContent').value,
            jadwalContent: document.getElementById('jadwalContent').value,
            tugasContent: document.getElementById('tugasContent').value,
            sumberdayaContent: document.getElementById('sumberdayaContent').value,
        };
        document.addEventListener('DOMContentLoaded', function() {
            const fotoKelasInput = document.getElementById('fotoKelas');
            const fotoPreview = document.getElementById('fotoPreview');
            const updateForm = document.getElementById('updateForm');
        
            fotoKelasInput.addEventListener('change', function() {
                fotoPreview.innerHTML = '';
                const file = fotoKelasInput.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        const img = document.createElement('img');
                        img.src = e.target.result;
                        img.style.width = '100%';
                        img.style.height = 'auto';
                        img.style.borderRadius = '8px';
                        img.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
                        fotoPreview.appendChild(img);
                    };
                    reader.readAsDataURL(file);
                }
            });
        
            updateForm.addEventListener('submit', function(event) {
                event.preventDefault();
                // Handle form submission here
                const jumlahSiswa = document.getElementById('jumlahSiswa').value;
                console.log('Jumlah Siswa:', jumlahSiswa);
                // You can add code here to send the data to the server or update the page content
            });
        });
        

        // Kirim data ke API
        const response = await fetch('http://localhost:3000/api/update-content', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert('Konten telah diperbarui!');
        } else {
            alert('Gagal memperbarui konten.');
        }
    });
});
