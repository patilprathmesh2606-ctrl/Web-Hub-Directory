// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Web pages data array
const webPages = [
    {
        title: "Photographer",
        url: "Photographer",
        image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&auto=format&fit=crop",
        area: "Wada",
        shopName: "Photographer",
        category: "Service"
    },
    {
        title: "Shahapur Electrical Work",
        url: "Shahapur Electrical Work",
        image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800",
        area: "Shahapur",
        shopName: "Shahapur Electrical Work",
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
        image: "https://images.pexels.com/photos/34884133/pexels-photo-34884133.jpeg?auto=compress&cs=tinysrgb&w=800",
        area: "Wada",
        shopName: "Jayeshbhoir Catering",
        category: "Service"
    },
    {
        title: "Cake Shop",
        url: "Cake Shop",
        image: "https://images.pexels.com/photos/34884133/pexels-photo-34884133.jpeg?auto=compress&cs=tinysrgb&w=800",
        area: "Vajreshwari",
        shopName: "Cake Shop",
        category: "Food"
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
    populateAllFilters();
}

// Populate all filters
function populateAllFilters() {
    populateCategoryFilters();
    populateAreaFilters();
    populateShopFilters();
}

// Populate category filters
function populateCategoryFilters() {
    const categoryFilterContainer = document.querySelector('.filter-section-sidebar[data-filter-type="category"] .filter-options') || 
                                   document.querySelector('.sidebar-filter-content .filter-section-sidebar:first-child .filter-options');
    
    if (!categoryFilterContainer) return;
    
    // Get unique categories
    const categories = [...new Set(webPages.map(page => page.category))];
    
    // Clear existing options except "All"
    const allOption = categoryFilterContainer.querySelector('[data-value="all"]');
    categoryFilterContainer.innerHTML = '';
    
    // Add "All" option back
    if (allOption) {
        categoryFilterContainer.appendChild(allOption);
    }
    
    // Add category filter options
    categories.forEach(category => {
        const categoryOption = document.createElement('button');
        categoryOption.className = 'filter-option-sidebar';
        categoryOption.setAttribute('data-filter-type', 'category');
        categoryOption.setAttribute('data-value', category);
        
        // Determine icon based on category
        let icon = 'fas fa-tag';
        if (category === 'Food') icon = 'fas fa-utensils';
        if (category === 'Retail') icon = 'fas fa-shopping-bag';
        if (category === 'Service') icon = 'fas fa-tools';
        if (category === 'Entertainment') icon = 'fas fa-film';
        
        categoryOption.innerHTML = `
            <div class="filter-option-content">
                <i class="${icon}"></i>
                <span>${category}</span>
            </div>
            <i class="fas fa-check check-icon"></i>
        `;
        categoryFilterContainer.appendChild(categoryOption);
    });
}

// Populate area filters
function populateAreaFilters() {
    const areaFilterContainer = document.querySelector('.filter-section-sidebar[data-filter-type="area"] .filter-options') ||
                                document.querySelector('.sidebar-filter-content .filter-section-sidebar:nth-child(2) .filter-options');
    
    if (!areaFilterContainer) return;
    
    // Get unique areas
    const areas = [...new Set(webPages.map(page => page.area))];
    
    // Clear existing options except "All"
    const allOption = areaFilterContainer.querySelector('[data-value="all"]');
    areaFilterContainer.innerHTML = '';
    
    // Add "All" option back
    if (allOption) {
        areaFilterContainer.appendChild(allOption);
    }
    
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
    const shopFilterContainer = document.querySelector('.filter-section-sidebar[data-filter-type="shop"] .filter-options') ||
                                document.querySelector('.sidebar-filter-content .filter-section-sidebar:last-child .filter-options');
    
    if (!shopFilterContainer) return;
    
    // Get unique shop names
    const shopNames = [...new Set(webPages.map(page => page.shopName))];
    
    // Clear existing options except "All"
    const allOption = shopFilterContainer.querySelector('[data-value="all"]');
    shopFilterContainer.innerHTML = '';
    
    // Add "All" option back
    if (allOption) {
        shopFilterContainer.appendChild(allOption);
    }
    
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
        
        // Determine category class
        let categoryClass = '';
        let categoryText = page.category;
        
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

// Filter cards based on search and filters
function filterCards() {
    const filtered = webPages.filter(page => {
        // Check category filter
        const categoryMatch = currentFilter === 'all' || 
                             page.category.toLowerCase() === currentFilter.toLowerCase();
        
        // Check area filter
        const areaMatch = currentAreaFilter === 'all' || 
                         page.area.toLowerCase() === currentAreaFilter.toLowerCase();
        
        // Check shop filter
        const shopMatch = currentShopFilter === 'all' || 
                         page.shopName.toLowerCase() === currentShopFilter.toLowerCase();
        
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
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value.toLowerCase().trim();
            filterCards();
        });
    }
    
    // Filter chips listeners
    if (filterChips.length > 0) {
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
        const allChip = document.querySelector('.filter-chip[data-category="all"]');
        if (allChip) {
            allChip.classList.add('active');
        }
    }
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
        if (filterBadge) {
            filterBadge.textContent = activeFilterCount;
            filterBadge.classList.add('active');
        }
        if (dropdownFilterBadge) {
            dropdownFilterBadge.textContent = activeFilterCount;
        }
    } else {
        if (filterBadge) {
            filterBadge.classList.remove('active');
        }
        if (dropdownFilterBadge) {
            dropdownFilterBadge.textContent = '';
        }
    }
}

// Mobile Dropdown Functionality
function initMobileDropdown() {
    const mobileDropdownBtn = document.getElementById('mobileDropdownBtn');
    const mobileDropdownMenu = document.getElementById('mobileDropdownMenu');
    const dropdownSearchBtn = document.getElementById('dropdownSearchBtn');
    const dropdownFilterBtn = document.getElementById('dropdownFilterBtn');
    const dropdownViewAllBtn = document.getElementById('dropdownViewAllBtn');
    const dropdownCollapseBtn = document.getElementById('dropdownCollapseBtn');
    
    if (!mobileDropdownBtn) return { updateFilterBadge };
    
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
    if (dropdownSearchBtn) {
        dropdownSearchBtn.addEventListener('click', () => {
            openMobileSearch();
            closeDropdown();
        });
    }
    
    if (dropdownFilterBtn) {
        dropdownFilterBtn.addEventListener('click', () => {
            openSidebarFilter();
            closeDropdown();
        });
    }
    
    if (dropdownViewAllBtn) {
        dropdownViewAllBtn.addEventListener('click', () => {
            // Reset all filters
            currentFilter = 'all';
            currentAreaFilter = 'all';
            currentShopFilter = 'all';
            
            // Reset search
            if (searchInput) searchInput.value = '';
            currentSearch = '';
            
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
    }
    
    if (dropdownCollapseBtn) {
        dropdownCollapseBtn.addEventListener('click', () => {
            closeDropdown();
        });
    }
    
    function closeDropdown() {
        isDropdownOpen = false;
        mobileDropdownMenu.classList.remove('show');
        mobileDropdownBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
    
    return { updateFilterBadge: updateFilterBadge };
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
    
    if (!sidebarFilter) return { openSidebarFilter: () => {} };
    
    // Open sidebar filter
    function openSidebarFilter() {
        if (sidebarFilterOverlay) sidebarFilterOverlay.classList.add('show');
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
            if (sidebarFilterOverlay) sidebarFilterOverlay.classList.remove('show');
        }, 300);
    }
    
    // Update sidebar filter state based on current filter
    function updateSidebarFilterState() {
        // Reset all options
        document.querySelectorAll('.filter-option-sidebar').forEach(option => {
            option.classList.remove('active');
        });
        
        // Activate appropriate category option
        const categoryOption = document.querySelector(`.filter-option-sidebar[data-filter-type="category"][data-value="${currentFilter}"]`);
        if (categoryOption) categoryOption.classList.add('active');
        
        // Activate appropriate area option
        const areaOption = document.querySelector(`.filter-option-sidebar[data-filter-type="area"][data-value="${currentAreaFilter}"]`);
        if (areaOption) areaOption.classList.add('active');
        
        // Activate appropriate shop option
        const shopOption = document.querySelector(`.filter-option-sidebar[data-filter-type="shop"][data-value="${currentShopFilter}"]`);
        if (shopOption) shopOption.classList.add('active');
        
        updateSelectedFilterCount();
    }
    
    // Update selected filter count
    function updateSelectedFilterCount() {
        let activeFilterCount = 0;
        if (currentFilter !== 'all') activeFilterCount++;
        if (currentAreaFilter !== 'all') activeFilterCount++;
        if (currentShopFilter !== 'all') activeFilterCount++;
        
        if (selectedFilterCount) {
            selectedFilterCount.textContent = activeFilterCount;
        }
    }
    
    // Filter option selection
    document.addEventListener('click', function(e) {
        if (e.target.closest('.filter-option-sidebar')) {
            const option = e.target.closest('.filter-option-sidebar');
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
        }
    });
    
    // Apply filter
    if (applyFilterBtn) {
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
    }
    
    // Clear all filters
    if (clearFilterBtn) {
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
    }
    
    // Event listeners
    if (mobileFilterBtn) {
        mobileFilterBtn.addEventListener('click', openSidebarFilter);
    }
    
    if (closeSidebarFilterBtn) {
        closeSidebarFilterBtn.addEventListener('click', closeSidebarFilter);
    }
    
    if (sidebarFilterOverlay) {
        sidebarFilterOverlay.addEventListener('click', closeSidebarFilter);
    }
    
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
    
    if (!mobileSearchOverlay) return { openMobileSearch: () => {} };
    
    function openMobileSearch() {
        mobileSearchOverlay.classList.add('show');
        setTimeout(() => {
            if (mobileSearchInput) mobileSearchInput.focus();
        }, 100);
    }
    
    function closeMobileSearch() {
        mobileSearchOverlay.classList.remove('show');
        if (mobileSearchInput) mobileSearchInput.value = '';
        currentSearch = '';
        if (searchInput) searchInput.value = '';
        filterCards();
        if (mobileSearchResults) mobileSearchResults.innerHTML = '';
    }
    
    // Event listeners
    if (mobileSearchBtn) {
        mobileSearchBtn.addEventListener('click', openMobileSearch);
    }
    
    if (closeSearchBtn) {
        closeSearchBtn.addEventListener('click', closeMobileSearch);
    }
    
    // Sync mobile search with main search
    if (mobileSearchInput) {
        mobileSearchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value.toLowerCase().trim();
            if (searchInput) searchInput.value = currentSearch;
            filterCards();
            updateMobileSearchResults();
        });
        
        // Close search when pressing Escape
        mobileSearchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeMobileSearch();
            }
        });
    }
    
    // Update mobile search results
    function updateMobileSearchResults() {
        if (!mobileSearchResults) return;
        
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
                    <span class="result-category">${page.category}</span>
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
    
    if (!expandCollapseBtn) return;
    
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

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    init();
    
    // Initialize mobile UI components
    const mobileDropdown = initMobileDropdown();
    const sidebarFilter = initSidebarFilter();
    const mobileSearch = initMobileSearch();
    initExpandCollapse();
    
    // Global functions for mobile UI
    window.updateFilterBadge = updateFilterBadge;
    window.openSidebarFilter = sidebarFilter.openSidebarFilter;
    window.openMobileSearch = mobileSearch.openMobileSearch;
});




