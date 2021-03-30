"use strict";
const homedir = require('os').homedir();
const fs = require("fs");
const { WASI } = require("wasi");

const pluginPath = homedir + '/.wasi-cli/'
fs.mkdir(pluginPath, { recursive: true }, function() {})

let files = fs.readdirSync(pluginPath)

files = files.filter(f => f.search('.wasm')).map(f => f.replace('.wasm', ''))

if (files.includes(process.argv[2])) {
  const args = process.argv.slice(3)
  const wasi = new WASI({
    args: args,
    env: {
    },
    preopens: {
      "/sandbox": process.cwd(),
    }
  });

  const importObject = { wasi_snapshot_preview1: wasi.wasiImport };

  (async () => {
    const wasm = await WebAssembly.compile(
      fs.readFileSync(`${pluginPath}/hello.wasm`)
      //fs.readFileSync("./hello/target/wasm32-wasi/debug/hello.wasm")
    );
    const instance = await WebAssembly.instantiate(wasm, importObject);

    wasi.start(instance);
  })();
}
