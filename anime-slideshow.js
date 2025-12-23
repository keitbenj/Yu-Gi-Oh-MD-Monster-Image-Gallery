document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.img-container').forEach(container => new AnimeSlideshow(container));
});

class AnimeSlideshow{
    constructor(container){
        this.container = container;
        this.current = 0;
        this.slides = container.querySelectorAll('.slide');

        this.prevBtn = container.querySelector(".prevBtn");
        this.nextBtn = container.querySelector(".nextBtn");

        this.prevBtn.addEventListener("click", () => this.showSlide(this.current - 1));
        this.nextBtn.addEventListener("click", () => this.showSlide(this.current + 1));
    }
    

    showSlide(index) {
        const nextIndex = (index + this.slides.length) % this.slides.length;
        if (nextIndex === this.current) return;

        const currentSlide = this.slides[this.current];
        const nextSlide = this.slides[nextIndex];

        // Animate current slide out
        anime({
            targets: currentSlide,
            translateX: [-0, -200],
            opacity: [1, 0],
            duration: 500,
            easing: 'easeOutQuad',
            complete: () => {
            currentSlide.classList.remove('active');
            }
        });

        // Animate next slide in
        nextSlide.classList.add('active');
        anime({
            targets: nextSlide,
            translateX: [200, 0],
            opacity: [0, 1],
            duration: 500,
            easing: 'easeOutQuad'
        });

        this.current = nextIndex;
    }
}



