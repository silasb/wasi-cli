use std::fs;
use std::env;

fn main() {
    println!("Hello, world from rust!!!!");

    let contents =
        fs::read_to_string("/sandbox/file.txt").expect("Something went wrong reading the file");
    println!("Content from /sandbox/file.txt: {}", contents);

    let args: Vec<String> = env::args().collect();
    println!("args: {:?}", args);

    for argument in env::args_os() {
        println!("{:?}", argument);
    }
}
