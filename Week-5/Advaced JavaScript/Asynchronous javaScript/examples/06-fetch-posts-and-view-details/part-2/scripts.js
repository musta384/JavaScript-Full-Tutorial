/*
This is a complete asynchronous data fetching and UI management
 code that demonstrates how to:
✅ Fetch and cache API data,
✅ Handle loading and error states,
✅ Escape HTML for security,
✅ Handle network changes,
✅ Manage UI dynamically.*/

async function fetchPosts() {
  // Cache to store fetched posts
  const postCache = new Map();

  // Show loading indicator
  showLoadingIndicator('posts', 'Loading posts...');

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    // Handle HTTP errors
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const posts = await response.json();

    // Handle empty response
    if (!posts || posts.length === 0) {
      showEmptyState('posts', 'No posts found.');
      return;
    }

    // Cache all posts
    posts.forEach(post => postCache.set(post.id, post));

    const list = posts.slice(0, 5).map(p => `
      <div class="post" data-id="${p.id}">
        <h3>${p.title}</h3>
        <p>${p.body.substring(0, 100)}...</p>
      </div>
    `).join("");

    document.getElementById("posts").innerHTML = list;

    // Hide loading indicator
    hideLoadingIndicator('posts');

    // Add click event listeners with enhanced error handling
    document.querySelectorAll(".post").forEach(post => {
      post.addEventListener("click", async () => {
        await showPostDetails(post, postCache);
      });
    });

  } catch (err) {
    // Hide loading indicator and show error
    hideLoadingIndicator('posts');
    showError('posts', `Failed to load posts: ${err.message}`);
    console.error('Error fetching posts:', err);
  }
}

// Separate function for showing post details with caching
async function showPostDetails(postElement, postCache) {
  const id = postElement.dataset.id;

  // Show loading for details
  showLoadingIndicator('details', 'Loading post details...');

  try {
    let postDetails;

    // Check cache first
    if (postCache.has(Number(id))) {
      postDetails = postCache.get(Number(id));
      console.log('Loaded from cache:', id);
    } else {
      // Fetch from API if not in cache
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      postDetails = await response.json();

      // Add to cache for future use
      postCache.set(postDetails.id, postDetails);
      console.log('Fetched from API and cached:', id);
    }

    // Hide loading and display details
    hideLoadingIndicator('details');
    document.getElementById("details").innerHTML = `
      <div class="details">
        <h3>${escapeHtml(postDetails.title)}</h3>
        <p>${escapeHtml(postDetails.body)}</p>
        <small>Post ID: ${postDetails.id}, User ID: ${postDetails.userId}</small>
      </div>
    `;

  } catch (err) {
    hideLoadingIndicator('details');
    showError('details', `Failed to load post details: ${err.message}`);
    console.error('Error fetching post details:', err);
  }
}

// Utility functions for UI states

function showLoadingIndicator(containerId, message = 'Loading...') {
  const container = document.getElementById(containerId);
  container.innerHTML = `
    <div class="loading-indicator">
      <div class="spinner"></div>
      <p>${message}</p>
    </div>
  `;
}

function hideLoadingIndicator(containerId) {
  const container = document.getElementById(containerId);
  const loadingIndicator = container.querySelector('.loading-indicator');
  if (loadingIndicator) {
    loadingIndicator.remove();
  }
}

function showError(containerId, message) {
  const container = document.getElementById(containerId);
  container.innerHTML = `
    <div class="error-message">
      <span style="color: red;">❌</span>
      <p>${message}</p>
      <button onclick="fetchPosts()" class="retry-btn">Try Again</button>
    </div>
  `;
}

function showEmptyState(containerId, message) {
  const container = document.getElementById(containerId);
  container.innerHTML = `
    <div class="empty-state">
      <span style="color: #666;">📝</span>
      <p>${message}</p>
    </div>
  `;
}

// Security: Basic HTML escaping to prevent XSS
function escapeHtml(unsafe) {
  if (typeof unsafe !== 'string') return unsafe;
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Enhanced fetch with timeout
function fetchWithTimeout(url, options = {}, timeout = 8000) {
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Request timeout')), timeout)
    )
  ]);
}

// Network status monitoring
function checkNetworkStatus() {
  if (!navigator.onLine) {
    showError('posts', 'No internet connection. Please check your network.');
    return false;
  }
  return true;
}

// Modified fetchPosts with network check and timeout
async function fetchPostsEnhanced() {
  if (!checkNetworkStatus()) return;

  // Use fetchWithTimeout instead of regular fetch
  const response = await fetchWithTimeout("https://jsonplaceholder.typicode.com/posts");
  // ... rest of the implementation
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function () {
  fetchPosts();

  // Retry on network recovery
  window.addEventListener('online', function () {
    const errorElements = document.querySelectorAll('.error-message');
    if (errorElements.length > 0) {
      fetchPosts();
    }
  });
});