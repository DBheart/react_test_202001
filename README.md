1. [기본적인 route해보기](https://velog.io/@ki_blank/React-Router-1.-8njzuummrs)
2. [atomic Design](https://brunch.co.kr/@ultra0034/63)
> 프론트엔드에서 파일구조를 효율적으로 쓰도록 하는 구조
>> commponent를 세분화한것이다. 이것을 따르도록 하자.

3. [리덕스 예제](https://velog.io/@velopert/Redux-3-%EB%A6%AC%EB%8D%95%EC%8A%A4%EB%A5%BC-%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%99%80-%ED%95%A8%EA%BB%98-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-nvjltahf5e)
> 리덕스의 최대 장점은 middle이다. 
>> 미들웨어가 있으므로해서 감시하고 모니터링하기 편하기 때문이다.

4. [mobX 예제](https://velog.io/@velopert/MobX-2-%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%97%90%EC%84%9C-MobX-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-oejltas52z)
> 모니터링 툴이 되는가?
>> 스토어 안만들고도 모니터링이 되는가?
>>> babel을 안깨고 하는 방법은 없는가?
>>>> 스토어 안쓰는것은 마치 local state와 같아보인다.

5. [우아한 mobX](https://woowabros.github.io/experience/2019/01/02/kimcj-react-mobx.html)
> 여러개를 만들어서 한경험을 포스팅하였다.
>> store가 여러개일때 어떻게 하라는 지침이 없네...
>>> store여러개인것 어떻게 해결만 하면 될것 같다. 어떻게 해야할까?

6. [mobX의 단점](https://medium.com/@punkyoon/mobx%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EB%A9%B4-%EC%95%88%EB%90%98%EB%8A%94-%EA%B2%BD%EC%9A%B0-a49d24b44580)
> 역시 여러개의 store가 문제가 되는것 같다.
>> 디버깅툴도 조금(?) 문제가 있다.

7. [context API](https://velopert.com/3606)
> 아직 사용하기에는 애매한것 같다. 이걸가지고 좀더 좋은 라이브러리가 만들어지만 잘 될지도 모르겠고... 직접해보지는 않겠다.
>> 저장소를 만들고 거기서 가져온다는 이점. props를 덜쓴다는 이점
>>> 하지만 소스가 너무 지저분헤 보인다.

8. [hook에 대한 전반적인 이해](https://velog.io/@velopert/react-hooks)
    - 아마제 유용한것은 다음의 소스아닐까한다. setState대신에 
        - const [value, setValue] = useState(0);
        - set과 그 값을 한쌍으로 써야합니다.
    - useContext로 Context API를 좀더 쉽게 쓸수 있는것 같습니다.    
> hook와 redux를 같이 쓰는것은 해볼만 할것 같습니다.    

- hook이 나온지도 꽤 되었습니다. 2018년 10월에 소개되었으니 1년이 넘었네요. 그 사이에 더 좋은게 나오지 않았을까요? 왜 안나왔는지는 모르겠습니다.

9. [redux의 connect를 hooks에서 보완하기](https://velog.io/@velopert/react-redux-hooks)
    - useActions 랑 useRedux 가 사라져서 예제 진행은 어렵다. 공식문서를 보고 해야할지도 모르겠다.

10. [hooks는 리덕스를 대체하지 않는다](https://delivan.dev/react/stop-asking-if-react-hooks-replace-redux-kr/)
    - 2019년 9월 글
    - mobX보다는 낳다.
    - 많은 상태를 관리하는데 redux를 대체할 것은 나오지 않았다.

---
redux에서 connect부분 Hook로 줄일수 있다.

또한 어느 글에는 Context API와 redux를 조합해서 좀더 쌈박하게 해줄수도 있다고 한다.
    - 영문글 : https://blog.logrocket.com/use-hooks-and-context-not-react-and-redux/

나는 우선 Context API로 어떻게 값을 가져오는지.. hook에서는 어떻게 바뀌었는지 알고 싶었는데... 이게 이렇게 되네?

Context도 어차피... state와 연계되어야하는구나.. useState를 쓰는 이유이고?
> 단점은 이것도 Provider로 감싸야한다는 것일까나? 여러개일때는 어떻게 되는가?
>> 다른곳에서 똑같은 프로바이더 써도 마찬가지일까?

컨텍스트 API가 여러개일때는 provider을 여러개 감싸주는 방법이 있다.
- 여기에는 좀더 편하게 할수 있는 단서가 있다 : https://velopert.com/3606

---

1. 리액트
2. 리액트 컴포넌트 구분
3. 리액트 컴포넌트 코딩 구별
4. 리덕스
    1. local state 와 순수 redux를 구현해봅니다.
    2. redux의 코드를 조금더 줄여봅니다.
        - connect를 코드를 줄이자.
        - redux-action과 immer.js로 모듈 코드를 줄이자. 
5. 리덕스 라이브러리
    1. saga
    2. reselect
6. mobX : 리덕스의 대체제
    1. 기본 mobX
    2. Decorator로 사용하기
    3. 스토어를 만들어서 사용하기
        - 여러개 만들면 어떻게 하는가?
        - 나중에 스토어에 추가가 가능하다.
7. hook : local state의 대체제
    - class가 아닌곳에서만 사용이 가능
    - redux와 연계해서 connect를 바꿀수가 있다.
8. context API : 이것도 중앙저장수이지만 약간 다르다.
    - 디버깅이 안되는 저장소라고나 할까?

mobX를 Decorator을 하니까 툴에서 오류라고 발생한다.
> 어노테이션류를 아직 못읽는것 같다.    
>> vsCode의 설정창에서 `experimentalDecorators`라고 쳐서 체크를 하자.

리덕스의 Provider과 mobX의 Provider은 다르구나...
> class를 쓰던데... class에서만 쓸수 있나? class가 아닌 펑셔널도 해보자.

- mobX는 class형에서만 진행되는 것으로 보인다.
- 스토어가 여러개일때는 다음과 같이 넣는다.
``` js
<Provider counter={counter} market={market}>
```
그런데 리덕스의 미들웨어같이 하나로 합치는게 있지 않을까?
compose인가가 있을라나?

- @Autobind // javascript this bind를 자동으로 해주는 데코레이터(arrow function 사용 없이)