import axios from 'axios';

export const api = {
    async getAllProducts() {
        return await axios.get(
            'http://localhost:1337/api/products').then(res => res.data.data)
    },

    products() {
        return Promise.resolve({
            data: [{
                "id": 1,
                "attributes": {
                    "Name": "Apple",
                    "Country": "Italy",
                    "Cost": 3,
                    "InStock": 10,
                    "createdAt": "2022-01-28T18:37:39.602Z",
                    "updatedAt": "2022-01-28T18:39:20.464Z",
                    "publishedAt": "2022-01-28T18:39:20.462Z"
                }
            }, {
                "id": 2,
                "attributes": {
                    "Name": "Beans",
                    "Country": "USA",
                    "Cost": 1,
                    "InStock": 5,
                    "createdAt": "2022-01-28T18:38:27.903Z",
                    "updatedAt": "2022-01-28T18:39:25.456Z",
                    "publishedAt": "2022-01-28T18:39:25.454Z"
                }
            }, {
                "id": 3,
                "attributes": {
                    "Name": "Oranges",
                    "Country": "Spain",
                    "Cost": 4,
                    "InStock": 5,
                    "createdAt": "2022-01-28T18:39:00.525Z",
                    "updatedAt": "2022-01-28T18:39:05.592Z",
                    "publishedAt": "2022-01-28T18:39:05.590Z"
                }
            }]
        });
    }
}