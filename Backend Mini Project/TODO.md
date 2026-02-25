# Backend Mini Project Guide: CRUD Operations with MongoDB (TypeScript Edition)

Namaste! 🙏 Yeh ek detailed guide aur TODO list hai aapke backend mini project ke liye jisme hum **TypeScript** ka use karenge. Isme hum ek **"Task Manager API"** banayenge jisme aap tasks ko Create, Read, Update, aur Delete (CRUD) kar sakenge using MongoDB.

---

## 🚨 ERRORS TO SOLVE - Task Model & Related Files

Aapne is project mein kai errors daale hain. Niche sabhi errors ki list hai:

### 📁 src/models/task.model.ts - ERRORS:

- [ ] **ERROR 1**: Line 5 - Using model before schema is defined. `mongoose.model('Task', taskSchema)` is used BEFORE `taskSchema` is declared. Fix: Define schema BEFORE creating the model.

- [ ] **ERROR 2**: Line 12 - `title` field is missing `required: true` validation.

- [ ] **ERROR 3**: Line 16 - `description` has wrong type: `Number` should be `String`.

- [ ] **ERROR 4**: Line 22-23 - `status` enum has typos: `'pendng'`, `'in-progess'`, `'completd'` should be `'pending'`, `'in-progress'`, `'completed'`.

- [ ] **ERROR 5**: Line 28 - `dueDate` type is `String` but should be `Date`.

- [ ] **ERROR 6**: Missing TypeScript interface for the Task document. Should have `export interface ITask extends Document { ... }`.

- [ ] **ERROR 7**: Should add index on `status` field for better query performance: `taskSchema.index({ status: 1 });`.

### 📁 src/controllers/task.controller.ts - ERRORS:

- [ ] **ERROR 8**: Line 8 - `res.json(201, ...)` syntax is wrong. Should be `res.status(201).json(...)`.

- [ ] **ERROR 9**: Line 14 - Missing `return` statement before `res.status(404)...` in getTaskById.

- [ ] **ERROR 10**: Line 28 - `findByIdAndUpdate` doesn't return updated document by default. Need to add `{ new: true }` option.

- [ ] **ERROR 11**: Line 41 - Using `deleteById` which is not a Mongoose method. Should use `findByIdAndDelete`.

### 📁 src/Routes/task.routes.ts - ERRORS:

- [ ] **ERROR 12**: Line 5 - Using `router` before it's declared. Move `const router = express.Router();` to the top.

- [ ] **ERROR 13**: Line 9 - Wrong HTTP method: `post` should be `get` for fetching all tasks.

- [ ] **ERROR 14**: Line 12 - Missing `/` in path: `'tasks'` should be `'/tasks'`.

- [ ] **ERROR 15**: Line 16-17 - Duplicate route for getTaskById. Remove one.

- [ ] **ERROR 16**: Line 20 - Wrong HTTP method: `post` should be `put` or `patch` for update.

- [ ] **ERROR 17**: Line 23 - Wrong HTTP method: `put` should be `delete` for delete.

- [ ] **ERROR 18**: Missing `export default router;` at the end of the file.

### 📁 src/aap.ts - ERRORS:

- [ ] **ERROR 19**: Missing import for task routes. Should be: `import taskRoutes from './Routes/task.routes';`

- [ ] **ERROR 20**: Missing 'cors' middleware. Should have: `app.use(cors());`

- [ ] **ERROR 21**: Missing route registration. Should have: `app.use('/api', taskRoutes);`

### 📁 src/server.ts - ERRORS:

- [ ] **ERROR 22**: Syntax error - using square brackets instead of parentheses: `App.listen [3000]` should be `App.listen(PORT, () => { ... })`

- [ ] **ERROR 23**: Missing PORT variable declaration. Should have: `const PORT = process.env.PORT || 5000;`

- [ ] **ERROR 24**: Not calling the database connection function. Should call: `db();`

- [ ] **ERROR 25**: Missing callback function with console.log

### 📁 src/config/db.ts - ERRORS:

- [ ] **ERROR 26**: This file contains Express server code instead of MongoDB connection. Should have mongoose connection logic.

---

## ✅ SOLUTION GUIDE

### Fix src/models/task.model.ts:
```
typescript
import mongoose, { Schema, Document } from 'mongoose';

// 1. Define Interface FIRST
export interface ITask extends Document {
    title: string;
    description?: string;
    status: 'pending' | 'in-progress' | 'completed';
    dueDate?: Date;
    createdAt: Date;
    updatedAt: Date;
}

// 2. Define Schema
const taskSchema = new Schema<ITask>({
    title: {
        type: String,
        required: true  // FIX: Added required
    },
    description: {
        type: String,  // FIX: Changed from Number to String
    },
    status: {
        type: String,
        enum: ['pending', 'in-progress', 'completed'],  // FIX: Fixed typos
        default: 'pending'
    },
    dueDate: {
        type: Date,  // FIX: Changed from String to Date
    }
}, { timestamps: true });

// 3. Add index
taskSchema.index({ status: 1 });

// 4. Create model AFTER schema
const Task = mongoose.model<ITask>('Task', taskSchema);
export default Task;
```

### Fix src/controllers/task.controller.ts:
- Use `res.status(201).json(...)` instead of `res.json(201, ...)`
- Add `return` before error responses
- Add `{ new: true }` to `findByIdAndUpdate`
- Use `findByIdAndDelete` instead of `deleteById`

### Fix src/Routes/task.routes.ts:
```
typescript
import express from 'express';
import taskController from '../controllers/task.controller';

const router = express.Router();

router.post('/tasks', taskController.createTask);
router.get('/tasks', taskController.getAllTasks);
router.get('/tasks/:id', taskController.getTaskById);
router.put('/tasks/:id', taskController.updateTask);
router.delete('/tasks/:id', taskController.deleteTask);

export default router;
```

### Fix src/aap.ts:
```
typescript
import express, { Application } from 'express';
import cors from 'cors';
import taskRoutes from './Routes/task.routes';

const app: Application = express();
app.use(cors());
app.use(express.json());

// Register routes
app.use('/api', taskRoutes);

export default app;
```

### Fix src/server.ts:
```
typescript
import App from './aap';
import db from './config/db';

const PORT = process.env.PORT || 5000;

db(); // Call database connection

App.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

### Fix src/config/db.ts:
```
typescript
import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/taskmanager');
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1);
    }
};

export default connectDB;
```

---

Happy Coding! 🚀 Solve these errors one by one and your Task Manager API will work perfectly!
