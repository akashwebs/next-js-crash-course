import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
};

const blog = ({ data }) => {
  return (
    <div>
      {data?.map((curr) => (
        <div>
          <Link href={`/blogs/${curr.id}`}>{curr.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default blog;
