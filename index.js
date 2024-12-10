document.addEventListener("DOMContentLoaded", function () {
    // Function to check the screen width and update classes
    function updateCardAlignment() {
      // Get all rows in the container
      const rows = document.querySelectorAll(".container .row");
  
      rows.forEach((row) => {
        // Get all columns within the row
        const columns = row.querySelectorAll("[class*='justify-content-']");
        
        columns.forEach((column) => {
          // Check the current class and modify it if necessary
          if (window.innerWidth < 768) { // Adjust for smaller screens
            if (column.classList.contains("justify-content-start") || column.classList.contains("justify-content-end")) {
              column.classList.remove("justify-content-start", "justify-content-end");
              column.classList.add("justify-content-center");
            }
          } else {
            // Revert to original classes on larger screens if needed
            if (column.classList.contains("justify-content-center")) {
              column.classList.remove("justify-content-center");
              if (column.dataset.originalClass === "justify-content-start") {
                column.classList.add("justify-content-start");
              } else if (column.dataset.originalClass === "justify-content-end") {
                column.classList.add("justify-content-end");
              }
            }
          }
        });
      });
    }
  
    // Save original classes for restoration
    document.querySelectorAll("[class*='justify-content-']").forEach((element) => {
      const originalClass = Array.from(element.classList).find(cls => cls.startsWith("justify-content-"));
      element.dataset.originalClass = originalClass;
    });
  
    // Initial check on page load
    updateCardAlignment();
  
    // Update on window resize
    window.addEventListener("resize", updateCardAlignment);
  });
  