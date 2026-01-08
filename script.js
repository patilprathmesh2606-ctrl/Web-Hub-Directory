// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Web pages data array
const webPages = [
    {
        title: "photographer",
        url: "photographer.html",
        image: "https://unsplash.com/photos/person-holding-dslr-camera-jL8QFwnuOcQ?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
        area: "Wada",
        shopName: "photographer",
        category: "photographer"
    },
    {
        title: "shahapurelectricalwork",
        url: "shahapurelectricalwork.html",
        image: "https://unsplash.com/photos/digital-multimeter-displays-zero-in-front-of-computer-screen-5g_8GPxWj1Y",
        area: "Shahapur",
        shopName: "shahapurelectricalwork",
        category: "Service"
    },
      {
        title: "Gym",
        url: "Gym.html",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        area: "Wada",
        shopName: "Gym",
        category: "Gym"
    }
   /*{
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
    }*/
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
    populateShopFilters();
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

// Filter cards based on search and filters
function filterCards() {
    const filtered = webPages.filter(page => {
        // Check category filter
        const categoryMatch = currentFilter === 'all' || page.category === currentFilter;
        
        // Check area filter
        const areaMatch = currentAreaFilter === 'all' || page.area === currentAreaFilter;
        
        // Check shop filter
        const shopMatch = currentShopFilter === 'all' || page.shopName === currentShopFilter;
        
        // Check search filter
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

// Populate shop filters
function populateShopFilters() {
    const shopFilterContainer = document.querySelector('.sidebar-filter-content .filter-section-sidebar:last-child .filter-options');
    
    // Get unique shop names
    const shopNames = [...new Set(webPages.map(page => page.shopName))];
    
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

// Mobile Dropdown Functionality
function initMobileDropdown() {
    const mobileDropdownBtn = document.getElementById('mobileDropdownBtn');
    const mobileDropdownMenu = document.getElementById('mobileDropdownMenu');
    const dropdownSearchBtn = document.getElementById('dropdownSearchBtn');
    const dropdownFilterBtn = document.getElementById('dropdownFilterBtn');
    const dropdownViewAllBtn = document.getElementById('dropdownViewAllBtn');
    const dropdownCollapseBtn = document.getElementById('dropdownCollapseBtn');
    const dropdownFilterBadge = document.getElementById('dropdownFilterBadge');
    
    let isDropdownOpen = false;
    
    // Toggle dropdown menu
    mobileDropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        isDropdownOpen = !isDropdownOpen;
        
        if (isDropdownOpen) {
            mobileDropdownMenu.classList.add('show');
            mobileDropdownBtn.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            mobileDropdownMenu.classList.remove('show');
            mobileDropdownBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileDropdownBtn.contains(e.target) && !mobileDropdownMenu.contains(e.target)) {
            isDropdownOpen = false;
            mobileDropdownMenu.classList.remove('show');
            mobileDropdownBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
    
    // Dropdown button actions
    dropdownSearchBtn.addEventListener('click', () => {
        openMobileSearch();
        closeDropdown();
    });
    
    dropdownFilterBtn.addEventListener('click', () => {
        openSidebarFilter();
        closeDropdown();
    });
    
    dropdownViewAllBtn.addEventListener('click', () => {
        // Reset all filters
        currentFilter = 'all';
        currentAreaFilter = 'all';
        currentShopFilter = 'all';
        
        // Update desktop chips
        document.querySelectorAll('.filter-chip').forEach(chip => {
            chip.classList.remove('active');
            if (chip.getAttribute('data-category') === 'all') {
                chip.classList.add('active');
            }
        });
        
        filterCards();
        updateFilterBadge();
        closeDropdown();
    });
    
    dropdownCollapseBtn.addEventListener('click', () => {
        closeDropdown();
    });
    
    function closeDropdown() {
        isDropdownOpen = false;
        mobileDropdownMenu.classList.remove('show');
        mobileDropdownBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
    
    // Update dropdown filter badge
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
    
    return { updateFilterBadge };
}

// Sidebar Filter Functionality
function initSidebarFilter() {
    const mobileFilterBtn = document.getElementById('mobileFilterBtn');
    const sidebarFilterOverlay = document.getElementById('sidebarFilterOverlay');
    const sidebarFilter = document.getElementById('sidebarFilter');
    const closeSidebarFilterBtn = document.getElementById('closeSidebarFilterBtn');
    const applyFilterBtn = document.getElementById('applyFilterBtn');
    const clearFilterBtn = document.getElementById('clearFilterBtn');
    const selectedFilterCount = document.getElementById('selectedFilterCount');
    const filterOptions = document.querySelectorAll('.filter-option-sidebar');
    
    // Open sidebar filter
    function openSidebarFilter() {
        sidebarFilterOverlay.classList.add('show');
        setTimeout(() => {
            sidebarFilter.classList.add('show');
        }, 10);
        
        // Set current active filters
        updateSidebarFilterState();
    }
    
    // Close sidebar filter
    function closeSidebarFilter() {
        sidebarFilter.classList.remove('show');
        setTimeout(() => {
            sidebarFilterOverlay.classList.remove('show');
        }, 300);
    }
    
    // Update sidebar filter state based on current filter
    function updateSidebarFilterState() {
        // Reset all options
        filterOptions.forEach(option => {
            option.classList.remove('active');
        });
        
        // Activate appropriate category option
        document.querySelector(`.filter-option-sidebar[data-filter-type="category"][data-value="${currentFilter}"]`).classList.add('active');
        
        // Activate appropriate area option
        document.querySelector(`.filter-option-sidebar[data-filter-type="area"][data-value="${currentAreaFilter}"]`).classList.add('active');
        
        // Activate appropriate shop option
        document.querySelector(`.filter-option-sidebar[data-filter-type="shop"][data-value="${currentShopFilter}"]`).classList.add('active');
        
        updateSelectedFilterCount();
    }
    
    // Update selected filter count
    function updateSelectedFilterCount() {
        let activeFilterCount = 0;
        if (currentFilter !== 'all') activeFilterCount++;
        if (currentAreaFilter !== 'all') activeFilterCount++;
        if (currentShopFilter !== 'all') activeFilterCount++;
        
        selectedFilterCount.textContent = activeFilterCount;
    }
    
    // Filter option selection
    filterOptions.forEach(option => {
        option.addEventListener('click', () => {
            const filterType = option.getAttribute('data-filter-type');
            const value = option.getAttribute('data-value');
            
            // Remove active class from all options of the same type
            document.querySelectorAll(`.filter-option-sidebar[data-filter-type="${filterType}"]`).forEach(opt => {
                opt.classList.remove('active');
            });
            
            // Add active class to clicked option
            option.classList.add('active');
            
            // Update current filter based on type
            if (filterType === 'category') {
                currentFilter = value;
            } else if (filterType === 'area') {
                currentAreaFilter = value;
            } else if (filterType === 'shop') {
                currentShopFilter = value;
            }
            
            updateSelectedFilterCount();
        });
    });
    
    // Apply filter
    applyFilterBtn.addEventListener('click', () => {
        // Update desktop chips
        document.querySelectorAll('.filter-chip').forEach(chip => {
            chip.classList.remove('active');
            if (chip.getAttribute('data-category') === currentFilter) {
                chip.classList.add('active');
            }
        });
        
        filterCards();
        updateFilterBadge();
        closeSidebarFilter();
    });
    
    // Clear all filters
    clearFilterBtn.addEventListener('click', () => {
        currentFilter = 'all';
        currentAreaFilter = 'all';
        currentShopFilter = 'all';
        
        // Update all filter options
        document.querySelectorAll('.filter-option-sidebar').forEach(option => {
            option.classList.remove('active');
            if (option.getAttribute('data-value') === 'all') {
                option.classList.add('active');
            }
        });
        
        updateSelectedFilterCount();
    });
    
    // Event listeners
    mobileFilterBtn.addEventListener('click', openSidebarFilter);
    closeSidebarFilterBtn.addEventListener('click', closeSidebarFilter);
    sidebarFilterOverlay.addEventListener('click', closeSidebarFilter);
    
    // Close with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sidebarFilter.classList.contains('show')) {
            closeSidebarFilter();
        }
    });
    
    return { openSidebarFilter };
}

// Mobile Search Functionality
function initMobileSearch() {
    const mobileSearchBtn = document.getElementById('mobileSearchBtn');
    const mobileSearchOverlay = document.getElementById('mobileSearchOverlay');
    const mobileSearchInput = document.getElementById('mobileSearchInput');
    const closeSearchBtn = document.getElementById('closeSearchBtn');
    const mobileSearchResults = document.getElementById('mobileSearchResults');
    
    function openMobileSearch() {
        mobileSearchOverlay.classList.add('show');
        setTimeout(() => {
            mobileSearchInput.focus();
        }, 100);
    }
    
    function closeMobileSearch() {
        mobileSearchOverlay.classList.remove('show');
        mobileSearchInput.value = '';
        currentSearch = '';
        searchInput.value = '';
        filterCards();
        mobileSearchResults.innerHTML = '';
    }
    
    // Event listeners
    mobileSearchBtn.addEventListener('click', openMobileSearch);
    closeSearchBtn.addEventListener('click', closeMobileSearch);
    
    // Sync mobile search with main search
    mobileSearchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value.toLowerCase().trim();
        searchInput.value = currentSearch;
        filterCards();
        updateMobileSearchResults();
    });
    
    // Close search when pressing Escape
    mobileSearchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMobileSearch();
        }
    });
    
    // Update mobile search results
    function updateMobileSearchResults() {
        if (currentSearch === '') {
            mobileSearchResults.innerHTML = '<div class="empty-search">Type to search web pages...</div>';
            return;
        }
        
        const filtered = webPages.filter(page => {
            return page.title.toLowerCase().includes(currentSearch) ||
                   page.area.toLowerCase().includes(currentSearch) ||
                   page.shopName.toLowerCase().includes(currentSearch) ||
                   page.category.toLowerCase().includes(currentSearch);
        });
        
        if (filtered.length === 0) {
            mobileSearchResults.innerHTML = '<div class="empty-search">No results found</div>';
            return;
        }
        
        mobileSearchResults.innerHTML = filtered.map(page => `
            <div class="mobile-search-result" data-url="${page.url}">
                <div class="result-image">
                    ${page.image ? 
                        `<img src="${page.image}" alt="${page.title}">` : 
                        `<div class="placeholder"><i class="fas fa-globe"></i></div>`
                    }
                </div>
                <div class="result-info">
                    <h4>${page.title}</h4>
                    <p>${page.shopName} • ${page.area}</p>
                    <span class="result-category ${page.category}-category">${page.category}</span>
                </div>
                <i class="fas fa-chevron-right"></i>
            </div>
        `).join('');
        
        // Add click events to mobile search results
        document.querySelectorAll('.mobile-search-result').forEach(result => {
            result.addEventListener('click', () => {
                const url = result.getAttribute('data-url');
                window.open(url, '_blank');
            });
        });
    }
    
    // Initialize mobile search results
    updateMobileSearchResults();
    
    return { openMobileSearch };
}

// Expand/Collapse functionality
function initExpandCollapse() {
    const expandCollapseBtn = document.getElementById('expandCollapseBtn');
    const expandCollapseIcon = document.getElementById('expandCollapseIcon');
    const expandableContent = document.getElementById('expandableContent');
    
    let isExpanded = false;
    
    // Check if we should start expanded on desktop
    if (window.innerWidth >= 768) {
        isExpanded = true;
        expandableContent.classList.add('expanded');
        expandCollapseBtn.classList.add('expanded');
        expandCollapseIcon.classList.remove('fa-chevron-down');
        expandCollapseIcon.classList.add('fa-chevron-up');
    }
    
    // Toggle expansion
    if (expandCollapseBtn) {
        expandCollapseBtn.addEventListener('click', () => {
            isExpanded = !isExpanded;
            
            if (isExpanded) {
                expandableContent.classList.add('expanded');
                expandCollapseBtn.classList.add('expanded');
                expandCollapseIcon.classList.remove('fa-chevron-down');
                expandCollapseIcon.classList.add('fa-chevron-up');
                
                // Focus search input when expanded
                setTimeout(() => {
                    const searchInput = document.getElementById('searchInput');
                    if (searchInput) searchInput.focus();
                }, 300);
            } else {
                expandableContent.classList.remove('expanded');
                expandCollapseBtn.classList.remove('expanded');
                expandCollapseIcon.classList.remove('fa-chevron-up');
                expandCollapseIcon.classList.add('fa-chevron-down');
            }
        });
        
        // Auto-expand when clicking search input
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('focus', () => {
                if (!isExpanded) {
                    isExpanded = true;
                    expandableContent.classList.add('expanded');
                    expandCollapseBtn.classList.add('expanded');
                    expandCollapseIcon.classList.remove('fa-chevron-down');
                    expandCollapseIcon.classList.add('fa-chevron-up');
                }
            });
        }
        
        // Auto-expand when clicking filter chips
        const filterChips = document.querySelectorAll('.filter-chip');
        filterChips.forEach(chip => {
            chip.addEventListener('click', () => {
                if (!isExpanded) {
                    isExpanded = true;
                    expandableContent.classList.add('expanded');
                    expandCollapseBtn.classList.add('expanded');
                    expandCollapseIcon.classList.remove('fa-chevron-down');
                    expandCollapseIcon.classList.add('fa-chevron-up');
                }
            });
        });
        
        // Handle window resize
        function handleResize() {
            if (window.innerWidth >= 768) {
                // Show expand/collapse button on desktop
                expandCollapseBtn.style.display = 'flex';
                
                // Auto-expand on desktop if not already expanded
                if (!isExpanded) {
                    isExpanded = true;
                    expandableContent.classList.add('expanded');
                    expandCollapseBtn.classList.add('expanded');
                    expandCollapseIcon.classList.remove('fa-chevron-down');
                    expandCollapseIcon.classList.add('fa-chevron-up');
                }
            } else {
                // Hide expand/collapse button on mobile
                expandCollapseBtn.style.display = 'none';
                
                // Collapse on mobile
                if (isExpanded) {
                    isExpanded = false;
                    expandableContent.classList.remove('expanded');
                    expandCollapseBtn.classList.remove('expanded');
                    expandCollapseIcon.classList.remove('fa-chevron-up');
                    expandCollapseIcon.classList.add('fa-chevron-down');
                }
            }
        }
        
        // Initial check
        handleResize();
        window.addEventListener('resize', handleResize);
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    init();
    
    // Initialize mobile UI components
    const mobileDropdown = initMobileDropdown();
    const sidebarFilter = initSidebarFilter();
    const mobileSearch = initMobileSearch();
    initExpandCollapse();
    
    // Global updateFilterBadge function
    window.updateFilterBadge = mobileDropdown.updateFilterBadge;
    window.openSidebarFilter = sidebarFilter.openSidebarFilter;
    window.openMobileSearch = mobileSearch.openMobileSearch;
});






