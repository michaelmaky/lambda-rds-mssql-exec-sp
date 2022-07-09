import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import * as sql from 'mssql';
// import { config } from 'process';

const dbConfig = {
  server: process.env.DB_SERVER || '',
  port: parseInt(process.env.DB_PORT || '1433', 10),
  database: process.env.DB_NAME || '',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  requestTimeout: 180000,
};

export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  let response: APIGatewayProxyResult;
  try {
    console.info('EVENT\n' + JSON.stringify(event, null, 2));

    const pool = await sql.connect(dbConfig);
    console.info('connected to database.');

    const res = await pool.request().execute('p_update_db_statistics');
    pool.close();
    console.info('res:', res);

    console.info('update db statistics successfully.');
    response = {
      statusCode: 200,
      body: JSON.stringify({
        message: res,
      }),
    };
  } catch (err) {
    console.log(err);
    response = {
      statusCode: 500,
      body: JSON.stringify({
        message: 'some error happened',
      }),
    };
  }

  return response;
};
