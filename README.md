성균관대학교 로그인 모듈
======================

## 1. 성균관대학교 로그인 모듈 소개
**skku-login-module**은 성균관대학교 로그인 확인용 모듈 패키지 입니다. 학번과 비밀번호 (Kingo아이디 비밀번호)를 입력하면 해당 학생에 대한 정보를 반환 합니다. 이를 통해 회원에 대한 정보를 DB에 저장하지 않고도, 로그인 기능을 구현할 수 있습니다. 

## 2. 로그인 모듈의 필요성
예를 들어 학과 내에서 스터디룸 예약 시스템을 개발하는 경우, 회원가입을 구현할 때, 가장 큰 문제는 다음과 같습니다.
### 문제점
	1. 회원가입은 해당 과 학생만 가능해야 하는데, 에브리타임처럼 직접 학생증 등을 통해 담당자가 승인하는 방법 외엔 방법이 없다. -> 회원가입의 자동화 X
	2. 직접 데이터베이스에 ID와 비밀번호를 저장하면 보안 문제가 커질 수 있다.

이러한 점을 **skku-login-module**를 통해 해결할 수 있습니다. 해당 모듈은 직접 학교 사이트에 https요청을 수 차례 던지고, 반환값을 분석하여 결과를 반환합니다. 위의 문제를 다음과 같이 해결할 수 있습니다.

### 개선점
	1. **skku-login-module**
	2. 직접 데이터베이스에 ID와 비밀번호를 저장하면 보안 문제가 커질 수 있다.




### 1.2.1. 장점
	1. 간결하다.
	2. 별도의 도구없이 작성가능하다.
	3. 다양한 형태로 변환이 가능하다.
	3. 텍스트(Text)로 저장되기 때문에 용량이 적어 보관이 용이하다.
	4. 텍스트파일이기 때문에 버전관리시스템을 이용하여 변경이력을 관리할 수 있다.
	5. 지원하는 프로그램과 플랫폼이 다양하다.
### 1.2.2. 단점
	1. 표준이 없다.
	2. 표준이 없기 때문에 도구에 따라서 변환방식이나 생성물이 다르다.
	3. 모든 HTML 마크업을 대신하지 못한다.

****