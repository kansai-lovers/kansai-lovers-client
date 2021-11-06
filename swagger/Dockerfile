FROM swaggerapi/swagger-codegen-cli-v3:3.0.29 as builder

WORKDIR /app
COPY openapi.yml .

WORKDIR /app/generate/server
RUN java -jar /opt/swagger-codegen-cli/swagger-codegen-cli.jar generate \
  -i /app/openapi.yml \
  -l nodejs-server \
  -o .

WORKDIR /app/generate/client
RUN java -jar /opt/swagger-codegen-cli/swagger-codegen-cli.jar generate \
  -i /app/openapi.yml \
  -l typescript-axios \
  -o .
