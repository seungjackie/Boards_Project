import React from "react";
import Router from "./Router";

// apollo 관련된 모든 것들이 포함. Graphql기반으로 클라이언트 생성과 graphql api 통신할수 있는 react hook 기반 함수 appollor 드라이브 제공
// ApolloProvider 는 react context API의 Porvider와 비슷한 역활
// ApolloProvider로 최상위 컴포넌트인 App을 감싸주면 컴포넌트 어디서든 apollo 클라이언트에 접근 할수 있다.
// app.tsx -> Router.tsx
import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo/client";

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    // 클라이언트 연결
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
}

export default App;
