
const imageSwap = document.querySelector('.image-swap');

if (imageSwap) {
    console.log(
        'This redesign reframes a familiar platform as a critique of attention, branding, and community-building, turning the interface into a commentary on how online culture is designed to feel personal and persuasive.'
    );

    const toggleSwap = () => {
        imageSwap.classList.toggle('active');
    };

    imageSwap.addEventListener('click', toggleSwap);
    imageSwap.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleSwap();
        }
    });
}
