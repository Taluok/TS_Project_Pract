"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTweet = void 0;
const generateTweet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tweet = {
            id: crypto.randomUUID(),
            content: `¡Tweet generado automáticamente!`,
        };
        res.json(tweet);
    }
    catch (error) {
        res.status(500).json({ error: 'Error generando tweet' });
    }
});
exports.generateTweet = generateTweet;
