// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Web pages data array - Add your pages here
const webPages = [
    {
        title: "Shahapur Electrical Work",
        url: "shahapurelectricalwork.html",
        image: "https://images.unsplash.com/photo-1555507036-ab794f27d2e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        area: "Shahapur",
        shopName: "Shahapur Electrical Work",
        category: "service"
    },
	{
        title: "Coffee Haven Menu",
        url: "coffee-haven.html",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        area: "Downtown",
        shopName: "Coffee Haven",
        category: "food"
    },
    {
        title: "Urban Outfitters Store",
        url: "urban-outfitters.html",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        area: "Shopping District",
        shopName: "Urban Outfitters",
        category: "retail"
    },
    {
        title: "Tech Support Hub",
        url: "tech-support.html",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        area: "Tech Park",
        shopName: "Tech Solutions Inc.",
        category: "service"
    },
    {
        title: "Pizza Palace Ordering",
        url: "pizza-palace.html",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        area: "Food Court",
        shopName: "Pizza Palace",
        category: "food"
    },
    {
        title: "Book Nook Inventory",
        url: "book-nook.html",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        area: "Library Square",
        shopName: "The Book Nook",
        category: "retail"
    },
    {
        title: "Fitness First Schedule",
        url: "fitness-first.html",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        area: "Westside Mall",
        shopName: "Fitness First",
        category: "service"
    },
    {
        title: "Cinema Central Bookings",
        url: "cinema-central.html",
        image: "https://images.unsplash.com/photo-1489599809516-9827b6d1cf13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        area: "Entertainment Zone",
        shopName: "Cinema Central",
        category: "entertainment"
    },
    {
        title: "Sushi Master Menu",
        url: "sushi-master.html",
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        area: "Asian Quarter",
        shopName: "Sushi Master",
        category: "food"
    },
    {
        title: "Green Thumb Garden Center",
        url: "green-thumb.html",
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        area: "Eastside Market",
        shopName: "Green Thumb",
        category: "retail"
    },
    {
        title: "Fix It All Repairs",
        url: "fix-it-all.html",
        image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        area: "Industrial Park",
        shopName: "Fix It All",
        category: "service"
    },
    {
        title: "Bowling Alley Bookings",
        url: "bowling-alley.html",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        area: "Leisure Center",
        shopName: "Strike Zone",
        category: "entertainment"
    },
    {
        title: "Burger Joint Ordering",
        url: "burger-joint.html",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        area: "Food Truck Park",
        shopName: "The Burger Joint",
        category: "food"
    },
    {
        title: "Art Gallery Exhibits",
        url: "art-gallery.html",
        image: "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        area: "Cultural District",
        shopName: "Modern Art Gallery",
        category: "entertainment"
    },
    {
        title: "Hardware Store",
        url: "hardware-store.html",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        area: "Industrial Area",
        shopName: "Tool Masters",
        category: "retail"
    },
    {
        title: "Pet Grooming Services",
        url: "pet-grooming.html",
        image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        area: "Pet Care Center",
        shopName: "Pampered Pets",
        category: "service"
    },
    {
        title: "Ice Cream Parlor",
        url: "ice-cream.html",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        area: "Beachfront",
        shopName: "Scoops & Cones",
        category: "food"
    },
    {
        title: "Florist Shop",
        url: "florist.html",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        area: "Market Square",
        shopName: "Blooming Flowers",
        category: "retail"
    },
    {
        title: "Travel Agency",
        url: "travel-agency.html",
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        area: "Financial District",
        shopName: "Global Travel",
        category: "service"
    },
    {
        title: "Video Game Store",
        url: "game-store.html",
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        area: "Tech Hub",
        shopName: "Game Galaxy",
        category: "retail"
    },
    {
        title: "Bakery Shop",
        url: "bakery.html",
        image: "https://images.unsplash.com/photo-1555507036-ab794f27d2e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        area: "Old Town",
        shopName: "Sweet Treats Bakery",
        category: "food"
    }
];

// DOM elements
const cardsContainer = document.getElementById('cardsContainer');
const searchInput = document.getElementById('searchInput');
const filterChips = document.querySelectorAll('.filter-chip');
const resultCount = document.getElementById('resultCount');
const noResults = document.getElementById('noResults');

// Current filter state
let currentFilter = 'all';
let currentSearch = '';

// Initialize the page
function init() {
    renderCards(webPages);
    setupEventListeners();
    updateResultCount(webPages.length);
}

// Render cards based on provided data
function renderCards(pages) {
    cardsContainer.innerHTML = '';
    
    if (pages.length === 0) {
        noResults.classList.add('show');
        return;
    }
    
    noResults.classList.remove('show');
    
    pages.forEach((page, index) => {
        const card = document.createElement('div');
        card.className = 'card-item';
        card.setAttribute('data-index', index);
        
        // Determine category class
        let categoryClass = '';
        let categoryText = '';
        
        switch(page.category) {
            case 'food':
                categoryClass = 'food-category';
                categoryText = 'Food';
                break;
            case 'retail':
                categoryClass = 'retail-category';
                categoryText = 'Retail';
                break;
            case 'service':
                categoryClass = 'service-category';
                categoryText = 'Service';
                break;
            case 'entertainment':
                categoryClass = 'entertainment-category';
                categoryText = 'Entertainment';
                break;
            default:
                categoryClass = 'service-category';
                categoryText = 'Other';
        }
        
        card.innerHTML = `
            <div class="card-image">
                ${page.image ? 
                    `<img src="${page.image}" alt="${page.title}">` : 
                    `<div class="image-placeholder">
                        <div>
                            <i class="fas fa-globe fa-3x"></i>
                            <p>${page.title}</p>
                        </div>
                    </div>`
                }
            </div>
            
            <div class="card-content">
                <div class="card-header">
                    <h3 class="card-title">${page.title}</h3>
                    <span class="category-tag ${categoryClass}">${categoryText}</span>
                </div>
                
                <div class="card-details">
                    <div class="detail-item">
                        <i class="fas fa-map-marker-alt area-icon"></i>
                        <span>${page.area}</span>
                    </div>
                    
                    <div class="detail-item">
                        <i class="fas fa-store shop-icon"></i>
                        <span>${page.shopName}</span>
                    </div>
                </div>
                
                <div class="card-footer">
                    <span class="click-hint">Click to open</span>
                    <i class="fas fa-external-link-alt external-icon"></i>
                </div>
            </div>
        `;
        
        // Add click event to open the page in new tab
        card.addEventListener('click', () => {
            window.open(page.url, '_blank');
        });
        
        // Add animation delay based on index
        card.style.animationDelay = `${(index % 10) * 0.1}s`;
        
        cardsContainer.appendChild(card);
    });
}

// Filter cards based on search and category
function filterCards() {
    const filtered = webPages.filter(page => {
        // Check category filter
        const categoryMatch = currentFilter === 'all' || page.category === currentFilter;
        
        // Check search filter
        const searchMatch = currentSearch === '' || 
            page.title.toLowerCase().includes(currentSearch) ||
            page.area.toLowerCase().includes(currentSearch) ||
            page.shopName.toLowerCase().includes(currentSearch) ||
            page.category.toLowerCase().includes(currentSearch);
        
        return categoryMatch && searchMatch;
    });
    
    renderCards(filtered);
    updateResultCount(filtered.length);
}

// Update result count
function updateResultCount(count) {
    resultCount.textContent = count;
}

// Setup event listeners
function setupEventListeners() {
    // Search input listener
    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value.toLowerCase().trim();
        filterCards();
    });
    
    // Filter chips listeners
    filterChips.forEach(chip => {
        chip.addEventListener('click', () => {
            // Remove active class from all chips
            filterChips.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked chip
            chip.classList.add('active');
            
            // Update current filter
            currentFilter = chip.getAttribute('data-category');
            filterCards();
        });
    });
    
    // Set 'All' as active by default
    document.querySelector('.filter-chip[data-category="all"]').classList.add('active');
}

// Initialize the application
document.addEventListener('DOMContentLoaded', init);