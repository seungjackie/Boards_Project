import gql from "graphql-tag";

// export const BOARD_ADD = gql`

// mutation{
//     createBoard(createBoardInput:{
//         $title: String!,
//         $contents: String!,
//         $boardNum: String!,
//         $userNum: String!,
//         $fileNum: String!
//         ){
//         createBoardInput:{
//             title: $inputBoardTitle
//             contents: $inputBoardContents
//             boardNum: $inputBoardNum
//             userNum: $inputUserNum
//             fileNum: $inputFileNum
//     }){
//     cnt,contents,createTime,boardNum,userNum
//     title,fileNum
//   }
//     })
//   }
// `;

export const BOARD_ADD = gql`
  mutation boardAdd(
    $title: String!
    $contents: String!
    $userNum: String!
    $boardNum: String!
    $userNum: String!
    $fileNum: String!
  ) {
    createBoard(
      createBoardInput: {
        title: $title
        contents: $contents
        userNum: $userNum
        boardNum: $inputBoardNum
        fileNum: $inputFileNum
      }
    ) {
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
