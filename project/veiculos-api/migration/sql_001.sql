-- autocar.address definition

-- Drop table

-- DROP TABLE address;

CREATE TABLE address (
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

-- DROP TABLE category;

CREATE TABLE category (
	code serial4 NOT NULL,
	"name" varchar NOT NULL,
	CONSTRAINT "PK_652a15c02538138f021f1320de8" PRIMARY KEY (code),
	CONSTRAINT "UQ_23c05c292c439d77b0de816b500" UNIQUE (name)
);


-- autocar.person definition

-- Drop table

-- DROP TABLE person;

CREATE TABLE person (
	code serial4 NOT NULL,
	cpf varchar NOT NULL,
	cnpj varchar NOT NULL,
	"name" varchar NOT NULL,
	email varchar NOT NULL,
	phone varchar NOT NULL,
	CONSTRAINT "PK_f4d2a1a6767e8b4c143642a991a" PRIMARY KEY (code)
);


-- autocar.person_auth definition

-- Drop table

-- DROP TABLE person_auth;

CREATE TABLE person_auth (
	code serial4 NOT NULL,
	"password" varchar NOT NULL,
	CONSTRAINT "PK_7aad1887dcf1ac1ca72eac9b0d4" PRIMARY KEY (code),
	CONSTRAINT "UQ_7aad1887dcf1ac1ca72eac9b0d4" UNIQUE (code),
	CONSTRAINT "FK_7aad1887dcf1ac1ca72eac9b0d4" FOREIGN KEY (code) REFERENCES person(code)
);


-- autocar.product definition

-- Drop table

-- DROP TABLE product;

CREATE TABLE product (
	code serial4 NOT NULL,
	"name" varchar NOT NULL,
	image varchar NOT NULL,
	whatsapp varchar NOT NULL,
	value numeric NOT NULL,
	"categoryCode" int4 NULL,
	"addressCode" int4 NULL,
	CONSTRAINT "PK_99c39b067cfa73c783f0fc49a61" PRIMARY KEY (code),
	CONSTRAINT "REL_64506b64424f4d7bb50574ecb1" UNIQUE ("addressCode"),
	CONSTRAINT "FK_64506b64424f4d7bb50574ecb13" FOREIGN KEY ("addressCode") REFERENCES address(code),
	CONSTRAINT "FK_eba03ffe5b581c64f33b50e2730" FOREIGN KEY ("categoryCode") REFERENCES category(code)
);