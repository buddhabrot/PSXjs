# PSXjs: a JavaScript PSX (Sony Playstation (r)) emulator

An emulator for the PSX written in JavaScript. 
Currently in very early phase and not useable unless you want to cooperate getting it there. 
It's our intention to make a cleanly written emulator that works at acceptable speeds.
It is also an exercise in make a good unit-tested Javascript project and in using WebGL for accelerated graphical output.

This README is incomplete and will evolve with the project.

## Known limitations

Naturally, since Javascript is probably the worst language (or at least, has the most unsuitable implementations) to implement bitwise operations and other low-level meddling in, there will be a big performance hit. We'll be trying to work around these issues as we go.


## Basic ideas

- Client code: The client simply executes the PSX machine by emulating its CPU, GPU, MMU's, and audio.
- Server code: The server emulates the PSX' cd-rom drive. It responds to any requests the client may have, and also provides it with initial boot data.
