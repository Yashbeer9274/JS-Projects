document.getElementById("add").addEventListener("click", fna);
document.getElementById("sub").addEventListener("click", fna);
var count = 0;
function fna(e) {
  if (e.target.id == "add")
    document.getElementById("ans").innerHTML = ++count;
  if (e.target.id == "sub")
    document.getElementById("ans").innerHTML = count--;
}