/**
 * Ducks 패턴을 사용하여 만들기
 *  - 모듈파일 생성 : 특정 기능을 구현하기위하여 필요한 액션과, 액션생성함수와, 초깃값과, 리듀서함수가 들어있는 파일을 우리는 모듈 이라고 부름
 *  
 */

// 액션 타입 정의
const CHANGE_COLOR = 'counter/CHANGE_COLOR';
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// **** 액션 생성함수 정의
export const changeColor = color => ({ type: CHANGE_COLOR, color });
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

// **** 초기상태 정의
const initialState = {
    color: 'red',
    number: 0,
};

// export default 로 함수를 내보내는 방법이 있지 않나? 함수명을 안써도 될것 같은데? 
export default function counter(state = initialState, action) {
    switch (action.type) {
      case CHANGE_COLOR:
        return {
          ...state,
          color: action.color,
        };
      case INCREMENT:
        return {
          ...state,
          number: state.number + 1,
        };
      case DECREMENT:
        return {
          ...state,
          number: state.number - 1,
        };
      default:
        return state;
    }
}