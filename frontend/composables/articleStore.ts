import type { Ref } from "vue";

type ArticleState = {
  article: ArticleType[];
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
  return (articles: ArticleType[]) => {
    state.value.article = articles;
  };
};
