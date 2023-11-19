import mongoose from 'mongoose';
import app from './app';
import configs from './app/configs';

async function main() {
  try {
    await mongoose.connect(configs.database_url as string);
    app.listen(configs.port, () => {
      console.log(`server is running on port ${configs.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
