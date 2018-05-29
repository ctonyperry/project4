create table USERS (
  ID serial,
  USER_NAME varchar(100) NOT NULL,
  FIRST_NAME varchar(100) NOT NULL,
  LAST_NAME varchar(100) NOT NULL,
  EMAIL varchar(100) NOT NULL,
  PASSWORD varchar(100) NOT NULL,
  ADMIN boolean,
  PROFILE_PHOTO_URL varchar(500)
  );