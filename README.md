<blockquote>
  <!-- This <blockquote> will be hidden in gh-pages, because it's no gonna work there and there's better menue -->
  <a href="./docs/starter.md">README of starter</a> 
  <p>
    If you are here for the <strong>starter</strong> click above link</br>
    If you are here for the <strong>react-render-counter</strong>, this is it</br>
  </p>
  <!-- 
    You can remove this after you started.  
    For the convenience of merging, README.md below is all yours, I will try my best not to change them.
    Also, you should change docs/starter.md as little as you can to avoid conflicts.
   -->
</blockquote>

# Example Component: react-render-counter
> RenderCounter is a tool component can be used in dev environment. It can tell you how many times each part of your component has been rendered.  
> This is composed with a HOC and a pure component to count render times  
> HOC is also useful when you want to track render times for your component.

## Installation
```
yarn add --dev react-render-counter
```
or
```
npm install --save-dev react-render-counter
```

## Usage
1. `RenderCounter` - withRenderCount(Counter)

  ```js
  import RenderCounter from 'react-render-counter';
  
  <AnyComponent>
    <RenderCounter initialCount={0} />
  </AnyComponent>
  ```

2. `withRenderCount` - High order component to provide data and logic

  ```js
  import { withRenderCount } from 'react-render-counter';
  
  const MyCounter = ({ count }) => <div>{count + 1}</div>;
  
  export default withRenderCount(MyCounter);
  ```
  
3. `Counter` - Pure component to render count

  ```js
  import { Counter } from 'react-render-counter';
  
  <div>
    <Counter count={1} /> 
  </div>
  ```

## [Documentation](https://stupidism.github.io/stupid-rc-starter/)

With [storybook](https://storybooks.js.org), things below are included in the site:
- online demo
- prop tables
- code examples
- TODO: [comments](https://github.com/storybooks/storybook/blob/master/addons/comments)
