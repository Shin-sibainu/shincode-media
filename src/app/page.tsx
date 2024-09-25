import { getAllArticles } from "@/libs/api";
import ArticleCardList from "@/components/ArticleList";
import LoadMoreButton from "@/components/LoadMoreButton";
import { MAX_DISPLAY_ARTICLE } from "@/utils/constants";
import Hero from "@/components/layouts/Hero";

export default async function Home() {
  const { articles, totalCount } = await getAllArticles(0, MAX_DISPLAY_ARTICLE);

  return (
    <>
      <main className="mx-auto px-2 py-12">
        <Hero title="ShinCode-Media" />

        <div className="mt-24">
          <div className="mx-auto py-4">
            <h2 className="md:text-4xl text-center">記事一覧</h2>
            <ArticleCardList articles={articles} />
            <LoadMoreButton
              initialCount={articles.length}
              totalCount={totalCount}
            />
          </div>
        </div>
      </main>
    </>
  );
}
