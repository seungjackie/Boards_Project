import gql from "graphql-tag";

// 게시글 추가
export const BOARD_ADD = gql`
  mutation boardAdd($title: String!, $contents: String!, $userNum: String!) {
    createBoard(
      createBoardInput: {
        title: $title
        contents: $contents
        userNum: $userNum
      }
    ) {
      boardNum
      title
      contents
      userNum
      cnt
    }
  }
`;

// 모든 게시 글
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

export const BOARD_FILTER_GET = gql`
  query boardAll($limit: Int!, $page: Int!) {
    findAllBoard_resolver(boards: { limit: $limit, page: $page })
  }
  {
    boardNum
  }
`;

// 삭제
export const BOARD_DELETE = gql`
  mutation del($id: ID!) {
    delete(id: $id)
  }
`;

// 최종 디테일 페이지
export const BOARD_FINDONE = gql`
  query findone($id: ID!) {
    findBoardOne(id: $id) {
      title
      boardNum
      createTime
      contents
      userNum
    }
  }
`;

// 클라이언트에서 안됌
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

// 테스트
export const BOARD_GET_ONE_TEST = gql`
  query checkboard($boardFindOneNum: Int) {
    findtest(findtest: { boardFindOneNum: $boardFindOneNum }) {
      boardNum
      title
    }
  }
`;

// 수정
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
