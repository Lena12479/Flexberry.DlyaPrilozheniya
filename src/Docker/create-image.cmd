docker build --no-cache -f SQL\Dockerfile.PostgreSql -t dlyaprilozheniya/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t dlyaprilozheniya/app ../..
