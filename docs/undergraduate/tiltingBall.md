---
sidebar_position: 12
---

# Tilting-ball game

CICS 256 final project in collaboration with Lyle Kottke, [linked here](https://github.com/suobset/Tilting-Ball-Game). A Google Sites website also has details on the functioning of this game (made with Arduino, a 16*16 LED Matrix, and an acclerometer). This project was done under [Prof. Donghyun Kim](https://www.cics.umass.edu/people/kim-donghyun).

![Web Screenshot](./assets/tiltingBall.png)

[Website for Project](https://sites.google.com/umass.edu/rollgame/home)

### Project Pitch

<a href="https://github.com/suobset/256BallTilt/blob/main/assets/CICS156%20Final%20Project%20Presentation.pdf">Link to project Pitch (uploaded to repository)</a>

<a href="https://sites.google.com/umass.edu/rollgame/home">Link to Project Website with Updates</a>

### Timeline:

* Week 1: Ordering components, brainstorming/planning as much as possible before they arrive
* Week 2: Attaching components, getting familiar with tilt sensor/using LED display
* Week 3: Coding basic ball movement with button input, possibly start using tilt sensor
* Week 4: Tilt sensor ball movement finalized
* Week 5: Adding additional features (Winning a level, failing a level, obstacles)
* Week 6: Tweaking, bug fixing, play testing, polishing

### components

* Neopixel LED display (32x32)
* 4 buttons to test ball moving input
* Tilt sensor
* Our makerboards (or potentially an Arduino Uno or Raspberry Pi, if computation/latency errors occur)

### Installation 

* Arduino Zero Documentation: https://docs.arduino.cc/hardware/zero
* Get started with Arduino Zero: https://www.arduino.cc/en/Guide/ArduinoZero
* Test ```BlinkExample``` under examples 
* Connect Acclerometer with Arduino Zero
* Test ```accl_example``` under examples
* Connecting Neopixel with Arduino Zero: https://learn.adafruit.com/32x16-32x32-rgb-led-matrix/connecting-with-jumper-wires
* Use ```3v3``` or ```VBUS``` for red, ```GND``` for black. Find an EXACT 5V port. 
* Install RGB Matrix, AdaFruit GFZ, and others as listed in above link
* Test ```neoPixel_32_example``` under examples