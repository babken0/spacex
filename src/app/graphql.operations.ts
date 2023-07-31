import {gql} from "apollo-angular";


const GET_SHIPS = gql`
  query{
    ships {
      id
      name
      type
      home_port
      weight_kg
      missions {
        name
      }
    }
  }
`
const GET_SHIP_BY_ID = gql`
  query{
      ship(id: $shipId) {
        id
      }
  }
`

export  {
  GET_SHIPS,GET_SHIP_BY_ID
}
