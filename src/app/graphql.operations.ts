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

export  {
  GET_SHIPS
}
