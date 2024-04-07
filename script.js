document.getElementById("openDoc").addEventListener("click", function () {
  let originalLink = document.getElementById("scribdLink").value;
  if (originalLink) {
    let modifiedLink = originalLink.replace(
      /(scribd\.com\/)[^\/]+\/(\d+).*$/,
      "$1embeds/$2/content"
    );
    window.open(modifiedLink, "_blank");
    document.getElementById("scribdLink").value = ""; // Clear the input field
  } else {
    alert("Please enter a valid Scribd link.");
  }
});
