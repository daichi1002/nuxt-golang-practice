package graph

import (
	"backend/graph/model"
	"context"

	"gorm.io/gorm"
)

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

type Resolver struct{
	DB *gorm.DB
}

func (r *Resolver) getArticle(ctx context.Context) ([]*model.Article, error) {
	var articles []*model.Article
	err := r.DB.Find(&articles).Error

	return articles, err
}