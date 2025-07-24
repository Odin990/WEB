document.addEventListener('DOMContentLoaded', () => {
    // 1. Tombol "Jelajahi Bisnis" untuk masuk ke halaman bisnis unggulan
    const exploreBusinessesBtn = document.querySelector('section#home button.bg-primary-600');
    if (exploreBusinessesBtn) {
        exploreBusinessesBtn.addEventListener('click', () => {
            const businessesSection = document.getElementById('businesses');
            if (businessesSection) {
                businessesSection.scrollIntoView({ behavior: 'smooth' });
                console.log('Scrolling to Businesses section.');
            }
        });
    }

    // 2. Tombol "Pelajari Lebih Lanjut" untuk masuk ke footer dan memunculkan halaman dialog comingsoon
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', () => {
            const footerSection = document.getElementById('contact'); // ID footer Anda adalah 'contact'
            if (footerSection) {
                footerSection.scrollIntoView({ behavior: 'smooth' });
                // Tambahkan delay sebentar sebelum muncul dialog agar scroll selesai
                setTimeout(() => {
                    alert('Halaman informasi lebih lanjut sedang dalam pengembangan. Nantikan segera!');
                }, 800); // Munculkan dialog setelah 800ms
            }
        });
    }

    // 3. Ketika tombol arrow ditekan akan masuk ke alamat lokasi sesuai peta
    const businessDetailArrows = document.querySelectorAll('section#businesses button[data-gmap-link]');
    businessDetailArrows.forEach(button => {
        button.addEventListener('click', () => {
            const gmapLink = button.getAttribute('data-gmap-link');
            if (gmapLink) {
                window.open(gmapLink, '_blank');
                console.log('Membuka Google Maps:', gmapLink);
            } else {
                console.warn('Tombol arrow_forward diklik, tetapi tidak ada link Google Maps yang ditemukan untuk elemen ini.');
                // Opsional: berikan feedback ke user jika tidak ada link
                // alert('Maaf, link peta untuk bisnis ini belum tersedia.');
            }
        });
    });

    // 4. Tombol FB, IG, WA sesuai link yang diberikan
    const footerSocialButtons = document.querySelectorAll('footer .fa-brands');

    footerSocialButtons.forEach(icon => {
        const parentButton = icon.closest('button');
        if (parentButton) {
            parentButton.addEventListener('click', () => {
                let url = '';
                if (icon.classList.contains('fa-whatsapp')) {
                    url = 'https://wa.me/6289671170010';
                } else if (icon.classList.contains('fa-instagram')) {
                    url = 'https://www.instagram.com/info.pilangrejo.wungu';
                } else if (icon.classList.contains('fa-facebook')) {
                    url = 'https://web.facebook.com/pages/Pilangrejo,%20Wungu,%20Madiun/663518473704499/#';
                }

                if (url) {
                    window.open(url, '_blank');
                    console.log(`Membuka link sosial: ${url}`);
                } else {
                    console.warn('Link sosial tidak ditemukan untuk ikon ini.');
                }
            });
        }
    });

    console.log('main.js loaded and event listeners attached.');
});