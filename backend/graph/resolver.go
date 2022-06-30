package graph

import (
	"backend/graph/model"

	"gorm.io/gorm"
)

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

type Resolver struct {
	DB *gorm.DB
}

func (r *Resolver) getArticle() ([]*model.Article, error) {
	var articles []*model.Article
	err := r.DB.Find(&articles).Error

	return articles, err
}

func (r *Resolver) registerArticle(input *model.ArticleInput) (*bool, error) {
	var result *bool

	newArticle := &model.Article{
		Title:   input.Title,
		Content: input.Content,
	}

	err := r.DB.Create(&newArticle).Error

	if err != nil {
		*result = true
	}

	return result, err
}
