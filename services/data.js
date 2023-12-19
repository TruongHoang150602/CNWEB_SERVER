import { subHours, subMinutes } from "date-fns";

const now = new Date();

const userResultSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        testId: {
            type: Schema.Types.ObjectId,
            ref: "Test",
            required: true,
        },
        answers: [userAnswerSchema],
        score: {
            type: Number,
            required: true,
        },
        isSubmitted: {
            type: Boolean,
        },
        type: {
            type: String,
            enum: ["practice", "test"],
            required: true,
        },
    },
    {
        timestamps: true, //  Thêm cấu trúc timestamps de co createdAt voi updatedAt
    }
);



export const posts = [
    {
        id: "5e887faca2b7a1ddce01221a", // _id cung duoc 
        author: {
            id: "5e86809283e28b96d2d38537",
            avatar: "/assets/avatars/avatar-anika-visser.png",
            name: "Anika Visser",
        },
        comments: [
            {
                id: "5e887fc17162ba254da30771",
                author: {
                    id: "5e887b7602bdbc4dbb234b27",
                    avatar: "/assets/avatars/avatar-jie-yan-song.png",
                    name: "Jie Yan Song",
                },
                createdAt: subHours(now, 3).getTime(),
                content: "Could use some more statistics, but that’s me haha",
            },
            {
                id: "5e887fc759bebe8d5d54a2e5",
                author: {
                    id: "5e887a1fbefd7938eea9c981",
                    avatar: "/assets/avatars/avatar-penjani-inyene.png",
                    name: "Penjani Inyene",
                },
                createdAt: subHours(now, 2).getTime(),
                content:
                    "Hmm, honestly this looks nice but I would change the shadow though",
            },
        ],
        createdAt: subHours(now, 4).getTime(),
        likedList: [], //danh sach user da like
        likes: 24,
        attachments: "/assets/covers/minimal-1-4x3-large.png",
        content: "Just made this overview screen for a project, what-cha thinkin?",
    },
    {
        id: "5e887faf03e78a5359765636",
        author: {
            id: "5e86809283e28b96d2d38537",
            avatar: "/assets/avatars/avatar-anika-visser.png",
            name: "Anika Visser",
        },
        comments: [
            {
                id: "5e887fde4992eca63b9e9ef5",
                author: {
                    id: "5e8877da9a65442b11551975",
                    avatar: "/assets/avatars/avatar-iulia-albu.png",
                    name: "Iulia Albu",
                },
                createdAt: subHours(now, 3).getTime(),
                content:
                    "That’s actually deep. Thanks for the design, would you consider making an interaction?",
            },
            {
                id: "5e887feb11b7add1ebfcca78",
                author: {
                    id: "5e887b209c28ac3dd97f6db5",
                    avatar: "/assets/avatars/avatar-fran-perez.png",
                    name: "Fran Perez",
                },
                createdAt: subHours(now, 2).getTime(),
                content: "Oh... so sentimental",
            },
        ],
        createdAt: subHours(now, 7).getTime(),
        likedList: [],
        likes: 65,
        content:
            "As a human being, you are designed in a way that makes you incapable of experiencing any positive emotion unless you set an aim and progress towards it. What makes you happy is not, in fact, attaining it, but making progress towards it.",
    },
];