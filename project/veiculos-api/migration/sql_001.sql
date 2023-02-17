-- DROP SCHEMA autocar;

CREATE SCHEMA autocar AUTHORIZATION postgres;

-- DROP SEQUENCE autocar.address_code_seq;

CREATE SEQUENCE autocar.address_code_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE autocar.category_code_seq;

CREATE SEQUENCE autocar.category_code_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE autocar.clinic_base64_code_seq;

CREATE SEQUENCE autocar.clinic_base64_code_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE autocar.person_auth_code_seq;

CREATE SEQUENCE autocar.person_auth_code_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE autocar.person_code_seq;

CREATE SEQUENCE autocar.person_code_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE autocar.product_code_seq;

CREATE SEQUENCE autocar.product_code_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;-- autocar.address definition

-- Drop table

-- DROP TABLE autocar.address;

CREATE TABLE autocar.address (
	code serial4 NOT NULL,
	cep varchar NOT NULL,
	logradouro varchar NOT NULL,
	bairro varchar NOT NULL,
	localidade varchar NOT NULL,
	uf varchar NOT NULL,
	CONSTRAINT "PK_4e1d6ab912a044ea3f5e15cf7a0" PRIMARY KEY (code)
);


-- autocar.category definition

-- Drop table

-- DROP TABLE autocar.category;

CREATE TABLE autocar.category (
	code serial4 NOT NULL,
	"name" varchar NOT NULL,
	CONSTRAINT "PK_652a15c02538138f021f1320de8" PRIMARY KEY (code),
	CONSTRAINT "UQ_23c05c292c439d77b0de816b500" UNIQUE (name)
);


-- autocar.clinic_base64 definition

-- Drop table

-- DROP TABLE autocar.clinic_base64;

CREATE TABLE autocar.clinic_base64 (
	code serial4 NOT NULL,
	url text NOT NULL,
	cliniclogobase64 text NOT NULL,
	CONSTRAINT "PK_b069d02247c0187d2e02b7034b2" PRIMARY KEY (code)
);


-- autocar.person definition

-- Drop table

-- DROP TABLE autocar.person;

CREATE TABLE autocar.person (
	code serial4 NOT NULL,
	cpf varchar NOT NULL,
	cnpj varchar NOT NULL,
	"name" varchar NOT NULL,
	email varchar NOT NULL,
	phone varchar NOT NULL,
	CONSTRAINT "PK_f4d2a1a6767e8b4c143642a991a" PRIMARY KEY (code)
);


-- autocar.typeorm_metadata definition

-- Drop table

-- DROP TABLE autocar.typeorm_metadata;

CREATE TABLE autocar.typeorm_metadata (
	"type" varchar NOT NULL,
	"database" varchar NULL,
	"schema" varchar NULL,
	"table" varchar NULL,
	"name" varchar NULL,
	value text NULL
);


-- autocar.person_auth definition

-- Drop table

-- DROP TABLE autocar.person_auth;

CREATE TABLE autocar.person_auth (
	code serial4 NOT NULL,
	"password" varchar NOT NULL,
	CONSTRAINT "PK_7aad1887dcf1ac1ca72eac9b0d4" PRIMARY KEY (code),
	CONSTRAINT "UQ_7aad1887dcf1ac1ca72eac9b0d4" UNIQUE (code),
	CONSTRAINT "FK_7aad1887dcf1ac1ca72eac9b0d4" FOREIGN KEY (code) REFERENCES autocar.person(code)
);


-- autocar.product definition

-- Drop table

-- DROP TABLE autocar.product;

CREATE TABLE autocar.product (
	code serial4 NOT NULL,
	"name" varchar NOT NULL,
	image varchar NOT NULL,
	whatsapp varchar NOT NULL,
	value numeric NOT NULL,
	"categoryCode" int4 NULL,
	"addressCode" int4 NULL,
	CONSTRAINT "PK_99c39b067cfa73c783f0fc49a61" PRIMARY KEY (code),
	CONSTRAINT "REL_64506b64424f4d7bb50574ecb1" UNIQUE ("addressCode"),
	CONSTRAINT "FK_64506b64424f4d7bb50574ecb13" FOREIGN KEY ("addressCode") REFERENCES autocar.address(code),
	CONSTRAINT "FK_eba03ffe5b581c64f33b50e2730" FOREIGN KEY ("categoryCode") REFERENCES autocar.category(code)
);
