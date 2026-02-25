import App from './aap';
import db from './config/db';

const PORT = process.env.PORT || 5000;

db();
App.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
