import { app } from './app';
import { runDb } from './app/repositories/db';
import { config } from 'dotenv';

config();

const port = 8080;

app.listen(port, async () => {
    await runDb();
    console.log(`Server listening on port ${port}`);
});
