// export const dynamic = "force-dynamic"; // this is the fix

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

import Footer from "@/components/Footer";
import Header from "@/components/Header";
// import Hero from "@/components/Hero";
import Movies from "@/components/Movies";
import dynamic from "next/dynamic";

const HeroComponent = dynamic(() => import("../components/Hero"), {
  ssr: false,
});

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";

  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data"); // this will be caught by the error page and passed to the page as props
  }

  const data = await res.json();

  const results = data.results;

  return (
    <main className="relative h-screen">
      <Header />
      <HeroComponent results={results} />
      <Movies results={results} />
      <Footer />
    </main>
  );
}
