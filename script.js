// JavaScript to add hover preview interactions for animations

document.getElementById("fade-in").addEventListener("mouseover", function() {
    document.getElementById("fadePreview").classList.add("fade-in");
  });
  
  document.getElementById("fade-in").addEventListener("mouseout", function() {
    document.getElementById("fadePreview").classList.remove("fade-in");
  });
  
  document.getElementById("bounce").addEventListener("mouseover", function() {
    document.getElementById("bouncePreview").classList.add("bounce");
  });
  
  document.getElementById("bounce").addEventListener("mouseout", function() {
    document.getElementById("bouncePreview").classList.remove("bounce");
  });
  
  document.getElementById("spin").addEventListener("mouseover", function() {
    document.getElementById("spinPreview").classList.add("spin");
  });
  
  document.getElementById("spin").addEventListener("mouseout", function() {
    document.getElementById("spinPreview").classList.remove("spin");
  });
  
  document.getElementById("scale-up").addEventListener("mouseover", function() {
    document.getElementById("scaleUpPreview").classList.add("scale-up");
  });
  
  document.getElementById("scale-up").addEventListener("mouseout", function() {
    document.getElementById("scaleUpPreview").classList.remove("scale-up");
  });
  