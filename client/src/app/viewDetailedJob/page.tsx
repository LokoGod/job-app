import { getInitialProps } from 'next';

function MyComponent({ data }) {
  return (
    <div>
      <h1>Search Results</h1>
      {data.map((item) => (
        <div key={item.id}>
          <h4>{item.jobError}</h4>
          <p>{item.jobDescription}</p>
        </div>
      ))}
    </div>
  );
}

MyComponent.getInitialProps = async ({ req, query }) => {
  const { id } = query;
  const res = await fetch(`http://localhost:5000/api/v1/job/${id}`);
  const data = await res.json();

  return { data };
};

export default MyComponent;
