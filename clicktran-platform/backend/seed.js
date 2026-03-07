const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
    const user = await prisma.user.upsert({
        where: { username: "creator" },
        update: {},
        create: {
            username: "creator",
            bio: "Entrepreneur | Creator",
            avatar: "https://i.pravatar.cc/150",
            links: {
                create: [
                    { title: "My Website", url: "https://example.com" },
                    { title: "YouTube Channel", url: "https://youtube.com" },
                    { title: "Book a Call", url: "https://calendly.com" }
                ]
            }
        }
    });
    console.log("Seeded user:", user);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });