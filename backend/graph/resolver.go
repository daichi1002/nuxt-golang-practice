package graph

import (
	"backend/graph/model"
	"log"

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
		ID:      input.ID,
		Title:   input.Title,
		Content: input.Content,
	}

	err := r.DB.Save(&newArticle).Error

	if err != nil {
		*result = true
	}

	return result, err
}

func (r *Resolver) deleteArticle(id int) (*bool, error) {
	var result *bool

	err := r.DB.Delete(&model.Article{}, id).Error

	if err != nil {
		*result = true
	}

	return result, err
}

func (r *Resolver) registerUser(input *model.UserInput) (*model.User, error) {
	result := &model.User{
		ID:       input.ID,
		Name:     input.Name,
		Email:    input.Email,
		Password: input.Password,
		Job:      input.Job,
		Role:     input.Role,
	}
	err := r.DB.Save(&result).Error

	if err != nil {
		log.Fatal(err)
		return nil, err
	}

	return result, nil
}
