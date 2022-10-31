import gql from "graphql-tag";

export const GET_BOARD = gql`
  query {
    boardAll {
      title
      contents
      uId_borad
      createTime
    }
  }
`;

export const POST_BOARD = gql`
  mutation {
    createBoard(createBoardInput: { title: "", contents: "" }) {
      title
      contents
    }
  }
`;
