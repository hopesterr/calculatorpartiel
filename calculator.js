function add(a, b) {}

function sub(a, b) {}

function mul(a, b) {}

function parseNumber(value) {
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

function compute(op, a, b) {
  // TODO: router vers la bonne opération
}

document.getElementById("btn").addEventListener("click", () => {
  const a = parseNumber(document.getElementById("a").value);
  const b = parseNumber(document.getElementById("b").value);
  const op = document.getElementById("op").value;

  const resultEl = document.getElementById("result");

  if (a === null || b === null) {
    resultEl.textContent = "Entrée invalide";
    return;
  }

  const res = compute(op, a, b);
  resultEl.textContent = res;
});
