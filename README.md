# Tap Node, Tap Code for Node
[Tap Code](http://en.wikipedia.org/wiki/Tap_code) for mad scientists, inspired by [Morse](https://github.com/ecto/morse). A simple Node.js library.

## Dependencies
    None :)

## Use
#### Command Line
    node tapnode.js -h
    Usage: node tapnode.js [options] string
    
    Options:
      -d, --decode  Decode a string of tap code
      -e, --encode  Encode a string of text
      -h, --help    Show the tap grid  

#### Library Usage

    var tapnode = require('./tapnode');
    
    tapnode.encode('water');
    //..... .. . . .... .... . ..... .... ..
    
    tapnode.decode('..... .. . . .... .... . ..... .... ..');
    //WATER
    
    tapnode.grid
    /*
        1       2       3       4       5
    1   A       B       C/K     D       E
    2   F       G       H       I       J
    3   L       M       N       O       P
    4   Q       R       S       T       U
    5   V       W       X       Y       Z
    
    */
    
    

#### License
MIT