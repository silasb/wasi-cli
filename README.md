# wasi-cli

An experimental CLI with Node WASI interface with the goal of running commands passed through to a WebAssembly module.

[![asciicast](https://asciinema.org/a/7ZrWe2QBmeIR1leJKFDGnZvUk.svg)](https://asciinema.org/a/7ZrWe2QBmeIR1leJKFDGnZvUk)

```
nvm use lts/fermium
npm install -g pkg
build.sh

cd hello
rustup target add wasm32-wasi
cargo build --target wasm32-wasi

mkdir ~/.wasi-cli/
cp hello/target/wasm32-wasi/debug/hello.wasm ~/.wasi-cli/

./wasi-cli-linux hello test
(node:24137) ExperimentalWarning: WASI is an experimental feature. This feature could change at any time
(Use `wasi-cli-linux --trace-warnings ...` to show where the warning was created)
Content: hello

Hello, world!
["test"]
"test"
```
