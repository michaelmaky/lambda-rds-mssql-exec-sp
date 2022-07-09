Lambda exec mssql store proc
# Build and deploy lambda to AWS

## lambda layer

---

### Step 1 - Build

```
yarn zip:layer {layer-name}
```

e.g.

```
yarn zip:layer layer-node-mssql
```

<br/>

### Step 2 - Upload layer package

```
yarn deploy:layer {layer-name}
```

e.g.

```
yarn deploy:layer layer-node-mssql
```

<br/>

## Lambda function

---

### Step 1 - Build lambda function

```
yarn build:lambda {lambda-name}
```

fn-rds-mssql-rebuild-index

```
yarn build:lambda fn-rds-mssql-update-db-statistics

yarn build:lambda fn-rds-mssql-rebuild-index
```

### Step 2 - Deploy lambda function

```
yarn deploy:lambda {lambda-name}
```

```
yarn deploy:lambda fn-rds-mssql-update-db-statistics

yarn deploy:lambda fn-rds-mssql-rebuild-index
```
