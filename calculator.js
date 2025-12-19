function add(a, b) { return a + b; }

function sub(a, b) {}

function mul(a, b) {}

function parseNumber(value) {
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

function compute(op, a, b) {
  if (op === "add") return add(a, b);
  return "Opération non gérée";
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

  resultEl.textContent = compute(op, a, b);
});

