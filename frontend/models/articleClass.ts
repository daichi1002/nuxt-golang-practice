import { sdk } from "~~/gqls/graphqlClient";

export class ArticleClass {
  static async getAllArticles() {
    const newInstance = new this();

    const setValue = await newInstance.setValuesFromDB();

    return setValue;
  }

  async setValuesFromDB() {
    const response = await sdk.getArticle().then((res) => {
      return res.getArticle;
    });

    if (response === null || response === undefined || response.length === 0) {
      throw new Error("データの取得に失敗しました。");
    }

    const articles: ArticleType[] = [];

    response.forEach((value) => {
      const article: ArticleType = {
        id: value.id,
        title: value.title,
        content: value.content,
      };
      articles.push(article);
    });
    return articles;
  }
}
