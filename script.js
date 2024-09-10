document.getElementById('revealButton').addEventListener('click', function() {
    const video = document.getElementById('backgroundVideo');
    if (video) {
        video.remove(); 
    }

    document.body.style.backgroundImage = "url('bac.jpeg')";
    document.body.style.backgroundSize = 'cover'; 
    document.body.style.backgroundPosition = 'center'; 
    document.body.style.backgroundRepeat = 'no-repeat';

    const images = document.querySelectorAll('#photoGallery img');
    images.forEach(img => img.classList.remove('hidden'));

    document.querySelector('h1').style.display = 'none';
    document.querySelector('p').style.display = 'none';
    document.querySelector('button').style.display = 'none';

    const description = `
        Cia adalah cewek yang bener-bener jatuh cinta sama Akhdan. Dia itu tipe orang yang kalau udah suka sama seseorang, bakal kasih seluruh perhatiannya. 
        Setiap kali Akhdan ngomong, meskipun hal kecil, Cia selalu dengerin dengan mata berbinar-binar. 
        Nggak peduli sesibuk apa, Cia pasti nyempetin waktu buat ketemu atau sekedar ngechat Akhdan, karena buat dia, Akhdan itu prioritas.

        Kalau lagi bareng, Cia nggak bisa nyembunyiin rasa senangnya. Senyumnya nggak pernah hilang, dan sering banget curi-curi pandang ke Akhdan. 
        Cia juga suka banget ngerawat Akhdan, dari hal-hal kecil kayak ngingetin makan sampai nemenin kalau lagi ada masalah. 
        Buat dia, bisa bikin Akhdan bahagia udah cukup buat bikin harinya lengkap.

        Yang paling kelihatan, Cia itu sering cemburu, tapi dia nggak pernah nunjukkin dengan cara berlebihan. 
        Dia cuma jadi lebih perhatian dan nempel terus ke Akhdan, biar Akhdan tau kalau dia sayang banget sama dia.
    `;
    const descriptionDiv = document.getElementById('description');
    descriptionDiv.classList.add('show');
    descriptionDiv.innerHTML = ''; 
    const sentences = description.split('. ');
    sentences.forEach((sentence, index) => {
        setTimeout(() => {
            const p = document.createElement('p');
            p.textContent = sentence + '. ';
            descriptionDiv.appendChild(p);
        }, index * 500); 
    });
});

