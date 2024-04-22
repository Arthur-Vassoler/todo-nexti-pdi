FROM openjdk:21-jdk-slim

WORKDIR /api/app

COPY build/libs/*-SNAPSHOT.jar api.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "api.jar"]
