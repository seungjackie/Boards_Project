import { gql } from "@apollo/client";

// 유저 전체 목록 조회
// 테스트 데이터
export const USER_ALL = gql`
  query UserAll {
    userAll {
      userNum
      userId
      userPw
      userName
      deptCode
    }
  }
`;

// 유저 아이디(userId) 조회
export const USER_CHECK = gql`
  mutation UserCheck($LoginInputId: String, $LoginInputPw: String) {
    userCheck(
      loginInput: { LoginInputId: $LoginInputId, LoginInputPw: $LoginInputPw }
    )
  }
`;

export const USER_ONE = gql`
  query findOneUser($userId: String!) {
    userFindOne(userFindOneInput: { userId: $userId }) {
      userId
      userPw
      userNum
      userName
    }
  }
`;

export const USER_USERNUM = gql`
  query findUserNum($userNum: String!) {
    useNumFindOne(userNumFindOne: { userNum: $userNum }) {
      deptCode
      userId
      userNum
      userName
    }
  }
`;
