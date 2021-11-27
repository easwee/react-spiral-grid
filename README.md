# React spiral grid

Generates a square/rectangular grid system starting from the center of parent element and building the grid in a spiral. Usable as a different more creative way to present content or images in browser. Accepts any kind of component as grid content.

## Usage

```
<SpiralGrid config={{ item: { width: 100, height: 100 } }}>
    <div>test</div>
    <p>test</p>
    <h3>test</h3>
    <a href="#">test</a>
    <code>test</code>
</SpiralGrid>
```

SpiralGrid will create tile wrappers around each child automatically - any kind of element is supported.

## How it works

![Spiral grid direction graphic](https://raw.githubusercontent.com/easwee/react-spiral-grid/master/docs/assets/spiral_direction.png)

It starts generating tiles in the center starting to the left and following a counter-clockwise direction. Tile width and height can be customized with config. For best looking grids use a set of elements that fills 3x3, 4x4, 5x5 patterns (count of child elements 9, 16, 25, 36 etc...), but any number works. I made this plugin for a chronologically sorted image gallery that shows newest images in the center and you get older content towards the edges.

SpiralGrid will automatically take the size of the parent container, it will center itself on first render and enable scrolling and dragging around when tile content exceeds the parent size.

## Future

May add additional functionalities if it get's any traction.

## TODO

- Add sample gallery
