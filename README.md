# class101
[HTML,CSS,JS] 'class101' 모바일 전체 페이지(10page) 제작
> [2022.05.17 ~ 2022.05]

***
***Pages***

: 총 10page <메인(index) + gnb 메뉴(category,search,event,mypage) + 서브 카테고리(1~5)>

: 트렌드 조사 -> 프로젝트 실행 계획 보고서 작성 -> 와이어 프레임+시안(피그마) -> 구현

***Category***
* 전체 온라인 클래스를 파악할 수 있는 카테고리 페이지

***Search***
* 원하는 클래스를 바로 찾아볼 수 있는 검색 페이지
* 실시간 급상승 검색어를 롤링하며 보여줌
* 실시간 급상승 사이드 버튼을 클릭하면 전체 검색어 리스트 표시

***Event***
* 탭 기능
* swiper 플러그인 사용

***My page***
* 아코디언 상세 메뉴

***Category(1~5)***
* 클래스 정보 json파일에 저장 후 ajax get 요청(데이터바인딩)
* onload 함수 실행: 첫 로드시 4개의 클래스가 보임 -> 더보기 버튼 클릭시 추가 클래스 표시+버튼 없앰
* 
