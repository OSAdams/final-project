SET client_min_messages TO WARNING;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
DROP SCHEMA public CASCADE;

CREATE SCHEMA public;

CREATE TABLE public.users (
	"userId"         serial NOT NULL,
	"username"       TEXT NOT NULL UNIQUE,
	"hashedPassword" TEXT NOT NULL,
	"createdAt"      timestamptz NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.comments (
	"commentId" serial NOT NULL,
	"comment"   TEXT NOT NULL,
	"recipeId"  integer NOT NULL,
	"userId"    integer NOT NULL,
	"upVote"    integer,
	"downVote"  integer,
	CONSTRAINT "comments_pk" PRIMARY KEY ("commentId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.recipes (
	"recipeId"     serial NOT NULL,
	"recipeName"   TEXT NOT NULL UNIQUE,
	"recipeRating" integer NOT NULL,
	"spoonApiId"   integer NOT NULL UNIQUE,
	CONSTRAINT "recipes_pk" PRIMARY KEY ("recipeId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.bookmarks (
	"bookmarkId" serial NOT NULL,
	"userId"     integer NOT NULL,
	"recipeId"   integer NOT NULL,
	CONSTRAINT "bookmarks_pk" PRIMARY KEY ("bookmarkId")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "comments" ADD CONSTRAINT "comments_fk0" FOREIGN KEY ("recipeId") REFERENCES "recipes"("recipeId");
ALTER TABLE "comments" ADD CONSTRAINT "comments_fk1" FOREIGN KEY ("userId") REFERENCES "users"("userId");


ALTER TABLE "bookmarks" ADD CONSTRAINT "bookmarks_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");
ALTER TABLE "bookmarks" ADD CONSTRAINT "bookmarks_fk1" FOREIGN KEY ("recipeId") REFERENCES "recipes"("recipeId");
