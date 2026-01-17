// Change header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = '#000';
    } else {
        header.style.background = 'rgba(0,0,0,0.8)';
    }
});

// Simple Fade-in Observer
const sections = document.querySelectorAll('.section');

const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease-out";
    observer.observe(section);
});

// Function to check if elements are in viewport
function reveal() {
    var reveals = document.querySelectorAll(".section");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150; // Distance before revealing

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            // Optional: remove if you want it to fade out when scrolling up
            // reveals[i].classList.remove("active");
        }
    }
}

// Add the CSS class to all sections on load
document.querySelectorAll('.section').forEach(sec => sec.classList.add('reveal'));

// Listen for scroll
window.addEventListener("scroll", reveal);

// Run once on load to show top sections
reveal();







const modal = document.getElementById("blogModal");
const closeModal = document.querySelector(".close-modal");
const modalBody = document.getElementById("modalBody");

// Function to open blog
document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Get data from the blog card that was clicked
        const blogPost = e.target.closest('.blog-post');
        const title = blogPost.querySelector('h3').innerText;
        const imgSrc = blogPost.querySelector('img').src;
        const description = blogPost.querySelector('p').innerText;

        // Create detailed content for the popup
        modalBody.innerHTML = `
            <img src="${imgSrc}" alt="Blog Image">
            <h2>${title}</h2>
            <p>${description}</p>
            <p>This is where your full blog content goes. You can add more paragraphs, 
            details about the camera used, the location, and the client's story 
            to make it a complete reading experience.</p>
        `;

        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Stop background from scrolling
    });
});

// Close modal when clicking 'X'
closeModal.onclick = function() {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Enable scrolling again
}

// Close modal when clicking outside the box
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}








const fullBlogPage = document.getElementById("fullBlogPage");
const blogPostArea = document.getElementById("blogPostArea");
const backToHome = document.getElementById("backToHome");

// Function to open the Full Page Blog
document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        const blogPost = e.target.closest('.blog-post');
        const title = blogPost.querySelector('h3').innerText;
        const imgSrc = blogPost.querySelector('img').src;
        // In a real Admin system, you'd fetch the 'fullContent' from a database here
        const fullContent = blogPost.querySelector('p').innerText; 

        blogPostArea.innerHTML = `
            <img src="${imgSrc}" alt="${title}">
            <h1>${title}</h1>
            <p class="blog-meta">Posted by <strong>Admin</strong> | Event Photography</p>
            <div class="content">
                <p>${fullContent}</p>
                <p>Additional details provided by the admin would appear here. This section is designed to handle long-form storytelling, gear lists, and location details.</p>
            </div>
        `;

        fullBlogPage.style.display = "block";
        document.body.style.overflow = "hidden"; // Prevent home page from scrolling
    });
});

// Back to Home logic
backToHome.addEventListener('click', () => {
    fullBlogPage.style.display = "none";
    document.body.style.overflow = "auto";
});

// Handle Reply Form
document.getElementById('commentForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Thank you! Your reply has been sent to the Admin for approval.");
    e.target.reset();
});



// Pool of images provided by Admin
const adminImagePool = [
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600",
    "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600",
    "https://images.unsplash.com/photo-1530103043960-ef38714abb15?w=600",
    "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600",
    "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=600"
];

function swapRandomImage() {
    const frames = document.querySelectorAll('.frame img');
    // Pick a random frame on the wall
    const randomFrameIndex = Math.floor(Math.random() * frames.length);
    // Pick a random image from the admin pool
    const randomPoolIndex = Math.floor(Math.random() * adminImagePool.length);
    
    const targetImg = frames[randomFrameIndex];
    
    // Fade out
    targetImg.style.opacity = "0";
    
    setTimeout(() => {
        // Change Source
        targetImg.src = adminImagePool[randomPoolIndex];
        // Fade in
        targetImg.style.opacity = "1";
    }, 1000); 
}

// Swaps one image every 4 seconds
setInterval(swapRandomImage, 4000);








window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;

    // 1. Hero Content Parallax (moves up faster)
    const heroContent = document.querySelector('.glass-card');
    if(heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.4}px)`;
        heroContent.style.opacity = 1 - (scrolled / 700);
    }

    // 2. Profile Image Parallax
    const profileImg = document.querySelector('.profile-left');
    if(profileImg) {
        let parentTop = document.getElementById('profile').offsetTop;
        if(scrolled > parentTop - window.innerHeight) {
            profileImg.style.backgroundPositionY = `${(scrolled - parentTop) * 0.5}px`;
        }
    }

    // 3. Gallery Wall "Living" Movement
    const frames = document.querySelectorAll('.frame');
    frames.forEach((frame, index) => {
        let speed = (index % 3 + 1) * 0.1; // Different speeds for different frames
        let parentTop = document.getElementById('gallery').offsetTop;
        if(scrolled > parentTop - window.innerHeight) {
            frame.style.transform = `translateY(${(scrolled - parentTop) * speed}px)`;
        }
    });
});




window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;

    // 1. SERVICES SECTION: Floating Bokeh
    const services = document.getElementById('services');
    const serviceCards = document.querySelectorAll('.s-card');
    
    if (isInViewport(services)) {
        let offset = scrolled - services.offsetTop;
        serviceCards.forEach((card, i) => {
            // Each card moves at a slightly different "staggered" speed
            let speed = 0.1 + (i * 0.05);
            card.style.transform = `translateY(${offset * speed}px)`;
        });
    }

    // 2. PROFILE SECTION: The Visionary Split
    const profile = document.getElementById('profile');
    const profileText = document.querySelector('.profile-right h2');
    const profileTag = document.querySelector('.tag');
    
    if (isInViewport(profile)) {
        let offset = scrolled - profile.offsetTop;
        // Text moves slower than the scroll, creating a "weighted" feel
        profileText.style.transform = `translateY(${offset * 0.15}px)`;
        profileTag.style.transform = `translateY(${offset * 0.25}px)`;
    }

    // 3. ABOUT SECTION: Cinematic Zoom
    const about = document.getElementById('about');
    if (isInViewport(about)) {
        let offset = scrolled - about.offsetTop;
        // The background zooms in slightly as you scroll down
        let scale = 1 + (Math.abs(offset) * 0.0005);
        about.style.backgroundSize = `${scale * 100}%`;
    }
});

// Helper function to check visibility
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}






window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;

    // Apply "Drift" to all section titles and text blocks
    const floatElements = document.querySelectorAll('.section-title, .glass-card, .profile-right');
    
    floatElements.forEach((el, index) => {
        const speed = 0.05 + (index * 0.02); // Every element gets a unique speed
        const rect = el.getBoundingClientRect();
        
        // Only animate if the section is visible
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const movement = (window.innerHeight - rect.top) * speed;
            el.style.transform = `translateY(-${movement}px)`;
        }
    });
});



