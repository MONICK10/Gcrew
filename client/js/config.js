// Shared configuration for the client application
export const API_BASE_URL = 'http://localhost:5006';

// Export as window global for scripts that can't use ES6 modules
window.API_BASE_URL = API_BASE_URL;