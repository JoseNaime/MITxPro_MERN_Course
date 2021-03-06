let express = require('express');
let { graphqlHTTP } = require('express-graphql');
let { buildSchema } = require('graphql');

let gameCatalogue = [
    {
        "id": 1,
        "title": "Game B",
        "publisher": "Publisher ABC",
        "developer": "Developer DEF",
        "releaseDate": "2015-01-01",
        "platforms": [
            { "id": 1, "name": "Xbox" },
            { "id": 2, "name": "Playstation" },
            { "id": 3, "name": "PC" }
        ],
        "esrbRating": {
            "id": 1,
            "code": "E",
            "name": "Everyone"
        }
    },
    {
        "id": 2,
        "title": "Game C",
        "publisher": "Publisher ABC",
        "developer": "Developer DEF",
        "releaseDate": "2018-01-01",
        "platforms": [
            { "id": 1, "name": "Xbox" },
            { "id": 3, "name": "PC" }
        ],
        "esrbRating": {
            "id": 1,
            "code": "E",
            "name": "Everyone"
        }
    },
    {
        "id": 3,
        "title": "Game A",
        "publisher": "Publisher ABC",
        "developer": "Developer DEF",
        "releaseDate": "2020-01-01",
        "platforms": [
            { "id": 1, "name": "Xbox" },
            { "id": 2, "name": "Playstation" }
        ],
        "esrbRating": {
            "id": 2,
            "code": "M",
            "name": "Mature"
        }
    }
]

// Construct a schema, using GraphQL schema language
let schema = buildSchema(`
  type Query {
    games: [Game]
  },
  type EsrbRating{
    id: Int
    code: String
    name: String
  },
  type Platform{
    id: Int
    name: String
  },
  type Game {
    id: Int
    title: String
    publisher: String
    developer: String
    platforms: [Platform]
    esrbRating: EsrbRating
}
 
`);

// The root provides a resolver function for each API endpoint
let root = {
    games: () => gameCatalogue
};

let app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');