var result = "";
for (var rows = 1; rows <= 10; rows++) {
  for (var cols = rows; cols < 10 + rows; cols++) {
    if (cols > 10) result += " " + (cols - 10);
    else if (cols === 10) result += " " + 0;
    else result += " " + cols;
  }
  result += "\n";
}
console.log(result);
