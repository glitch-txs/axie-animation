# Axie Infinity easy Animation NPM Package
## For Next.js

To run you'll need to first install the following dependencies:

```
npm i pixi-spine@1.6.2 pixi.js@4.8.9 @axieinfinity/mixer ethers
```

or

```
yarn add pixi-spine@1.6.2 pixi.js@4.8.9 @axieinfinity/mixer ethers
```

install:

using yarn:
```
yarn add axie-animation 
```

using npm:
```
npm i axie-animation 
```

## Documentation:

### Basics:

You can set a basic Axie animation by giving just any Axie id to the component:


```
import dynamic from 'next/dynamic';

export const AxieAnimation = dynamic(
  () => import('axie-animation').then(module => module.AxieAnimation),
  { ssr: false, loading: () => <></> },
);

const AnimationComponent = () => {


  return (
    <div>
      <AxieAnimation axieId={1235}/>
    </div>
  )
}

export default AnimationComponent
```

You already have an animated Axie displayed on your website!

### Scaling:

You can also scale you Axie by passing a number to the *scaleAxie* property:

The default value of *scaleAxie* is `1`

```
<AxieAnimation axieId={1235} scaleAxie={2}/>
```

If you wish to switch the Axie direction you can do this by adding a negative sign to the scaleAxie number argument:

```
<AxieAnimation axieId={1235} scaleAxie={-2}/>
```

### Choosing a specific animation:

Animations are listed by number and must be set inside an array.

You can get the list of animations by calling:

```
import animations from "@axieinfinity/mixer/dist/data/axie-2d-v3-stuff-animations.json";

const animationList: string[] = animations.items.header
  .map((obj: any) => obj.name)
  .filter((obj: any) => obj.substring(0, 10) !== "action/mix");
```

Here's the list:

```
  const animationList: string[] = [
    "activity/appear",
    "activity/bath",
    "attack/ranged/cast-fly",
    "attack/ranged/cast-high",
    "attack/ranged/cast-low",
    "attack/ranged/cast-multi",
    "attack/ranged/cast-tail",
    "activity/eat-bite",
    "activity/eat-chew",
    "activity/entrance",
    "defense/evade",
    "activity/evolve",
    "battle/get-buff",
    "battle/get-debuff",
    "defense/hit-by-normal",
    "defense/hit-by-normal-crit",
    "defense/hit-by-normal-dramatic",
    "defense/hit-by-ranged-attack",
    "defense/hit-with-shield",
    "attack/melee/horn-gore",
    "attack/melee/mouth-bite",
    "action/move-back",
    "action/move-forward",
    "attack/melee/multi-attack",
    "action/idle/normal",
    "attack/melee/normal-attack",
    "activity/prepare",
    "action/idle/random-01",
    "action/idle/random-02",
    "action/idle/random-03",
    "action/idle/random-04",
    "action/idle/random-05",
    "action/run",
    "draft/run-origin",
    "attack/melee/shrimp",
    "activity/sleep",
    "attack/melee/tail-multi-slap",
    "attack/melee/tail-roll",
    "attack/melee/tail-smash",
    "attack/melee/tail-thrash",
    "activity/victory-pose-back-flip"
]  
```

numbered:
```
0: "activity/appear"
​
1: "activity/bath"
​
2: "attack/ranged/cast-fly"
​
3: "attack/ranged/cast-high"
​
4: "attack/ranged/cast-low"
​
5: "attack/ranged/cast-multi"
​
6: "attack/ranged/cast-tail"
​
7: "activity/eat-bite"
​
8: "activity/eat-chew"
​
9: "activity/entrance"
​
10: "defense/evade"
​
11: "activity/evolve"
​
12: "battle/get-buff"
​
13: "battle/get-debuff"
​
14: "defense/hit-by-normal"
​
15: "defense/hit-by-normal-crit"
​
16: "defense/hit-by-normal-dramatic"
​
17: "defense/hit-by-ranged-attack"
​
18: "defense/hit-with-shield"
​
19: "attack/melee/horn-gore"
​
20: "attack/melee/mouth-bite"
​
21: "action/move-back"
​
22: "action/move-forward"
​
23: "attack/melee/multi-attack"
​
24: "action/idle/normal"
​
25: "attack/melee/normal-attack"
​
26: "activity/prepare"
​
27: "action/idle/random-01"
​
28: "action/idle/random-02"
​
29: "action/idle/random-03"
​
30: "action/idle/random-04"
​
31: "action/idle/random-05"
​
32: "action/run"
​
33: "draft/run-origin"
​
34: "attack/melee/shrimp"
​
35: "activity/sleep"
​
36: "attack/melee/tail-multi-slap"
​
37: "attack/melee/tail-roll"
​
38: "attack/melee/tail-smash"
​
39: "attack/melee/tail-thrash"
​
40: "activity/victory-pose-back-flip"
```

*animation 1 and 31 are broken, idk why*

You can pass an array to *animationId* with your desired animations.

This example will loop the animations 0, 3 and 5:

```
<AxieAnimation axieId={1235} animationId={[0, 3, 5]}/>
```

The default value of *animationId* is `[27,28,29,30]`

You can also set a *delay* between each animation. The default value of the *delay* variable is `1.8`

```
<AxieAnimation axieId={1235} animationId={[0, 3, 5]} delay={1} />
```

### Looping single animations

To get just one animation looped without delays you can set the *loopAnimation* prop as *true*:

```
<AxieAnimation axieId={1235} animationId={[32]} loopAnimation />
```

*This is useful in case you want you're axie to run without gitches for example.*

### Styling the Canvas:

You can also style the canvas by choosing the *width*, *height* and even a *backgroundColor*

The default value for the canvas style are:

```
style: {
    width: 600,
    height: 500,
    transparent: true,
    resolution: window.devicePixelRatio,
  }
```

*Notice than when adding a style to the canvas all default value will get deleted.*

Let's set a *width* and *hight* of '400' and a *backgroundColor* of `#FF91AF`:

```
import dynamic from 'next/dynamic';

export const AxieAnimation = dynamic(
  () => import('axie-animation').then(module => module.AxieAnimation),
  { ssr: false, loading: () => <></> },
);

const AnimationComponent = () => {

  const AxieStyle = {
    width: 400,
    height: 400,
    transparent: false,
    backgroundColor: 0xFF91AF
  }

  return (
    <div>
      <AxieAnimation axieId={1235} style={AxieStyle}/>
    </div>
  )
}

export default AnimationComponent
```

Notice how we set the color '#FF91AF' as '0xFF91AF' (switching '#' to '0x'), and *width* and *height* as numbers.

### Y Position

You can pass a *YPosition* property if you would like to change the Y Axie's position inside the canvas. 

```
<AxieAnimation axieId={1235} YPosition={1.2}/>
```

It's advisable to use a number between 1 and 2. Inside the code this number is going to divide the height of the canvas.

*Default value is 2*

## Dynamic Render

The whole Axie will re-render if you dynamically change the *axieId* or *scaleAxie* props.

Only the animation will change and the Axie will NOT re-render if you dynamically change the *animationId*, *loopAnimation* or *delay*.

(animation will also re-render if the browser is blured and then focused back, this fixes an animation bug)

----------
Feel free to commit changes, if you would like to get in touch with me you can find me on discord as Glitch#0794