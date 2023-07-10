const seeMoreButton = document.getElementById('seeMoreButton');
const seeMoreContent = document.getElementById('seeMoreContent');

seeMoreButton.addEventListener('click', function() {
  if (seeMoreButton==this.click) {
    
    // seeMoreContent.style.display = 'none';
    seeMoreButton.textContent = 'See More';
    alert("messes");
  } else {
    
    alert("ok");
    seeMoreContent.style.display = 'grid';
    seeMoreButton.textContent = 'See Less';
    console.log("clicked");
  }
});
