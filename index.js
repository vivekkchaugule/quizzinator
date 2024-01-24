const fs = require('fs');
const csv = require('csv-parser');
const { getVectorStore } = require('./loaders');

if (process.argv.length < 3) {
  console.log('Usage: node index.js <csv_file_path>');
  process.exit(1);
}

const csvFilePath = process.argv[2];

const documentList = [];

fs.createReadStream(csvFilePath)
  .pipe(csv())
  .on('data', (row) => {
    // Assuming the CSV file has columns named 'document_type' and 'document_url'
    const documentType = row.document_type;
    const documentUrl = row.document_url;

    if (documentType && documentUrl) {
      documentList.push({ document_type: documentType, document_url: documentUrl });
    } else {
      console.error('Invalid CSV format. Make sure the columns "document_type" and "document_url" exist.');
      process.exit(1);
    }
  })
  .on('end', () => {
    // Output the key-value pairs
    console.log('Parsed Document List:');
    console.log(JSON.stringify(documentList, null, 2));
  })
  .on('error', (error) => {
    console.error('Error reading CSV file:', error.message);
    process.exit(1);
  });


/**
 *  STEP: 1 Parse The Document, Then Load it into VectoreDB
 */
const vectorStore = await getVectorStore(documentList);

/**
 *  STEP: 2 Create Document Retrieval Chain
 */
const documentRetrievalChain = await getdocumentRetrievalChain(vectorStore);






