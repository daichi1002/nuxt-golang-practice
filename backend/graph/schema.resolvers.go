package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"backend/graph/generated"
	"backend/graph/model"
	"context"
)

func (r *mutationResolver) RegisterArticle(ctx context.Context, input *model.ArticleInput) (*bool, error) {
	return r.registerArticle(input)
}

func (r *mutationResolver) DeleteArticle(ctx context.Context, id int) (*bool, error) {
	return r.deleteArticle(id)
}

func (r *queryResolver) GetArticle(ctx context.Context) ([]*model.Article, error) {
	return r.getArticle()
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
