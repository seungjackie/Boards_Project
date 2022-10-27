import gql from "graphql-tag";

export const GET_BOARD = gql`
  query {
    boardAll {
      title
      contents
      uId_borad
    }
  }
`;

export const POST_MEMBER = gql`
  mutation {
    createBoard(
      createBoardInput: { title: "멋있는 타이틀", contents: "멋있는 내용" }
    ) {
      title
      contents
    }
  }
`;
