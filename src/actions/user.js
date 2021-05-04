import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL,
    SET_CART_PRODUCTS,
    ADD_CART_PRODUCT
} from './types';

export function setPurchaseDetail(_id) {
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function addCartProduct(product) {
    return ({
        type: ADD_CART_PRODUCT,
        payload: product
    })
}

export function fetchCartProducts() {
    return ({
        type: SET_CART_PRODUCTS,
        payload: [
            {
                _id: 0,
                product: {
                    _id: 0,
                    title: 'JavaScript in the Browser',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    price: '1.99',
                    belongsTo: [0,1]
                },
                quantity: 2
            },
            {
                _id: 1,
                product: {
                    _id: 1,
                    title: 'Graph Database',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    price: '1.99',
                    belongsTo: [0,6]
                },
                quantity: 1
            }
        ]
    })
}

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                amount: 19.40,
                orderNumber: 'A0048248343',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Mike Bird',
                    shippingAddress: '307 Shelby St' 
                }
            },
            {
                _id: 1,
                amount: 8.25,
                orderNumber: 'A0048768397',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Mike Bird',
                    shippingAddress: '307 Shelby St' 
                }
            },
            {
                _id: 2,
                amount: 45.22,
                orderNumber: 'A0044681378',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Mike Bird',
                    shippingAddress: '307 Shelby St' 
                }
            },
            {
                _id: 3,
                amount: 2.48,
                orderNumber: 'A0087918213',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Mike Bird',
                    shippingAddress: '307 Shelby St' 
                }
            },
            {
                _id: 4,
                amount: 7.52,
                orderNumber: 'A4628799462',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Mike Bird',
                    shippingAddress: '307 Shelby St' 
                }
            },
            {
                _id: 5,
                amount: 11.13,
                orderNumber: 'A1642879522',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Mike Bird',
                    shippingAddress: '307 Shelby St' 
                }
            },
            {
                _id: 6,
                amount: 29.12,
                orderNumber: 'A1264387943',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Mike Bird',
                    shippingAddress: '307 Shelby St' 
                }
            },
            {
                _id: 7,
                amount: 13.54,
                orderNumber: 'A4597613025',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Mike Bird',
                    shippingAddress: '307 Shelby St' 
                }
            }
        ]
    })
}