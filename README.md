# myBlog

> 블로그 서비스를 만들어보는 프로젝트입니다.

## Tech Stack

API: Spring Boot, MyBatis, MySQL

## Run Locally

- 프로젝트 클론 후 디렉토리로 이동

    ```bash
      git clone https://github.com/cheesecat47/myBlog.git
      cd myBlog
    ```

### API server

- 실행 전 아래 요구사항이 설치되어 있는지 확인이 필요합니다.
- Java 17
- Maven 3.9
- MySQL 8.0.34

1. `myBlog-api` 디렉토리로 이동

  ```bash
    cd myBlog-api/
  ```

1. 실행

  ```bash
      # Maven 패키징
      ./mvnw package
      
      # 실행
      java -jar target/myBlog-0.0.1-SNAPSHOT.jar
  ```

## Author

- [@cheesecat47](https://github.com/cheesecat47)

## Contributors

- [@yeaaaaahhhhh](https://github.com/yeaaaaahhhhh)
- [@HeewonYoun](https://github.com/HeewonYoun)
- [@rosielsh](https://github.com/rosielsh)
