const clearscreen = () => {
  document.getElementById("result").value = "";
};

function display(value) {
  document.getElementById("result").value += value;
}

function calculate() {
  const p = document.getElementById("result").value;
  const q = eval(p);
  document.getElementById("result").value = q;
}

function del() {
  document.getElementById("result").value = "";
}
