import gql from "graphql-tag";

export const BOARD_ADD = gql`
  mutation boardAdd(
    $title: String!
    $contents: String!
    $userNum: String!
    $boardNum: String!
    $fileNum: String!
  ) {
    createBoard(
      createBoardInput: {
        title: $title
        contents: $contents
        userNum: $userNum
        boardNum: $boardNum
        fileNum: $fileNum
      }
    ) {
      boardNum
      title
      contents
      userNum
      cnt
      fileNum
    }
  }
`;

export const BOARD_GET = gql`
  query boardAll {
    boardAll {
      title
      cnt
      createTime
      userNum
      boardNum
    }
  }
`;

export const BOARD_GET_ONE = gql`
  query boardOneCheck($boardFindOneNum: Int!) {
    boardFindOneInput(input: { boardFindOneNum: $boardFindOneNum }) {
      title
      contents
      boardNum
      userNum
      createTime
    }
  }
`;

// export const BOARD_GET_ONE_TEST = gql`
//   query checkboard($boardFindOneNum: Int!) {
//     findtest(findtest: { boardFindOneNum: $boardFindOneNum }) {
//       boardNum
//       title
//     }
//   }
// `;

export const BOARD_GET_ONE_TEST = gql`
  query checkboard($boardFindOneNum: Int) {
    findtest(findtest: { boardFindOneNum: $boardFindOneNum }) {
      boardNum
      title
    }
  }
`;

export const BOARD_EDIT = gql`
  mutation check($boardNum: Int!, $title: String!, $contents: String!) {
    updateBoard(
      input: {
        boardNum: $boardNum
        data: { title: $title, contents: $contents }
      }
    )
  }
`;

// test
export const BOARD_ONE = gql`
  query boardOne($boardSetNum: Int) {
    boardOne(boardOneInput: { boardSetNum: $boardSetNum }) {
      boardNum
      title
      contents
      userNum
      date
      cnt
      fileNum
    }
  }
`;
