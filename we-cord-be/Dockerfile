# --- 1단계: 빌드(Build) 환경 ---
# Java 17 (temurin)이 설치된 이미지를 기반으로 시작합니다. 'builder'라는 별명을 붙여줍니다.
# Eclipse Temurin은 고품질의 Java 런타임으로, Docker 공식 이미지로도 추천됩니다.
FROM eclipse-temurin:17-jdk-jammy as builder

# 컨테이너 내부에 /app이라는 작업 디렉토리를 만듭니다.
WORKDIR /app

# 먼저 빌드에 필요한 파일들만 복사하여, 의존성 캐싱을 활용합니다.
# 소스코드가 바뀌지 않았다면, Docker는 이 단계를 다시 실행하지 않아 시간을 절약합니다.
COPY gradlew .
COPY gradle ./gradle
COPY build.gradle .
COPY settings.gradle .

# Gradle 실행 권한을 부여합니다.
RUN chmod +x ./gradlew

# Gradle을 이용해 프로젝트의 의존성을 다운로드합니다.
# 소스코드 없이 의존성만 먼저 받는 이유는 Docker의 레이어 캐싱 효율을 극대화하기 위함입니다.
RUN ./gradlew dependencies

# 나머지 소스 코드를 컨테이너의 작업 디렉토리로 복사합니다.
COPY src ./src

# Gradle Wrapper를 사용해 애플리케이션을 빌드하여 .jar 파일을 생성합니다.
RUN ./gradlew bootJar

# --- 2단계: 실행(Runtime) 환경 ---
# 더 가볍고 보안에 유리한 JRE(Java Runtime Environment) 이미지를 기반으로 최종 이미지를 만듭니다.
FROM eclipse-temurin:17-jre-jammy

# 컨테이너 내부에 /app이라는 작업 디렉토리를 만듭니다.
WORKDIR /app

# 1단계(builder)에서 생성된 .jar 파일을 2단계 컨테이너로 복사해옵니다.
# build/libs/*.jar 패턴을 사용하여 정확한 파일명을 몰라도 파일을 찾을 수 있습니다.
COPY --from=builder /app/build/libs/*.jar app.jar

# 컨테이너가 시작될 때 실행할 명령어를 지정합니다.
# "java -jar app.jar" 명령어로 Spring Boot 애플리케이션을 실행합니다.
ENTRYPOINT ["java", "-jar", "app.jar"] 