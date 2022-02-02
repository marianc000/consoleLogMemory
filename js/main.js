const MB = 1_000_000;

function row(i, bytes) {
  return `<div class='data'><div>${i}</div><div>${Math.floor(bytes / MB)}</div></div>`
}

runBtn.onclick = () => {
  runBtn.remove();
  addString();
}

async function addString(i = 1) {
  console.log({ a: 'X'.repeat(100 * MB) });
  const memory = await performance.measureUserAgentSpecificMemory();
  outputDiv.insertAdjacentHTML('beforeend',
    `<div class='data'><div>${i}</div><div>${Math.floor(memory.bytes / MB)}</div></div>`);

  //if (i < 40)
  setTimeout(() => addString(++i), 1000);
}