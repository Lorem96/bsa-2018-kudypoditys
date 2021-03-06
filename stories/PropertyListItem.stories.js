import React from 'react';
import { storiesOf } from '@storybook/react';
import PropertyListItem from '../src/client/components/property-list-item';

let propertyItemData = {
    image: `http://cdn.home-designing.com/wp-content/uploads/2016/04/luxury-art-deco-apartment-interior.jpg`,
    name: 'DREAM Hostel Lviv',
    description: 'Це помешкання розташоване в 6 хв. ходьби від пляжу Історичний готель оформлений у класичному стилі та розташований за 10 хвилин ходьби від вулиці Дерибасівська, Потьомкінських сходів та памятника герцогу де Рішельє і за 300 метрів від театру опери та балету. Із закладу відкривається чудовий вид на Чорне море.Це помешкання розташоване в 6 хв. ходьби від пляжу Історичний готель оформлений у класичному стилі та розташований за 10 хвилин ходьби від вулиці Дерибасівська, Потьомкінських сходів та памятника герцогу де Рішельє і за 300 метрів від театру опери та балету. Із закладу відкривається чудовий вид на Чорне море.',
    rating: 9.7,
    location: 'Lviv',
    distanceToCenter: 1.2,
    priceTo: 500,
    priceFrom: 700,
    curency: 'uah',
    reviewsNamber: 660,
    locationRating: 9.2,
    availableRoomsCount:4
}

let propertyItemData1 = {
    image: `http://cdn.home-designing.com/wp-content/uploads/2016/04/luxury-art-deco-apartment-interior.jpg`,
    name: 'DREAM Hostel Lviv',
    description: 'Це помешкання розташоване в 6 хв. ходьби від пляжу Історичний готель оформлений у класичному стилі та розташований за 10 хвилин ходьби від вулиці Дерибасівська, Потьомкінських сходів та памятника герцогу де Рішельє і за 300 метрів від театру опери та балету. Із закладу відкривається чудовий вид на Чорне море.Це помешкання розташоване в 6 хв. ходьби від пляжу Історичний готель оформлений у класичному стилі та розташований за 10 хвилин ходьби від вулиці Дерибасівська, Потьомкінських сходів та памятника герцогу де Рішельє і за 300 метрів від театру опери та балету. Із закладу відкривається чудовий вид на Чорне море.',
    rating: 4.2,
    location: 'Lviv',
    distanceToCenter: 1.2,
    priceTo: 500,
    priceFrom: 700,
    curency: 'uah',
    reviewsNamber: 660,
    locationRating: 9.2,
    availableRoomsCount:2
}

let propertyItemData2 = {
    image: `http://cdn.home-designing.com/wp-content/uploads/2016/04/luxury-art-deco-apartment-interior.jpg`,
    name: 'DREAM Hostel Lviv',
    description: 'Це помешкання розташоване в 6 хв. ходьби від пляжу Історичний готель оформлений у класичному стилі та розташований за 10 хвилин ходьби від вулиці Дерибасівська, Потьомкінських сходів та памятника герцогу де Рішельє і за 300 метрів від театру опери та балету. Із закладу відкривається чудовий вид на Чорне море.Це помешкання розташоване в 6 хв. ходьби від пляжу Історичний готель оформлений у класичному стилі та розташований за 10 хвилин ходьби від вулиці Дерибасівська, Потьомкінських сходів та памятника герцогу де Рішельє і за 300 метрів від театру опери та балету. Із закладу відкривається чудовий вид на Чорне море.',
    rating: 9.7,
    location: 'Lviv',
    distanceToCenter: 1.2,
    priceTo: 500,
    priceFrom: 700,
    curency: 'uah',
    reviewsNamber: 660,
    locationRating: 9.2,
    availableRoomsCount: 0
}
let propertyItemData3 = {
    image: `http://cdn.home-designing.com/wp-content/uploads/2016/04/luxury-art-deco-apartment-interior.jpg`,
    name: 'DREAM Hostel Lviv',
    description: 'Це помешкання розташоване в 6 хв. ходьби від пляжу Історичний готель оформлений у класичному стилі та розташований за 10 хвилин ходьби від вулиці Дерибасівська, Потьомкінських сходів та памятника герцогу де Рішельє і за 300 метрів від театру опери та балету. Із закладу відкривається чудовий вид на Чорне море.Це помешкання розташоване в 6 хв. ходьби від пляжу Історичний готель оформлений у класичному стилі та розташований за 10 хвилин ходьби від вулиці Дерибасівська, Потьомкінських сходів та памятника герцогу де Рішельє і за 300 метрів від театру опери та балету. Із закладу відкривається чудовий вид на Чорне море.',
    rating: 8.3,
    location: 'Lviv',
    distanceToCenter: 1.2,
    priceTo: 500,
    priceFrom: 700,
    curency: 'uah',
    reviewsNamber: 660,
    locationRating: 9.2,
    availableRoomsCount: 7,
    mealType:'Breakfast included'
}
let propertyItemData4 = {
    image: `http://cdn.home-designing.com/wp-content/uploads/2016/04/luxury-art-deco-apartment-interior.jpg`,
    name: 'DREAM Hostel Lviv',
    description: 'Це помешкання розташоване в 6 хв. ходьби від пляжу Історичний готель оформлений у класичному стилі та розташований за 10 хвилин ходьби від вулиці Дерибасівська, Потьомкінських сходів та памятника герцогу де Рішельє і за 300 метрів від театру опери та балету. Із закладу відкривається чудовий вид на Чорне море.Це помешкання розташоване в 6 хв. ходьби від пляжу Історичний готель оформлений у класичному стилі та розташований за 10 хвилин ходьби від вулиці Дерибасівська, Потьомкінських сходів та памятника герцогу де Рішельє і за 300 метрів від театру опери та балету. Із закладу відкривається чудовий вид на Чорне море.',
    rating: 8,
    location: 'Lviv',
    distanceToCenter: 1.2,
    priceTo: 500,
    priceFrom: 700,
    curency: 'uah',
    reviewsNamber: 660,
    locationRating: 9.2,
    availableRoomsCount: 5,
    mealType:'All meals included'
}
let propertyItemData5 = {
    image: `http://cdn.home-designing.com/wp-content/uploads/2016/04/luxury-art-deco-apartment-interior.jpg`,
    name: 'DREAM Hostel Lviv',
    description: 'Це помешкання розташоване в 6 хв. ходьби від пляжу Історичний готель оформлений у класичному стилі та розташований за 10 хвилин ходьби від вулиці Дерибасівська, Потьомкінських сходів та памятника герцогу де Рішельє і за 300 метрів від театру опери та балету. Із закладу відкривається чудовий вид на Чорне море.Це помешкання розташоване в 6 хв. ходьби від пляжу Історичний готель оформлений у класичному стилі та розташований за 10 хвилин ходьби від вулиці Дерибасівська, Потьомкінських сходів та памятника герцогу де Рішельє і за 300 метрів від театру опери та балету. Із закладу відкривається чудовий вид на Чорне море.',
    rating: 9.7,
    location: 'Lviv',
    distanceToCenter: 1.2,
    priceTo: 500,
    priceFrom: 700,
    curency: 'uah',
    reviewsNamber: 660,
    locationRating: 9.2,
    availableRoomsCount: 1
}

let propertyItemData6 = {
    image: `http://cdn.home-designing.com/wp-content/uploads/2016/04/luxury-art-deco-apartment-interior.jpg`,
    name: 'DREAM Hostel Lviv',
    description: 'Це помешкання розташоване в 6 хв. ходьби від пляжу Історичний готель оформлений у класичному стилі та розташований за 10 хвилин ходьби від вулиці Дерибасівська, Потьомкінських сходів та памятника герцогу де Рішельє і за 300 метрів від театру опери та балету. Із закладу відкривається чудовий вид на Чорне море.Це помешкання розташоване в 6 хв. ходьби від пляжу Історичний готель оформлений у класичному стилі та розташований за 10 хвилин ходьби від вулиці Дерибасівська, Потьомкінських сходів та памятника герцогу де Рішельє і за 300 метрів від театру опери та балету. Із закладу відкривається чудовий вид на Чорне море.',
    rating: 7,
    location: 'Lviv',
    distanceToCenter: 1.2,
    priceTo: 500,
    priceFrom: 700,
    curency: 'uah',
    reviewsNamber: 660,
    locationRating: 9.2,
    availableRoomsCount: 5
}
storiesOf('PropertyListItem', module)
    .add('Item base state', () => <PropertyListItem propertyItemData={propertyItemData} />)
    .add ('Item with low raiting',() => <PropertyListItem propertyItemData={propertyItemData1} /> )
    .add ('No available room',() => <PropertyListItem propertyItemData={propertyItemData2} /> )
    .add ('Item with breakfast included',() => <PropertyListItem propertyItemData={propertyItemData3} /> )
    .add ('Item with all meals included',() => <PropertyListItem propertyItemData={propertyItemData4} /> )
    .add ('Last available room',() => <PropertyListItem propertyItemData={propertyItemData5} /> )
    .add ('Item with middle raiting',() => <PropertyListItem propertyItemData={propertyItemData6} /> )
