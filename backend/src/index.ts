import { app } from './app';
import { runDb } from './repositories/db';

const port = 8080;

app.listen(port, async () => {
    await runDb();
    console.log(`Server listening on port ${port}`);
});
