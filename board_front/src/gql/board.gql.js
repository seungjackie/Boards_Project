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

// export const BOARD_ALL_TEST = gql`
//   query
// `

export const BOARD_GET = gql`
  query boardAll {
    boardAll {
      title
      cnt
      createTime
      userNum
    }
  }
`;

export const BOARD_EDIT = gql`
  mutation EditCustomer($title: String!, $contents: String!) {
    editBoard(title: $title, contents: $contents) {
      title
      contents
    }
  }
`;

export const FEED_QUERY = gql`
  query boardAll (offset: $offset, limit: $limit){
    boardAll {
      title
      cnt
      createTime
      userNum
    }
  }
`;

//   query Feed($offset: Int, $limit: Int) {
//     boardAll(offset: $offset, limit: $limit) {
//       title
//       cnt
//       createTime
//       userNum
//     }
//   }
