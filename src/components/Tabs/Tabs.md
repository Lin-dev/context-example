# Tabs.js
Quick naive example of a component showing tabs - doesn't handle nested `<Tabs />` or anything like that.

### Usage
```html
<Tabs>
  <Tab header="tab header">
    tab content
  </Tab>
  <Tab header="tab header 2">
    tab content 2
  </Tab>
</Tabs>
```


Another thing I might mention here is sometimes it is valuable to also render out children as a function if it is given, with the context value as the parameter passed down.

So you might want to say:
```html
<Tabs>
  {(tabs) => ({
    <Tab header="tab header">
      {tabs.selectedTabId}
    </Tab>
  })}
</Tabs>
```

which means you don't need to create another file writing out tabs to be able to retrieve the current `TabsContext`.
