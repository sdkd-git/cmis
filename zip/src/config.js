export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      BUCKET: "YOUR_S3_UPLOADS_BUCKET_NAME"
    },
    apiGateway: {
      REGION: "YOUR_API_GATEWAY_REGION",
      URL: "http://localhost:8080"
    },
    cognito: {
      REGION: "YOUR_COGNITO_REGION",
      USER_POOL_ID: "YOUR_COGNITO_USER_POOL_ID",
      APP_CLIENT_ID: "YOUR_COGNITO_APP_CLIENT_ID",
      IDENTITY_POOL_ID: "YOUR_IDENTITY_POOL_ID"
    }
  };