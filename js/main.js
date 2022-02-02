const MB = 1_000_000;

function row(i, bytes) {
  return `<div class='data'><div>${i}</div><div>${Math.floor(bytes / MB)}</div></div>`
}

runBtn.onclick = () => {
  runBtn.remove();
  addString();
}

async function addString(mbs) {
  console.log({ mbs, a: 'X'.repeat(200 * MB) });
  const memory = await performance.measureUserAgentSpecificMemory();
  const mbs = Math.floor(memory.bytes / MB);
  outputDiv.insertAdjacentHTML('beforeend',
    `<div class='data'><div>${i}</div><div>${mbs}</div></div>`);

  //if (i < 40)
  setTimeout(() => addString(mbs), 1000);
}