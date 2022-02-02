const MB = 1_000_000;

runBtn.onclick = () => {
  runBtn.remove();
  addString();
}

async function addString(prevMbs=0,i=1) {
  console.log({ i, prevMbs, a: 'X'.repeat(200 * MB) });
  const memory = await performance.measureUserAgentSpecificMemory();
  const mbs = Math.floor(memory.bytes / MB);
  outputDiv.insertAdjacentHTML('beforeend',
    `<div class='data'><div>${i}</div><div>${mbs}</div></div>`);

  setTimeout(() => addString(mbs,++i), 1000);
}