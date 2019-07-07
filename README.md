
#### _Three Stage Course Material Project - Restaurant Reviews_

## Responsive Changes

1. Changed "Restaurant List" to display:flex, and used justify-content: space-around to spread it out depending on space available.
2. Altered font sizes to rem instead of a fixed pts in restaurants lists
3. Created responsive.css to manage some of the responsive elements (breadcrumb from 50% to 100%, reposition of map)

### Accessibility changes

1. Added "aria-label" to self-referencing "Restaurant Reviews" h1
2. Added "aria-label" and "role" to map
3. Added "aria-labelledby" to filters
4. In main.js, added 'alt' to images with "Photo from customized to restaurant name.
5. Added "aria-label" to the generated View Details button, customized for restaurant name.
6. Added tabindex's (tabindices?) (with positive numbers, even though that's almost an 'anti-pattern') to manage the tabs/orders.
6. Added a skip-link to get more quickly to filters... even though with the tabindex order, I made them next anyways.

### Offline enablement

