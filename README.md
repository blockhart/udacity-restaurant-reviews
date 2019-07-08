
#### _Three Stage Course Material Project - Restaurant Reviews_

## Responsive Changes

1. Changed "Restaurant List" to display:flex, and used justify-content: space-around to spread it out depending on space available.
2. Altered max-heights of images and max-width of #restaurants-list li's so that the cards will take up available space at larger sizes,
   but scale down appropriately at smaller sizes. 
3. Created responsive.css to manage some of the responsive elements, including 
* breadcrumb and footer from 50% to 100%
* repositioning of map 
* sizing of restaurant-container and restaurant reviews
* font sizes and spacing for various items

### Accessibility changes

1. Added "aria-label" to self-referencing "Restaurant Reviews" h1
2. Added "aria-label" and "role" to map
3. Added "aria-labelledby" to filters
4. In both main.js and restaurant_info.js, added 'alt' info to images with "Photo from" customized to restaurant name.
5. Added "aria-label" to the generated View Details button, customized for restaurant name.
6. Added tabindex's (tabindices?) (with positive numbers, even though that's almost an 'anti-pattern') to manage the tabs/orders.
6. Added a skip-link to get more quickly to filters... even though with the tabindex order, I made them next anyways.
7. Changed "filter" 'div' to 'form'

### Offline enablement

1. Added serviceworker (sw.js), called for at end of main.js
2. Included capability to erase old, related caches
3. Included capability to fetch 