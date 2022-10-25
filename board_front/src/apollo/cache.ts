import { InMemoryCache } from "@apollo/client";

// appolo client가 내부적으로 사용할 캐시 new InMemoryCache를 생성
// 클라이언트 브라우저 메모리에 grpahql 요청-응답을 캐싱하는 공간을 생성 한다는 뜻.
export const cache = new InMemoryCache();