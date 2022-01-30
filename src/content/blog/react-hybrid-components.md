---
title: React Hybrid Components
path: react-hybrid-components
date: Jul 17 2020
hidden: true
---

I've recently been using this really nice react native library [react native paper](). It's become one of my favorite react native ui. The added components are pretty minimal and it's all done in a very agreeable material design.

One really interesting thing about how the library is built, however, is how it handles similar components. Here is an example.

``` jsx
import { Card } from 'react-native-paper';

const MyComponent = () => (
    <Card>
        <Card.Content>My Card Content</Card.Content>
        <Card.Actions>My Card Actions</Card.Actions>
    </Card>
);
```

You can notice that only one main component gets imported from `react-native-paper`, the `Card` component. From that base component, however you can use the `Card.Header` attribute.

We can compare this syntactically to the react web library [material-ui]() another react material design ui framework.

``` jsx
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
