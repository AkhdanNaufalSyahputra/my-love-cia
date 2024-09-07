document.getElementById('revealButton').addEventListener('click', function() {
    // Hapus video setelah tombol diklik
    const video = document.getElementById('backgroundVideo');
    if (video) {
        video.remove(); // Hapus video latar belakang
    }

    // Tambahkan gambar latar belakang setelah video dihapus
    document.body.style.backgroundImage = "url('bac.jpeg')";
    document.body.style.backgroundSize = 'cover'; // Agar gambar menutupi seluruh layar
    document.body.style.backgroundPosition = 'center'; // Posisi gambar di tengah
    document.body.style.backgroundRepeat = 'no-repeat';

    // Tampilkan gambar-gambar
    const images = document.querySelectorAll('#photoGallery img');
    images.forEach(img => img.classList.remove('hidden'));

    // Sembunyikan elemen lainnya
    document.querySelector('h1').style.display = 'none';
    document.querySelector('p').style.display = 'none';
    document.querySelector('button').style.display = 'none';

    // Menampilkan lirik
    const lyrics = `
        Kau adalah darahku, 
        Kau adalah jantungku,
        Kau adalah hidupku, lengkapi diriku
        Oh sayangku kau begitu
        Sempurnaaaaa ohhh cayangkuu
    `;
    const lyricsDiv = document.getElementById('lyrics');
    lyricsDiv.classList.add('show');
    lyricsDiv.innerHTML = ''; // Kosongkan konten sebelumnya
    const words = lyrics.split(' ');
    words.forEach((word, index) => {
        setTimeout(() => {
            const span = document.createElement('span');
            span.className = 'word';
            span.textContent = word + ' ';
            lyricsDiv.appendChild(span);
            span.style.opacity = 1;
        }, index * 300); // Delay 300ms per kata
    });
});
