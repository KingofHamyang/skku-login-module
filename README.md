성균관대학교 로그인 모듈
======================

## 1. 성균관대학교 로그인 모듈 소개
**skku-login-module**은 성균관대학교 로그인 확인용 모듈 패키지 입니다. 학번과 비밀번호 (Kingo아이디 비밀번호)를 입력하면 해당 학생에 대한 정보를 반환 합니다. 이를 통해 회원에 대한 정보를 DB에 저장하지 않고도, 로그인 기능을 구현할 수 있습니다. 

## 2. 로그인 모듈의 필요성
예를 들어 학과 내에서 스터디룸 예약 시스템을 개발하는 경우, 회원가입을 구현할 때, 가장 큰 문제는 다음과 같습니다.
### 문제점
	1. 회원가입은 해당 과 학생만 가능해야 하는데, 에브리타임처럼 직접 학생증 등을 통해 담당자가 승인하는 방법 외엔 방법이 없다. -> 회원가입의 자동화 X
	2. 직접 데이터베이스에 ID와 비밀번호를 저장하면 보안 문제가 커질 수 있다.

이러한 점을 **skku-login-module**를 통해 해결할 수 있습니다. 해당 모듈은 직접 학교 사이트에 https요청을 수 차례 던지고, 반환값을 분석하여 결과를 반환합니다. 아이디 진위여부 뿐만 아니라, 학/석/박사 여부, 학과 등의 정보를 같이 반환합니다. 이를 통해 위의 문제를 다음과 같이 해결할 수 있습니다.

### 개선점
	1. skku-login-module이 반환하는 결과를 통해, 아이디와 학과 정보를 얻을 수 있습니다.
	2. 직접 데이터베이스에 회원정보를 저장하지 않아도 되므로, 보안상 안전합니다.



## 3. 사용법
먼저 npm init을 통해 작업환경을 생성한다.

```
npm init
```

```
npm init
```
	

****