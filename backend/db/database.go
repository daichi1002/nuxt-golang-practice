package db

import (
	"backend/env"
	"fmt"
	"log"

	"backend/graph/model"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func ConnectDatabaseWithGorm() (*gorm.DB, error) {

	connectTemplate := "%s:%s@%s/%s?%s"
	connect := fmt.Sprintf(connectTemplate, env.DBUser, env.DBPass, env.DBProtocol, env.DBName, "parseTime=true")

	db, err := gorm.Open(mysql.Open(connect), &gorm.Config{})

	if err != nil {
		log.Fatal(err)
	}

	db.AutoMigrate(&model.Article{}, &model.User{})

	return db, nil
}
