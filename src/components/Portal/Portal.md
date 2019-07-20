# Portal.md
Renders a component to a dom element outside the current React tree.

## Usage
```html
<Portal>
  content rendered as a direct descendant of document.body
</Portal>
```

```html
<Portal target={targetRef.current}>
  content rendered as a direct descendant of target
</Portal>
```
