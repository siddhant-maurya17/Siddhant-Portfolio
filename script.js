var typed = new Typed('#element', {
    strings: ['Web Developer.', '&amp; Software Engineer.'],
    typeSpeed: 50,
});


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('download-resume').addEventListener('click', function() {
      // Create a link element
      var link = document.createElement('a');
      
      // Set the attributes for the link
      link.href = 'Files/siddhant-maurya17.pdf'; // Replace with the actual path to your resume PDF
      link.download = 'siddhant-maurya17.pdf'; // Name for the downloaded file
      
      // Simulate a click event on the link to trigger the download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  });
  