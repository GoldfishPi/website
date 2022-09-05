---
title: React Hybrid Components
path: react-hybrid-components
date: Sep 05 2022
hidden: false
---

I've recently been using this really nice react native library [react native paper](https://reactnativepaper.com/). It's become one of my favorite react native ui. The added components are pretty minimal and it's all done in a very agreeable material design.

One really interesting thing about how the library is built, however, is how it handles similar components. Here is an example.

``` tsx
import { Card } from 'react-native-paper';

const MyComponent = () => (
    <Card>
        <Card.Content>My Card Content</Card.Content>
        <Card.Actions>My Card Actions</Card.Actions>
    </Card>
);
```

You can notice that only one main component gets imported from `react-native-paper`, the `Card` component. From that base component, however you can use the `Card.Header` attribute.

We can compare this syntactically to the react web library [MUI](https://mui.com/) another react material design ui framework.

``` tsx
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const MyComponent = () => (
    <Card>
        <CardContent>My CardContent</CardContent>
        <CardActions>My Card Actions</CardActions>
    </Card>
)
```

As you can see for material ui you need to do three imports in total, the base `Card` import and the `CardActions` and `CardContent` for some of the leg work. This is a pretty minor difference but I liked how much this cleaned up my imports and I thought I would look into implementing this in my typescript libraries.

## Implementation
Implementing this is relatively straight forward, we just have to add another interface to capture the additional components that are going to live on our root component.

Lets start by creating a base card component.

```tsx
const Card:FC = ({ children }) => {
  return <div>{children}</div>
}
```

Now lets add a header component.

```tsx
interface HeaderProps {
  title:string;
}
const Card Header:FC<HeaderProps> = ({ title }) => {
  return <div>{title}</div>
}
```

Cool, now we just have to do a little bit of typescript magic to add the `Header` component to the `Card` component.

```tsx
import Header from './Header';

interface CardComponents {
  Header: typeof Header;
}

const Card:FC & CardComponents = ({ children }) => {
  return <div>{children}</div>
}

Card.Header = Header;
```

It's as easy as that! The nice thing about this method is you can add as many sub components to card as you want. 
