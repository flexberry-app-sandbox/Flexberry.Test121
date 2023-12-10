docker build --no-cache -f SQL\Dockerfile.PostgreSql -t test12/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t test12/app ../..
