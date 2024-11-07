const express = require('express');
//const fetch = require('node-fetch'); // or any other library to make HTTP requests
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); 

app.get('/get-directline-token', async (req, res) => {
  try {
    // Example: Get the DirectLine token from an external service
    const directLineToken = await getDirectLineTokenFromExternalService();
   console.log("the method is hitted -->",directLineToken);

    res.json({ token: directLineToken });
  } catch (err) {
    console.error('Error fetching DirectLine token:', err);
    res.status(500).send('Failed to fetch token');
  }
});

async function getDirectLineTokenFromExternalService() {
  // Call to Bot Framework or your own service to get the tokensers
  const response = await fetch('https://directline.botframework.com/v3/directline/tokens/generate', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer oKiaLIiAhI4.dFL3fKeMUlYl21vN7tNWKCBUJuRYga94wRnWXtzSeVU',
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  return data.token;
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
