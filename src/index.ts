import app from './app';

const PORT: string | number = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(
    `GraphQL Server is now running on http://localhost:${PORT}/graphql`,
  );
  console.log(`View GraphiQL at http://localhost:${PORT}/graphiql`);
});
