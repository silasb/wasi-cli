use std::fs;
use std::env;

fn main() {
    let contents =
        fs::read_to_string("/sandbox/file.txt").expect("Something went wrong reading the file");
    println!("Content: {}", contents);
    println!("Hello, world!");
    let args: Vec<String> = env::args().collect();
    println!("{:?}", args);

    for argument in env::args_os() {
        println!("{:?}", argument);
    }
}
