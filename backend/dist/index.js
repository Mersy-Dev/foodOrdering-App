"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
require("dotenv/config");
const mongoose_1 = __importDefault(require("mongoose"));
const MyUserRoute_1 = __importDefault(require("./routes/MyUserRoute"));
mongoose_1.default.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to the database");
}).catch((error) => {
    console.log("Error: ", error);
});
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get("/health", (req, res) => {
    res.status(200).json({ message: "Health is OK" });
}); //http://localhost:7000/health
//api/my/user
app.use("/api/user", MyUserRoute_1.default);
app.listen(7000, () => {
    console.log("Server is running on port 7000");
});
