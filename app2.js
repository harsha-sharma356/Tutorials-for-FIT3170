import { createWorker } from 'tesseract.js';

(async () => {
  // 1. Create a worker
  const worker = await createWorker('eng'); // Specify the language (e.g., 'eng' for English)
  while (1 == 1) {
  
  // 2. Recognize text from an image (can be a local path, URL, or Buffer)
  const ret = await worker.recognize('plzwriteoutput1.jpeg');

  // 3. Log the extracted text
  console.log(ret.data.text);
  }
  // 4. Terminate the worker
})();