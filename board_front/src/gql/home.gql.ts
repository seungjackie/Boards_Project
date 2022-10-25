import gql from 'graphql-tag';

export const GET_USER = gql`
    query getUser(
        $email: String!
        $password: String!
    ) {
        getUser(
            email: $email
            password: $password
        ) {
            email
        }
    }
`