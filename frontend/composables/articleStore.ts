import type { Ref } from "vue";
import { Article, GetArticleQuery } from "~~/lib/generated/client";

type ArticleState = {
  article: GetArticleQuery[];
};

export const useArticle = () => {
  const state = useState<ArticleState>("article_state", () => ({
    article: [],
  }));

  return {
    state: readonly(state),
    setArticle: setArticle(state),
  };
};

const setArticle = (state: Ref<ArticleState>) => {
  return (articles: GetArticleQuery[]) => {
    state.value.article = articles;
  };
};
