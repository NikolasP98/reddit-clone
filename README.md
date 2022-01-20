# This is a Reddit Clone

This is a personal project to display fullstack capabilities.
The project is built on top of the PERN stack (Postgres, Express, React.js, Node.js) and demonstrates integration between frontend, backend and the database for a fully-working application.

## 1. Installation

To install, clone the repository, navigate to both client & server directories and install the dependencies using `npm i` or `yarn` (or your preffered obscure package manager).

### 1.1 Database Setup

The Database runs on postgres. If you don't have postgres installed on your machine, go ahead and install through [this link](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads).
Within the `server` directory, you'll find an `.sql` file that will create your database model for you.
Before running the `.sql` file, make sure you create your DB by running the following command on the `psql cli` that came installed along the rest of postgres: `CREATE DATABASE [database_name];` and then navigate to it `\c [database_name]`.
All you need to do now is install the aforementioned file by running: `\i [project_location]/server/data.sql`

Your database model should be up and running! To verify that the model has been installed properly, run `\d` on your psql cli to check if the project tables are present.

## 2. Usage

If you're a total beast and wish to run this app on your local machine, you'll have to set up 3 environments: client, server and database. The following steps will dive into detail on how to accomplish this:

### 2.1 Running Client

The client runs on react, all you have to do here is make sure the dependencies are installed properly.
The cli command to run the client server is `npm run dev` or `yarn dev`. If you see a functioning frontend on your localhost, you've successfully checked this requirement off the list!

### 2.2 Running Server

The server runs on express, like the client, the only requirement is to install the dependencies properly.
The cli command to run the backend server is `npm run start` or `yarn start`. If the cli displays the server running on a specific port, you're almost there! Jump to the next step to

### 2.3 Running DB
