import { gql } from "@apollo/react-hooks";

export const BOARD_DELETE = gql`
  mutation del($id: ID!) {
    delete(id: $id)
  }
`;
