docker build --no-cache -f SQL\Dockerfile.PostgreSql -t test12-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t test12-java/app ../../..
