document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.cat-gallery');
    
    // Sample cat data with Unsplash images
    const cats = [
        { 
            name: 'Whiskers', 
            description: 'A playful tabby who loves yarn',
            image: 'https://source.unsplash.com/400x300/?cat,kitten,1'
        },
        { 
            name: 'Luna', 
            description: 'Elegant black cat with emerald eyes',
            image: 'https://source.unsplash.com/400x300/?cat,kitten,2'
        },
        { 
            name: 'Oliver', 
            description: 'Orange and friendly, loves belly rubs',
            image: 'https://source.unsplash.com/400x300/?cat,kitten,3'
        },
        { 
            name: 'Mochi', 
            description: 'Fluffy white princess',
            image: 'https://source.unsplash.com/400x300/?cat,kitten,4'
        },
        { 
            name: 'Simba', 
            description: 'Majestic Maine Coon',
            image: 'https://source.unsplash.com/400x300/?cat,kitten,5'
        },
        { 
            name: 'Sushi', 
            description: 'Tiny but mighty',
            image: 'https://source.unsplash.com/400x300/?cat,kitten,6'
        }
    ];

    // Populate gallery with cute cat cards
    cats.forEach(cat => {
        const catCard = document.createElement('div');
        catCard.className = 'cat-card';
        catCard.innerHTML = `
            <div class="cat-image-container">
                <img src="${cat.image}" alt="${cat.name}" loading="lazy">
            </div>
            <div class="cat-info">
                <h3>${cat.name}</h3>
                <p>${cat.description}</p>
                <button class="like-button" aria-label="Like this cat">❤️</button>
            </div>
        `;

        // Add like button functionality
        const likeButton = catCard.querySelector('.like-button');
        let isLiked = false;
        likeButton.addEventListener('click', () => {
            isLiked = !isLiked;
            likeButton.textContent = isLiked ? '💖' : '❤️';
            likeButton.classList.toggle('liked');
        });

        gallery.appendChild(catCard);
    });

    // Smooth scroll for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
