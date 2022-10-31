import gql from "graphql-tag";

export const GET_BOARD = gql`
  query boardAll {
    boardAll {
      title
      cnt
      contents
      createTime
      boardNum
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
