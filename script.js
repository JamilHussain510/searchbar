document.getElementById("searchInput").addEventListener("keyup", function (e) {
  let searchQuery = e.target.value.toLowerCase();
  let allNamesDOMCollection = document.getElementsByClassName("name");
  for (let count = 0; count < allNamesDOMCollection.length; count++) {
    const currentName =
      allNamesDOMCollection[count].textContent.toLocaleLowerCase();
    if (currentName.includes(searchQuery)) {
      allNamesDOMCollection[count].style.display = "block";
    } else {
      allNamesDOMCollection[count].style.display = "none";
    }
  }
});
