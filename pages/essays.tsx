export async function getStaticProps() {
  return {
    props: {
      pageId: "essays",
      metadata: {
        title: "Ndeye Ndella DIOP",
        description:
          "Get to know Ndeye Ndella DIOP and the things he loves by visiting his personal website.",
        openGraph: {
          image: "https://example.com/image.jpg",
          url: "https://example.com",
        },
      },
    },
  };
}

export default function Essays() {
  return <div>Essays (TODO) </div>;
}
