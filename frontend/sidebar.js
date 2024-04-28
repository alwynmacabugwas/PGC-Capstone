/* var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
} */

// Get all dropdown buttons
var dropdownBtns = document.querySelectorAll('.dropdown-btn');

// Add click event listener to each dropdown button
dropdownBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        // Close all dropdowns except the one being clicked
        dropdownBtns.forEach(function(otherBtn) {
            if (otherBtn !== btn) {
                otherBtn.nextElementSibling.style.display = 'none';
            }
        });
        
        // Toggle current dropdown
        var dropdownContent = this.nextElementSibling;
        dropdownContent.style.display === 'block' ? 
            dropdownContent.style.display = 'none' : 
            dropdownContent.style.display = 'block';
    });
});