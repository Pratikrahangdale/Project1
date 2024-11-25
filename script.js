// Handle Blog Creation (Static functionality)
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-blog-form");
  if (form) {
      form.addEventListener("submit", (e) => {
          e.preventDefault(); // Prevent default form submission
          
          const title = document.getElementById("title").value;
          const content = document.getElementById("content").value;

          if (!title || !content) {
              alert("Please fill out the title and content.");
              return;
          }

          alert(`Blog Created!\nTitle: ${title}\nContent: ${content}`);
          form.reset(); // Clear form
      });
  }

  // Dynamically load blog list
  const blogListContainer = document.getElementById("blogs");
  if (blogListContainer) {
      const blogs = [ /* Define or fetch blog data here */ ];
      blogs.forEach(blog => {
          const blogItem = document.createElement("div");
          blogItem.classList.add("blog-item");
          blogItem.addEventListener('click', () => {
              window.location.href = `blog.html?id=${blog.id}`;
          });

          const blogTitle = document.createElement("h3");
          blogTitle.textContent = blog.title;
          const blogExcerpt = document.createElement("p");
          blogExcerpt.textContent = blog.excerpt;

          blogItem.appendChild(blogTitle);
          blogItem.appendChild(blogExcerpt);
          blogListContainer.appendChild(blogItem);
      });
  }
});

// Smooth scrolling for navigation
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
          document.querySelector(href).scrollIntoView({
              behavior: 'smooth',
          });
      } else {
          window.location.href = href;
      }
  });
});


// 
// Select the hamburger and nav-links elements
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  // Toggle the 'active' class to show/hide the menu on small screens
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});

