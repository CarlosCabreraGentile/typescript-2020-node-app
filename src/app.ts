import express, { Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';
import todoRoutes from './routes/todos';

const app = express();

//parse the body of all incoming request, and extract any json data in there 
app.use(json());
app.use('/todos', todoRoutes);

//Error Handling Middleware
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(400).json({ message: error.message });
});

app.listen(3000);