# Resume & Cover Letter Generator API

This project is a Resume & Cover Letter Generator API built using Bun, GraphQL Yoga, Elysia.js, and OpenAI. It allows users to generate AI-powered resumes and cover letters by providing relevant details such as name, job title, experience, and company name.

## Tech Stack

- **[Bun](https://bun.sh/)** - A fast JavaScript runtime for server-side applications
- **[GraphQL Yoga](https://the-guild.dev/graphql/yoga-server)** - A GraphQL server framework
- **[Elysia.js](https://elysiajs.com/)** - A lightweight TypeScript framework for building APIs
- **[OpenAI API](https://platform.openai.com/)** - Used to generate resumes and cover letters

## Features

- Generate AI-powered resumes
- Generate AI-powered cover letters
- Lightweight and fast with Bun and Elysia.js
- GraphQL API for structured and flexible queries

## Installation

### Prerequisites

Ensure you have **Bun** installed:

```sh
curl -fsSL https://bun.sh/install | bash
```

### Clone the repository

```sh
git clone https://github.com/your-username/resume-cover-letter-generator.git
cd resume-cover-letter-generator
```

### Install dependencies

```sh
bun install
```

### Environment Variables

Create a `.env` file in the root directory and add your OpenAI API key:

```sh
OPENAI_API_KEY=your-api-key-here
```

## Running the Project

Start the development server:

```sh
bun run dev
```

## Usage

### GraphQL Playground

Once the server is running, access the GraphQL Playground at:

```
http://localhost:3000/graphql
```

### Example Query

#### Generate AI Resume

```graphql
mutation {
  generateAIResume(
    name: "John Doe"
    title: "Software Engineer"
    experience: ["Worked at Google", "Built scalable APIs"]
  )
}
```

#### Generate AI Cover Letter

```graphql
mutation {
  generateAICoverLetter(
    name: "Jane Doe"
    position: "Backend Developer"
    company: "TechCorp"
  )
}
```

## Deployment

You can deploy this API using AWS Lambda and a serverless setup. Follow these steps:

1. Install AWS Serverless Framework
   ```sh
   bun install -g serverless
   ```
2. Configure AWS credentials
   ```sh
   serverless config credentials --provider aws --key YOUR_AWS_KEY --secret YOUR_AWS_SECRET
   ```
3. Deploy to AWS
   ```sh
   serverless deploy
   ```

## Contributing

Feel free to fork this repository and submit pull requests!
