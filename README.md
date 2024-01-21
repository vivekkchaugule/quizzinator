# quizzinator
quizzinator is a command line utility that enables users to conduct self-test based from the reading material (PDF, HTML, Doc, README.md) provided.

# Motivation
Ever need for study-buddy who asks you a questions from your text-book? or As a software developer, do you feel the need for self-test or conduct a self-interview against things you learnt from documentation?

- quizzinator helps you create a self-test from the documents you provide it.
- quizzinator supports variaty of documents. 

# How it Works?
quizzinator is an Commandline application based on RAG (Retrieval Augmented Generation)-LLM Concepts. 
- Application is provided a context from document you provide at the command line. 
- Quiz Agent parses the document and stores document information into memory.
- Then, Agent creates a test suite with 15 different questions, increasing in levels.
- Agent assesses answer and provides score at the end of the quiz.



