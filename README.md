성균관대학교 로그인 모듈
======================

## 1. 성균관대학교 로그인 모듈 소개
**skku-login-module**은 성균관대학교 로그인 확인용 모듈 패키지 입니다. 학번과 비밀번호 (Kingo아이디 비밀번호)를 입력하면 해당 학생에 대한 정보를 반환 합니다. 이를 통해 회원에 대한 정보를 DB에 저장하지 않고도, 로그인 기능을 구현할 수 있습니다. 
해당 모듈은 login_confirm이라는 function을 가지고 있으며, skku-login-module(ID,PASSWD, callback)을 통해 사용할 수 있습니다.
callback함수는 인자 하나를 입력받습니다. 해당 인자는 배열이며, 로그인이 안된다면 빈 배열이, 로그인이 성공한다면 학과, 이름 등의 정보 4개가 포함된 배열이 인자로 입력됩니다.

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
### 1. 먼저 npm init을 통해 작업환경을 생성한다.

```
npm init
```
### 2. npm install을 통해 skku-login-module을 다운 받는다.

```
npm install skku-login-module
```

### 3. 원하는 js파일에서 해당 모듈을 포함시킨다.

```javascript
const loginmodule = require('skku-login-module')

```
### 4. 함수를 실행하고, callback function을 통해 결과를 확인한다.

```javascript
loginmodule.loginconfirm(StudentID, Passwd, (result)=>{
    console.log(result)
})
```

result에는 로그인이 성공하면 정보 4개가 든 배열이, 실패하면 빈 배열이 반환됩니다.
### 예시

실패
```
Someone's MacBook-Pro:testnpm Someone$ node app.js
[]
```

성공
```
Someone's MacBook-Pro:testnpm Someone$ node app.js
[ '홍길동', '1994213459', '학사', '반도체시스템공학과' ]
```
	

****