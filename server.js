const { app } = require("./app")

const dotenv = require("dotenv")
dotenv.config({ path: "./config.env" })

const PORT = process.env.PORT || 5402;
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});