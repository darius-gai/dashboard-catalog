// Navigation component
function renderNavigation(activePage) {
    return `
        <a href="index.html" class="nav-item ${activePage === 'home' ? 'active' : ''}">
            <span class="nav-icon">
                <svg viewBox="0 0 495.398 495.398" width="18" height="18" aria-label="Home icon">
                    <g>
                        <path d="M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391-28.413-28.391c-15.669,0-28.377,12.709-28.377,28.391 v29.941L299.31,37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,11.104-11.082,29.071,0,40.158 c11.087,11.101,29.089,11.101,40.172,0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,187.747 c5.567,5.551,12.825,8.312,20.081,8.312c7.271,0,14.541-2.764,20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z"></path>
                        <path d="M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401 c0,28.253,22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,0,51.159-22.907,51.159-51.159V306.79 c0-3.713-1.465-7.271-4.085-9.877L257.561,131.836z"></path>
                    </g>
                </svg>
            </span>
            <span>Home</span>
        </a>
        <a href="apps.html" class="nav-item ${activePage === 'apps' ? 'active' : ''}">
            <span class="nav-icon">
                <svg viewBox="0 0 20 20" width="20" height="20" aria-label="Apps icon">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 5.75C3.5 4.50736 4.50736 3.5 5.75 3.5H8.5C9.05228 3.5 9.5 3.94771 9.5 4.5V8.5C9.5 9.05228 9.05229 9.5 8.5 9.5H4.5C3.94772 9.5 3.5 9.05229 3.5 8.5V5.75ZM5.75 5C5.33579 5 5 5.33579 5 5.75V8H8V5H5.75Z"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 14.25C3.5 15.4926 4.50736 16.5 5.75 16.5H8.5C9.05228 16.5 9.5 16.0523 9.5 15.5V11.5C9.5 10.9477 9.05229 10.5 8.5 10.5H4.5C3.94772 10.5 3.5 10.9477 3.5 11.5V14.25ZM5.75 15C5.33579 15 5 14.6642 5 14.25V12H8V15H5.75Z"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.25 16.5C15.4926 16.5 16.5 15.4926 16.5 14.25V11.5C16.5 10.9477 16.0523 10.5 15.5 10.5H11.5C10.9477 10.5 10.5 10.9477 10.5 11.5V15.5C10.5 16.0523 10.9477 16.5 11.5 16.5H14.25ZM15 14.25C15 14.6642 14.6642 15 14.25 15H12V12H15V14.25Z"></path>
                    <path d="M13.5 3.5C13.9142 3.5 14.25 3.83579 14.25 4.25V5.75H15.75C16.1642 5.75 16.5 6.08579 16.5 6.5C16.5 6.91421 16.1642 7.25 15.75 7.25H14.25V8.75C14.25 9.16421 13.9142 9.5 13.5 9.5C13.0858 9.5 12.75 9.16421 12.75 8.75V7.25H11.25C10.8358 7.25 10.5 6.91421 10.5 6.5C10.5 6.08579 10.8358 5.75 11.25 5.75H12.75V4.25C12.75 3.83579 13.0858 3.5 13.5 3.5Z"></path>
                </svg>
            </span>
            <span>Apps</span>
        </a>
        <a href="#" class="nav-item ${activePage === 'stores' ? 'active' : ''}">
            <span class="nav-icon">
                <svg viewBox="0 0 16 16" width="16" height="16" aria-label="Dev Stores icon">
                    <g clip-path="url(#clip0_18792_35399)">
                        <path d="M10.2779 1C11.1218 1 11.919 1.38744 12.4403 2.05099L14.6003 4.80012L14.6103 4.81407C15.3459 5.84395 14.8481 7.20962 13.7787 7.62496H12.6085C12.1344 7.62496 11.6938 7.38073 11.4425 6.97871L10.78 5.91871C10.6675 5.73867 10.4783 5.6357 10.2812 5.62568C10.2711 5.62517 10.2611 5.62491 10.2511 5.62488C10.1374 5.62458 10.0223 5.65526 9.91876 5.71996C9.83137 5.77458 9.76214 5.84726 9.71288 5.93014C9.69326 5.96312 9.67648 5.99828 9.66297 6.03537C9.65492 6.05745 9.64812 6.07995 9.64259 6.10276L9.56811 6.40069C9.38822 7.12024 8.7417 7.62503 8.00001 7.62503C7.25831 7.62503 6.6118 7.12024 6.43191 6.40069L6.35737 6.10255C6.35218 6.08114 6.34586 6.06001 6.33844 6.03924C6.32422 5.99938 6.30624 5.96173 6.28501 5.92659C6.23589 5.84519 6.1674 5.7738 6.08126 5.71996C5.97774 5.65526 5.86261 5.62458 5.74893 5.62488C5.73942 5.6249 5.72988 5.62515 5.72033 5.62561C5.52269 5.63518 5.33282 5.73821 5.22001 5.91871L4.55751 6.97871C4.30624 7.38073 3.8656 7.62496 3.39151 7.62496H2.22132C1.1519 7.20962 0.654078 5.84395 1.38971 4.81407L1.39967 4.80012L3.5597 2.05099C4.08106 1.38744 4.87821 1 5.72208 1H10.2779Z"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.50001 8.87496V13.25C2.50001 14.2165 3.28351 15 4.25001 15H11.75C12.7165 15 13.5 14.2165 13.5 13.25V8.87496H12.6085C11.7034 8.87496 10.8622 8.40871 10.3825 7.64121L10.37 7.62126C9.84781 8.38839 8.96979 8.87503 8.00001 8.87503C7.03023 8.87503 6.15221 8.38839 5.62998 7.62126L5.61751 7.64121C5.13782 8.40871 4.29659 8.87496 3.39151 8.87496H2.50001ZM11 11.35C11 10.7977 10.5523 10.35 10 10.35H9.00001C8.44772 10.35 8.00001 10.7977 8.00001 11.35V13.75C8.00001 13.888 8.11194 14 8.25001 14H10.75C10.8881 14 11 13.888 11 13.75V11.35Z"></path>
                    </g>
                </svg>
            </span>
            <span>Dev stores</span>
        </a>
        <div class="nav-group">
            <a href="agents.html" class="nav-item nav-parent ${['agents', 'catalog', 'universal-cart', 'checkout', 'api-keys'].includes(activePage) ? 'active' : ''}">
                <span class="nav-icon">
                    <svg viewBox="0 0 24 24" width="18" height="18" aria-label="Agents icon">
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z" fill="currentColor"/>
                    </svg>
                </span>
                <span>Agents</span>
            </a>
            <div class="nav-subitems">
                <a href="catalogs.html" class="nav-item nav-subitem ${activePage === 'catalog' ? 'active' : ''}">
                    <span class="nav-icon">
                        <svg viewBox="0 0 24 24" width="18" height="18" aria-label="Catalog icon">
                            <path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>
                        </svg>
                    </span>
                    <span>Catalogs</span>
                </a>
                <a href="universal-cart.html" class="nav-item nav-subitem ${activePage === 'universal-cart' ? 'active' : ''}">
                    <span class="nav-icon">
                        <svg viewBox="0 0 24 24" width="18" height="18" aria-label="Universal Cart icon">
                            <path d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C20.96 5.34 21 5.17 21 5C21 4.45 20.55 4 20 4H5.21L4.27 2H1ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z" fill="currentColor"/>
                        </svg>
                    </span>
                    <span>Universal Cart</span>
                </a>
                <a href="#" class="nav-item nav-subitem ${activePage === 'checkout' ? 'active' : ''}" id="checkoutNavItem">
                    <span class="nav-icon">
                        <svg viewBox="0 0 24 24" width="18" height="18" aria-label="Checkout icon">
                            <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z" fill="currentColor"/>
                        </svg>
                    </span>
                    <span>Checkout</span>
                    <span class="coming-soon-badge">Coming Soon</span>
                </a>
                <a href="api-keys.html" class="nav-item nav-subitem ${activePage === 'api-keys' ? 'active' : ''}">
                    <span class="nav-icon">
                        <svg viewBox="0 0 24 24" width="18" height="18" aria-label="API Keys icon">
                            <path d="M12.65 10C11.7 7.31 8.9 5.5 5.77 6.12C3.48 6.58 1.62 8.41 1.14 10.7C0.32 14.57 3.26 18 7 18C9.61 18 11.83 16.33 12.65 14H16V18H20V14H22V10H12.65ZM7 14C5.9 14 5 13.1 5 12C5 10.9 5.9 10 7 10C8.1 10 9 10.9 9 12C9 13.1 8.1 14 7 14Z" fill="currentColor"/>
                        </svg>
                    </span>
                    <span>API Keys</span>
                </a>
            </div>
        </div>
    `;
}

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar && sidebar.hasAttribute('data-page')) {
        const activePage = sidebar.getAttribute('data-page');
        sidebar.innerHTML = renderNavigation(activePage);
        
        // Attach checkout modal handler
        const checkoutNavItem = document.getElementById('checkoutNavItem');
        if (checkoutNavItem) {
            checkoutNavItem.addEventListener('click', function(e) {
                e.preventDefault();
                showCheckoutModal();
            });
        }
    }
});

// Show checkout coming soon modal
function showCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // Close on clicking outside the modal
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                hideCheckoutModal();
            }
        });
        
        // Close on Escape key
        document.addEventListener('keydown', handleEscapeKey);
    }
}

// Hide checkout modal
function hideCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        
        // Remove escape key listener
        document.removeEventListener('keydown', handleEscapeKey);
    }
}

// Handle escape key press
function handleEscapeKey(e) {
    if (e.key === 'Escape') {
        hideCheckoutModal();
    }
}

