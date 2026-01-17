// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Web pages data array - Fixing category casing to be consistent
const webPages = [
    {
        title: "Photographer",
        url: "photographer",
        image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&auto=format&fit=crop",
        area: "Wada",
        shopName: "photographer",
        category: "Service"
    },
    {
        title: "Shahapur Electrical Work",
        url: "Shahapur Electrical Work",
        image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800",
        area: "Shahapur",
        shopName: "shahapurelectricalwork",
        category: "Service"
    },
    {
        title: "Gym",
        url: "Gym",
        image: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800",
        area: "Wada",
        shopName: "Gym",
        category: "Service"
    },
    {
        title: "The Royal Kitchen",
        url: "The Royal Kitchen",
        image: "https://images.pexels.com/photos/34884133/pexels-photo-34884133.jpeg?auto=compress&cs=tinysrgb&w=800",
        area: "Bhaveghar",
        shopName: "The Royal Kitchen",
        category: "Food"
    },
    {
        title: "Tanvi Fashion Hub",
        url: "Tanvi Fashion Hub",
        image: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800",
        area: "Virar",
        shopName: "Tanvi Fashion Hub",
        category: "Retail"
    },
    {
        title: "JayeshBhoir Catering",
        url: "JayeshBhoir Catering",
        image: "https://images.pexels.com/photos/11508780/pexels-photo-11508780.jpeg?auto=compress&cs=tinysrgb&w=800",
        area: "Wada",
        shopName: "Jayeshbhoir Catering",
        category: "Service"
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
let currentAreaFilter = 'all';
let currentShopFilter = 'all';

// Initialize the page
function init() {
    renderCards(webPages);
    setupEventListeners();
    updateResultCount(webPages.length);
    populateAreaFilters();
    populateShopFilters();
    populateCategoryFilters(); // NEW: Add this function
}

// NEW: Populate category filters in sidebar
function populateCategoryFilters() {
    const categoryFilterContainer = document.querySelector('.sidebar-filter-content .filter-section-sidebar:first-child .filter-options');
    
    if (!categoryFilterContainer) return;
    
    // Get unique categories (normalize to lowercase for comparison)
    const categories = [...new Set(webPages.map(page => page.category))];
    
    // Clear existing options except "All"
    const allOption = categoryFilterContainer.querySelector('[data-value="all"]');
    categoryFilterContainer.innerHTML = '';
    
    // Add "All" option back
    categoryFilterContainer.appendChild(allOption);
    
    // Add category filter options
    categories.forEach(category => {
        const categoryOption = document.createElement('button');
        categoryOption.className = 'filter-option-sidebar';
        categoryOption.setAttribute('data-filter-type', 'category');
        categoryOption.setAttribute('data-value', category);
        categoryOption.innerHTML = `
            <div class="filter-option-content">
                <span>${category}</span>
            </div>
            <i class="fas fa-check check-icon"></i>
        `;
        categoryFilterContainer.appendChild(categoryOption);
    });
}

// Populate area filters
function populateAreaFilters() {
    const areaFilterContainer = document.querySelector('.sidebar-filter-content .filter-section-sidebar:nth-child(2) .filter-options');
    
    if (!areaFilterContainer) return;
    
    // Get unique areas
    const areas = [...new Set(webPages.map(page => page.area))];
    
    // Clear existing options except "All"
    const allOption = areaFilterContainer.querySelector('[data-value="all"]');
    areaFilterContainer.innerHTML = '';
    
    // Add "All" option back
    areaFilterContainer.appendChild(allOption);
    
    // Add area filter options
    areas.forEach(area => {
        const areaOption = document.createElement('button');
        areaOption.className = 'filter-option-sidebar';
        areaOption.setAttribute('data-filter-type', 'area');
        areaOption.setAttribute('data-value', area);
        areaOption.innerHTML = `
            <div class="filter-option-content">
                <span>${area}</span>
            </div>
            <i class="fas fa-check check-icon"></i>
        `;
        areaFilterContainer.appendChild(areaOption);
    });
}

// Populate shop filters
function populateShopFilters() {
    const shopFilterContainer = document.querySelector('.sidebar-filter-content .filter-section-sidebar:last-child .filter-options');
    
    if (!shopFilterContainer) return;
    
    // Get unique shop names
    const shopNames = [...new Set(webPages.map(page => page.shopName))];
    
    // Clear existing options except "All"
    const allOption = shopFilterContainer.querySelector('[data-value="all"]');
    shopFilterContainer.innerHTML = '';
    
    // Add "All" option back
    shopFilterContainer.appendChild(allOption);
    
    // Add shop filter options
    shopNames.forEach(shopName => {
        const shopOption = document.createElement('button');
        shopOption.className = 'filter-option-sidebar';
        shopOption.setAttribute('data-filter-type', 'shop');
        shopOption.setAttribute('data-value', shopName);
        shopOption.innerHTML = `
            <div class="filter-option-content">
                <span>${shopName}</span>
            </div>
            <i class="fas fa-check check-icon"></i>
        `;
        shopFilterContainer.appendChild(shopOption);
    });
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
        
        // Determine category class - FIXED: Use consistent casing
        let categoryClass = '';
        let categoryText = page.category; // Use the actual category from data
        
        // Convert to lowercase for class assignment
        const categoryLower = page.category.toLowerCase();
        
        switch(categoryLower) {
            case 'food':
                categoryClass = 'food-category';
                break;
            case 'retail':
                categoryClass = 'retail-category';
                break;
            case 'service':
                categoryClass = 'service-category';
                break;
            case 'entertainment':
                categoryClass = 'entertainment-category';
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

// Filter cards based on search and filters - FIXED: Case-insensitive matching
function filterCards() {
    const filtered = webPages.filter(page => {
        // Check category filter - FIXED: Use case-insensitive comparison
        const categoryMatch = currentFilter === 'all' || 
                             page.category.toLowerCase() === currentFilter.toLowerCase();
        
        // Check area filter - FIXED: Use case-insensitive comparison
        const areaMatch = currentAreaFilter === 'all' || 
                         page.area.toLowerCase() === currentAreaFilter.toLowerCase();
        
        // Check shop filter - FIXED: Use case-insensitive comparison
        const shopMatch = currentShopFilter === 'all' || 
                         page.shopName.toLowerCase() === currentShopFilter.toLowerCase();
        
        // Check search filter - FIXED: Use case-insensitive comparison
        const searchMatch = currentSearch === '' || 
            page.title.toLowerCase().includes(currentSearch) ||
            page.area.toLowerCase().includes(currentSearch) ||
            page.shopName.toLowerCase().includes(currentSearch) ||
            page.category.toLowerCase().includes(currentSearch);
        
        return categoryMatch && areaMatch && shopMatch && searchMatch;
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
            updateFilterBadge();
        });
    });
    
    // Set 'All' as active by default
    document.querySelector('.filter-chip[data-category="all"]').classList.add('active');
}

// Update filter badge
function updateFilterBadge() {
    const filterBadge = document.getElementById('filterBadge');
    const dropdownFilterBadge = document.getElementById('dropdownFilterBadge');
    
    let activeFilterCount = 0;
    if (currentFilter !== 'all') activeFilterCount++;
    if (currentAreaFilter !== 'all') activeFilterCount++;
    if (currentShopFilter !== 'all') activeFilterCount++;
    
    if (activeFilterCount > 0) {
        filterBadge.textContent = activeFilterCount;
        filterBadge.classList.add('active');
        dropdownFilterBadge.textContent = activeFilterCount;
    } else {
        filterBadge.classList.remove('active');
        dropdownFilterBadge.textContent = '';
    }
}

// ... Rest of your code remains the same for mobile dropdown, sidebar filter, etc.

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    init();
    
    // Initialize mobile UI components
    const mobileDropdown = initMobileDropdown();
    const sidebarFilter = initSidebarFilter();
    const mobileSearch = initMobileSearch();
    initExpandCollapse();
    
    // Global updateFilterBadge function
    window.updateFilterBadge = updateFilterBadge; // Use the fixed function
    window.openSidebarFilter = sidebarFilter.openSidebarFilter;
    window.openMobileSearch = mobileSearch.openMobileSearch;
});

